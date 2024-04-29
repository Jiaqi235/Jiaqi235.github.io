
// Component for Vocabulary exercises (task 1, /learn/vocabulary/exercises.html)

import IconButtonTemplate from './iconButton.js'

export default {
  data() {
    return {
      responses: [],
      completedFields: [], // Maps field index to whether the answer is correct and was checked.
      completed: false,
      checkPerformed: false,
    };
  },
  props: ["exerciseIndex"],
  methods: {
    canCheck() {
        return this.responses.filter(x => x === "").length == 0
    },
    setupExercise() {
      if (this.responses.length == 0) {
        const responses = [];
        const completedFields = [];
        for (let i = 0; i < this.$parent.exercises[this.exerciseIndex].answers.length; i++) {
          responses.push("");
          completedFields.push(false);
        }
        this.responses = responses;
        this.completedFields = completedFields;
      }
    },
    nextExercise() {
      if (this.completed) {
        this.$parent.nextExercise();
      }
    },
    skipExercise() {
      this.completed = true;
      this.nextExercise();
    },
    check() {
      if (this.canCheck()) {
        this.checkPerformed = true;
        for (let i = 0; i < this.completedFields.length; i++) {
          this.completedFields[i] = this.isResponseCorrect(i);
        }
        if (this.allResponsesAreCorrect) {
          this.completed = true;
          this.$parent.showToast("✅ Correct", "You may continue to the next exercise.");
        } else {
          // Newline does not work.
          this.$parent.showToast("Incorrect", "Revise the words & spelling and try again. You may return to previous exercises to check other words.");
        }
      }
    },
    phrase() {
      return this.exercise.phrase;
    },
    isResponseCorrect(index) {
      this.setupExercise();
      let response = this.responses[index];
      response = response.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); // Consider answers with diacritics removed and as lowercase
      let normalizedAnswer = this.exercise.answers[index];
      normalizedAnswer = normalizedAnswer.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return response == normalizedAnswer;
    },
    exerciseFieldClass(index) {
      let isCorrect = this.isResponseCorrect(index);
      return {
        "exercise-field-correct": !this.checkPerformed || isCorrect,
        "exercise-field-incorrect": this.checkPerformed && !isCorrect,
      }
    },
    exerciseFieldIconClass(index) {
      let isCorrect = this.isResponseCorrect(index);
      // Pencil icon for ok/incomplete, X icon for incorrect
      return {
        "bi-pencil": !this.checkPerformed || isCorrect,
        "bi-check-lg": this.checkPerformed && isCorrect,
        "bi-x-lg": this.checkPerformed && !isCorrect,
      }
    },
  },
  components: {
    "iconbutton": IconButtonTemplate,
  },
  computed: {
    exercise() {
      return this.$parent.exercises[this.exerciseIndex];
    },
    isLast() {
      return this.exerciseIndex == (this.$parent.totalExercises - 1);
    },
    word() {
      return this.exercise.word;
    },
    icon() {
      return this.exercise.icon;
    },
    phrasePartsAmount() {
      return this.exercise.phrase.length;
    },
    wordTranslation() {
      return this.exercise.wordTranslation;
    },
    continueButtonText() {
      return this.completed ? "Continue" : "Check" 
    },
    allResponsesAreCorrect() {
        for (let i = 0; i < this.responses.length; i++) {
          if (!this.isResponseCorrect(i)) {
            return false;
          }
        }
        return true;
    },
    continueButtonClass() {
        return {
          disabled: !this.canCheck(),
          "btn-success": this.completed,
          "btn-outline-primary": !this.canCheck() && this.completed,
          "btn-primary": this.canCheck() && !this.completed,
        }
    },
  },
  mounted() {
    this.setupExercise()
  },
  template: "#exercise-template"
}