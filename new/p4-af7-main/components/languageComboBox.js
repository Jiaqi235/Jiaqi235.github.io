
import LANGUAGES from "../languages.js"
import { dummyAlert } from "../../dummyAlert.js"

export default {
  data() {
    return {
      languages: LANGUAGES,
    };
  },
  props: {
    language: {
      type: String,
      default: "Spanish",
    },
  },
  methods: {
    dummyAlert() {
      dummyAlert();
    },
  },
  computed: {
    flagIcon() {
      return `/img/flags/${this.language.toLowerCase()}.svg`;
    },
  },
  template: `
<div class="dropdown d-flex">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Learning {{ language }}
      <img :src="flagIcon" :alt="language + ' flag'" class="inline-img mx-1"/>
  </button>
  <ul class="dropdown-menu">
    <li v-for="otherLanguage in languages">
      <a class="dropdown-item" :class="{'active': otherLanguage.name == language}" href="#" @click="otherLanguage.name != language ? dummyAlert() : ''">
      <div class="d-flex justify-content-between align-items-center">
        {{ otherLanguage.name }}
        <img :src="'/' + otherLanguage.icon" :alt="otherLanguage.name + ' flag'" class="inline-img mx-1"/>
      </div>
      </a>
    </li>
  </ul>
</div>
`
}