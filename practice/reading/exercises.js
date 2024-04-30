
import { createApp } from 'vue'
import IconButtonTemplate from '../../components/iconButton.js'
import NavBarTemplate from '../../components/navBar.js'
import FooterTemplate from '../../components/pageFooter.js'
import ExerciseResultsTemplate from '/components/exerciseResults.js'

const LINE_COLORS = [
  'rgb(30, 130, 250)',
  'rgb(66, 245, 123)',
  'rgb(182, 115, 240)',
  'rgb(125, 122, 111)',
  'rgb(242, 107, 90)',
]

function reverseLookup(obj, val){
  return Object.keys(obj).find(e => obj[e] == val)
}

// Source: https://stackoverflow.com/a/12646864
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

// Exercise component
const Exercise = {
  data() {
    return {
      checked: false,
      lines: {},
      selectedLeftOptionIndex: -1, // Currently selected word buttons
      selectedRightOptionIndex: -1,
      relations: {}, // Maps index of left option to right one
      correctRelations: {}, // Matches that were correct and checked via the check button
    };
  },
  props: ['leftOptions', 'rightOptions', 'exerciseIndex', 'exercise'],
  methods: {
    selectLeftOption(index) {
      this.clearPair(index);
      this.selectedLeftOptionIndex = index;
      this.trySetPair();
    },
    selectRightOption(index) {
      this.clearPair(this.selectedLeftOption);
      this.selectedRightOptionIndex = index;
      this.trySetPair();
    },
    trySetPair() {
      if (this.selectedLeftOptionIndex != -1 && this.selectedRightOptionIndex != -1) {
        this.setPair(this.selectedLeftOptionIndex, this.selectedRightOptionIndex);
      }
    },
    setPair(index1, index2) {
      // Remove any previous match to the second (right) word
      if (reverseLookup(this.relations, index2)) {
        this.clearPair(reverseLookup(this.relations, index2));
      }

      // Draw line
      let line = new LeaderLine(
        document.getElementById(this.exerciseIndex + 'LeftOption' + index1),
        document.getElementById(this.exerciseIndex + 'RightOption' + index2)
      );
      line.color = LINE_COLORS[index1];
      line.setOptions({startSocket: 'right', endSocket: 'left'});
      this.lines[index1] = line;
      this.relations[index1] = index2;

      // Unselect options
      this.selectedLeftOptionIndex = -1;
      this.selectedRightOptionIndex = -1;
    },
    clearPair(index) {
      // Remove previous line
      if (this.lines[index]) {
        this.lines[index].remove();
        delete this.lines[index];
      }
      delete this.relations[index];
    },
    clearPairs() {
      for (let index in this.relations) {
        this.clearPair(index);
      }
    },
    check() {
      let correctAnswers = 0;
      for (let i = 0; i < this.optionsAmount; i++) {
        if (this.relations[i] == i) {
          correctAnswers++;
          this.correctRelations[i] = true;
        } else {
          // Notify parent that a mistake was made involving this word,
          // to show it in results screen
          this.$emit("wrongAnswer", this.leftOptions[i]);
        }
      }
      if (correctAnswers == this.optionsAmount) {
        this.$parent.showToast("✅ Correct", "You may continue to the next exercise.");
        this.checked = true;
      } else {
        this.$parent.showToast("Incorrect", "Revise the incorrect pairs and try again.");
      }
    },
    requestQuit() {
      if (confirm("Are you sure you want to quit the exercise?\nYour progress will be saved.")) {
        window.location.href = "/index.html";
      }
    },
    nextExercise() {
      this.clearPairs();
      if (this.exerciseIndex != this.$parent.exercises.length - 1) {
        this.$parent.nextExercise();
      } else {
        this.$parent.showResults();
      }
    },
    leftButtonClass(index) {
      if (this.correctRelations[index]) {
        return {
          'btn-outline-success': true,
          'disabled': true,
        }
      } else {
        return {
          // Fade out paired words,
          // or if a different word from the left column is currently selected (helps guide the user to match them between the 2 columns)
          'faded-out': this.relations[index] != undefined || (this.selectedLeftOptionIndex >= 0 && this.selectedLeftOptionIndex != index),
          'btn-outline-primary': this.selectedLeftOptionIndex != index && this.relations[index] != undefined,
          'btn-primary': this.relations[index] == undefined,
          'active': this.selectedLeftOptionIndex == index,
        }
      }
    },
    rightButtonClass(index) {
      if (this.correctRelations[reverseLookup(this.relations, index)]) {
        return {
          'btn-outline-success': true,
          'disabled': true,
        }
      } else {
        return {
          // Fade out paired words
          'faded-out': this.relations[reverseLookup(this.relations, index)] != undefined || (this.selectedRightOptionIndex >= 0 && this.selectedRightOptionIndex != index),
          'btn-outline-primary': this.selectedRightOptionIndex != index && this.relations[reverseLookup(this.relations, index)] != undefined,
          'btn-primary': this.relations[reverseLookup(this.relations, index)] == undefined,
          'active': this.selectedRightOptionIndex == index,
        }
      }
    },
    isLeftPairCorrect(index) {
      return this.correctRelations[index] == true;
    },
    isRightPairCorrect(index) {
      return this.isLeftPairCorrect(reverseLookup(this.relations, index));
    },
  },
  components: {
    "iconbutton": IconButtonTemplate,
  },
  computed: {
    canCheck() {
      return Object.keys(this.relations).length == this.leftOptions.length;
    },
    optionsAmount() {
      return this.leftOptions.length; // Should always be equal to right options length
    },
    leftOptionsOrder() {
      const order = [];
      for (let i = 0; i < this.optionsAmount; i++) {
        order.push(i);
      }
      shuffleArray(order);
      return order;
    },
    rightOptionsOrder() {
      const order = [];
      for (let i = 0; i < this.optionsAmount; i++) {
        order.push(i);
      }
      shuffleArray(order);
      return order;
    }
  },
  mounted() {
  },
  template: "#exercise-template"
}

const app = createApp({
  data() {
    return {
      toastHeader: "",
      toastBody: "",
      showingResults: false,
      mistakesPerWord: {}, // Words for which incorrect matches were made
      exercises: [
        {
          leftOptions: ["Aesthetic", "Fertilizer", "Moisture", "Spectrum"],
          rightOptions: ["a theory or conception of beauty or art", "a substance added to soil to improve growth.", "water diffused on a surface", "a band of colours or wavelengths"],
          description: "Match words with their definitions.",
          rightOptionsName: "Definition",
        },
        {
          leftOptions: ["Shipment", "Challenge", "Substrate", "Sample", "Engulfed"],
          rightOptions: ["Delivery", "Dare", "Soil", "Specimen", "Inundated"],
          description: "Match words with a synonym.",
          rightOptionsName: "Synonym",
        },
        {
          leftOptions: ["Allow", "Porous", "Imaging"],
          rightOptions: ["Verb", "Adjective", "Noun"],
          description: "Match words with their syntactic category.",
          rightOptionsName: "Category",
        },
      ],
    };
  },
  methods: {
    nextExercise() {
      bootstrap.Carousel.getOrCreateInstance('#exercisesCarousel').next();
    },
    previousExercise() {
      bootstrap.Carousel.getOrCreateInstance('#exercisesCarousel').prev();
    },
    showToast(header, body) {
      this.toastHeader = header;
      this.toastBody = body;
      (new bootstrap.Toast('.toast')).show();
    },
    showResults() {
      this.showingResults = true;
      console.log(this.mistakesPerWord);
    },
    showHelp() {
      $("#helpModal").modal('show');
    },
    onWrongAnswer(word) {
      this.mistakesPerWord[word]++;
    },
    getCorrectAnswersCount() {
      return this.totalQuestions - Object.keys(this.mistakesPerWord).length;
    }
  },
  computed: {
    // Exercises array starting from 2nd (index 1) element
    // Used to workaround issues with Bootstrap carousels and vue.
    otherExercises() {
      const exercises = [];
      for (let i = 1; i < this.exercises.length; i++) {
        exercises.push(this.exercises[i]);
      }
      return exercises;
    },
    totalQuestions() {
      let questions = 0;
      for (let i = 0; i < this.exercises.length; i++) {
        questions += this.exercises[i].leftOptions.length;
      }
      return questions;
    }
  },
  components: {
    "navbar": NavBarTemplate,
    "exercise": Exercise,
    "iconbutton": IconButtonTemplate,
    "pagefooter": FooterTemplate,
    "exerciseresults": ExerciseResultsTemplate,
  },
  mounted() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // Initialize word mistake counters
    for (let i = 0; i < this.exercises.length; i++) {
      for (let j = 0; j < this.exercises[i].leftOptions.length; j++) {
        this.mistakesPerWord[this.exercises[i].leftOptions[j]] = 0;
      }
    }
  },
});
app.mount("#app");

// Show tutorial modal on load
$(document).ready(function () {
  $("#helpModal").modal('show');
});
