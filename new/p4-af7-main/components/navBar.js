
import LanguageComboBox from '../../components/languageComboBox.js'
import { dummyAlert } from "../dummyAlert.js"

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

export default {
  data() {
    return {};
  },
  props: ["currentPage", "subPage", "hideLanguages"],
  methods: {
    dummyAlert() {
      dummyAlert();
    },
  },
  computed: {
    language() {
      let language = urlParams.get("language") || "spanish"
      // URLParams are always lowercase; we must capitalize.
      return language.charAt(0).toUpperCase() + language.slice(1);
    },
  },
  components: {
    "languagecombobox": LanguageComboBox,
  },
  mounted() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  },
  template: `
<div class="row-fluid border-bottom">
  <nav class="navbar navbar-expand-lg bg-light p-2">
    <div class="container-fluid">
      <a class="navbar-brand" href="/index.html">
        <img src="/img/logo.svg" height="30px"/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" :class="{'active': this.currentPage == 'Home'}" aria-current="page" href="/index.html">Home</a>
          </li>
          <!-- "Learn" dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" :class="{'active': this.currentPage == 'Learn'}" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Learn
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" :class="{'active': this.subPage == 'Vocabulary'}" href="/learn/vocabulary/topics.html">Vocabulary</a></li>
              <!-- No need to implement active style for the rest -->
              <li><a class="dropdown-item" href="#" @click="dummyAlert()">Grammar</a></li>
              <li><a class="dropdown-item" href="#" @click="dummyAlert()">Writing</a></li>
              <li><a class="dropdown-item" href="#" @click="dummyAlert()">Pronunciation</a></li>
            </ul>
          </li>
          <!-- "Practice" dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" :class="{'active': this.currentPage == 'Practice'}" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Practice
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <!-- Reading comprehension is only supported for english, so can pass the language URLParam directly -->
              <li><a class="dropdown-item" :class="{'active': this.subPage == 'Reading'}" href="/practice/reading/articles.html?language=english">Reading Comprehension</a></li>
              <li><a class="dropdown-item" :class="{'active': this.subPage == 'Listening'}" href="/practice/listening/start.html">Listening Comprehension</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#" @click="dummyAlert()">Revisions</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{'active': this.currentPage == 'About'}" href="#" @click="dummyAlert()">About</a>
          </li>
        </ul>
        <!-- Login/register -->
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Settings">
            <button class="btn btn-small btn-secondary m-2" data type="button" @click="dummyAlert()">
              <i class="bi bi-gear"></i>
            </button>
          </li>
          <li v-if="!hideLanguages" class="nav-item m-2">
            <languagecombobox :language="language"></languagecombobox>
          </li>
          <li class="nav-item">
            <button class="btn btn-primary m-2" type="button" @click="dummyAlert()">Log-in</button>
          </li>
          <li class="nav-item">
            <button class="btn btn-success m-2" type="button" @click="dummyAlert()">Register</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
`
}