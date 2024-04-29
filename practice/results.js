
import { createApp } from 'vue'
import NavBarTemplate from '../../components/navBar.js'
import FooterTemplate from '../../components/pageFooter.js'
import ExerciseResultsTemplate from '/components/exerciseResults.js'
import { dummyAlert } from "../../dummyAlert.js"

const app = createApp({
  data() {
    return {
      
    };
  },
  methods: {
    dummyAlert() {
      dummyAlert();
    },
  },
  components: {
    "navbar": NavBarTemplate,
    "pagefooter": FooterTemplate,
    "exerciseresults": ExerciseResultsTemplate,
  },
});
app.mount("#app");
