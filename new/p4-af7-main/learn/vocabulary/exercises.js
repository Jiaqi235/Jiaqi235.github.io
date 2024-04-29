
import { createApp } from 'vue'
import ExerciseTemplate from '../../components/exercise.js'
import IconButtonTemplate from '../../components/iconButton.js'
import NavBarTemplate from '../../components/navBar.js'
import FooterTemplate from '../../components/pageFooter.js'
import EXERCISES from "./exercisesData.js"

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const isTutorial = urlParams.get("istutorial") == 1; // Indicates that the general food vocabulary exercises should be used instead of the banking ones.

const app = createApp({
  data() {
    return {
      toastHeader: "",
      toastBody: "",
      exercises: isTutorial ? EXERCISES.tutorial : EXERCISES.banking,
    };
  },
  methods: {
    nextExercise() {
      bootstrap.Carousel.getOrCreateInstance('#exercisesCarousel').next();
      (new bootstrap.Toast('.toast')).hide();
    },
    previousExercise() {
      bootstrap.Carousel.getOrCreateInstance('#exercisesCarousel').prev();
    },
    showToast(header, body) {
      this.toastHeader = header;
      this.toastBody = body;
      (new bootstrap.Toast('.toast')).show();
    },
    requestQuit() {
      if (confirm("Are you sure you want to quit the exercise?\nYour progress will be saved.")) {
        window.location.href = "/index.html";
      }
    },
    onRegisterClicked() {
      alert("The scenario ends here. Thank you for testing!");
      window.location.href = "/index.html";
    }
  },
  computed: {
    totalExercises() {
      return this.exercises.length;
    },
    isTutorial() {
      return isTutorial;
    }
  },
  components: {
    "navbar": NavBarTemplate,
    "exercise": ExerciseTemplate,
    "iconbutton": IconButtonTemplate,
    "pagefooter": FooterTemplate,
  },
  mounted() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  },
});
app.mount("#app");
