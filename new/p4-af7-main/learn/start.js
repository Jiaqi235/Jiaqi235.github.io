
import { createApp } from 'vue'
import NavBarTemplate from '../components/navBar.js'
import FooterTemplate from '../components/pageFooter.js'
import { dummyAlert } from "../dummyAlert.js"

const app = createApp({
  data() {
    return {
      proficiencyIndex: -1,
      contentIndex: -1,
    };
  },
  methods: {
    // Advances the questions carousel to the next question.
    nextQuestionSlide() {
      if (this.proficiencyIndex >= 0) {
        $('#questions-carousel').carousel("next");
      }
    },
    previousQuestionSlide() {
      $('#questions-carousel').carousel("prev");
    },
    proficiencyButtonClass(index) {
      return {
        "btn-outline-primary": this.proficiencyIndex != index,
        "btn-primary": this.proficiencyIndex == index,
      }
    },
    contentButtonClass(index) {
      return {
        "btn-outline-primary": this.contentIndex != index,
        "btn-primary": this.contentIndex == index,
      }
    },
    dummyAlert() {
      dummyAlert()
    },
  },
  computed: {
    continueButton1Class() {
      return {
        disabled: this.proficiencyIndex < 0,
        "btn-outline-success": this.proficiencyIndex < 0,
        "btn-success": this.proficiencyIndex >= 0,
      }
    },
    continueButton2Class() {
      return {
        disabled: this.contentIndex < 0,
        "btn-outline-success": this.contentIndex < 0,
        "btn-success": this.contentIndex >= 0,
      }
    },
  },
  components: {
    "navbar": NavBarTemplate,
    "pagefooter": FooterTemplate,
  },
});
app.mount("#app");
