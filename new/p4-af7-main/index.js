
import { createApp } from 'vue'
import CardTemplate from './components/card.js'
import NavBarTemplate from './components/navBar.js'
import FooterTemplate from './components/pageFooter.js'
import CalendarTemplate from '../../components/calendar.js'
import { dummyAlert } from "./dummyAlert.js"
import LANGUAGES from "./languages.js"

const LEARNING_CARDS = [
  {
    name: "Vocabulary",
    description: "Learn new words to use in practical scenarios.",
    icon: "bi-alphabet-uppercase",
    info: "12 topics available",
    href: "learn/vocabulary/topics.html",
    isDummy: false,
  },
  {
    name: "Grammar",
    description: "Learn grammar rules and syntax.",
    icon: "bi-spellcheck",
    info: "16 lessons available",
    isDummy: true,
  },
  {
    name: "Writing",
    description: "Learn sentence structures for formal writing.",
    icon: "bi-pencil",
    info: "3 lessons available",
    isDummy: true,
  },
  {
    name: "Pronunciation",
    description: "Learn to speak fluidly in conversations.",
    icon: "bi-mic",
    info: "5 guides available",
    isDummy: true,
  },
]

const PRACTICE_CARDS = [
  {
    name: "Reading",
    description: "Practice reading with real articles of various topics.",
    icon: "bi-book",
    info: "20 articles available",
    href: "practice/reading/articles.html?language=english",
    isDummy: false,
  },
  {
    name: "Listening",
    description: "Practice listening with narration and dialogue recordings.",
    icon: "bi-ear",
    info: "13 narrations available",
    href: "practice/listening/start.html?language=english",
    isDummy: false,
  },
]

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const app = createApp({
  data() {
    return {
        languages: LANGUAGES,
        learningOptions: LEARNING_CARDS,
        practiceOptions: PRACTICE_CARDS,
    };
  },
  methods: {
    dummyAlert() {
      dummyAlert();
    },
    onCardClick(language) {
      if (language.isDummy) {
        this.dummyAlert();
      }
    },
  },
  computed: {
    isLoggedIn() {
      return urlParams.get("loggedin") == 1;
    },
    language() {
      let language = urlParams.get("language") || "spanish"
      // URLParams are always lowercase; we must capitalize.
      return language.charAt(0).toUpperCase() + language.slice(1);
    },
  },
  components: {
    "navbar": NavBarTemplate,
    "card": CardTemplate,
    "calendar": CalendarTemplate,
    "pagefooter": FooterTemplate,
  },
});
app.mount("#app");
