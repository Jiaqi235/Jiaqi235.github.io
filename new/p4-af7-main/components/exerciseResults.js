
import IconButtonTemplate from '/components/iconButton.js'
import CalendarTemplate from '/components/calendar.js'
import { dummyAlert } from "../dummyAlert.js"

export default {
  data() {
    const selectedWords = {}
    for (let word in this.words) {
      selectedWords[word] = this.words[word] > 0;
    }
    return {
      selectedWords: selectedWords,
    };
  },
  props: ["words", "sessionType", "misunderstoodSentences", "correctAnswers", "totalQuestions"],
  methods: {
    dummyAlert() {
      dummyAlert();
    },
    getDate() {
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      // Would need to be adjusted for other cultures
      return `${day}/${month}/${year}`;
    },
    toggleAll() {
      this.setSelections(!this.allWordsSelected());
    },
    setSelections(selected) {
      for (let word in this.words) {
        this.selectedWords[word] = selected;
      }
    },
    allWordsSelected() {
      for (let word in this.selectedWords) {
        if (this.selectedWords[word] == false) {
          return false;
        }
      }
      return true;
    },
    getWordMistakesLabel(word) {
      let mistakes = this.words[word];
      return mistakes > 0 ? `(${mistakes} mistake${mistakes > 1 ? 's' : ''} in this session)` : ""
    },
    onHomeClicked() {
      alert("The scenario ends here. Thank you for testing!");
    }
  },
  components: {
    "iconbutton": IconButtonTemplate,
    "calendar": CalendarTemplate,
  },
  template: `
<div class="my-auto p-3">
  <div class="container my-auto flex-centered-column">
    <div class="w-100 flex-centered-column p-3 position-relative">
      <div class="row w-100">
        <div class="text-center w-100">
          <h1>Session Results</h1>
          <h2>{{ sessionType }} - {{ getDate() }}</h2>
        </div>
      </div>

      <div class="absolute-top-right">
        <div class="d-flex">
          <iconbutton :icon="'bi-question-lg'" :tooltip="'Help'" @click="dummyAlert()"></iconbutton>
        </div>
      </div>
    </div>

    <div class="row container results-grid">
      <div class="col-xxl-4 py-2">
        <div class="border rounded flex-centered-column">
          <div class="container my-3">
            <div class="flex-centered-column p-2">
              <h3>Progress Diary</h3> 
              <img src="/img/user.svg" class="user-avatar border rounded my-2"/>
              <p>Username</p>
              <div>
                <!-- TODO add tooltips? -->
                <p><i class="bi bi-mortarboard mx-2"></i>Sessions completed: {{ sessionType === 'Listening Comprehension' ? 32 : 1 }}</p> <!-- The task user in scenario/task 3 is supposedly already a regular user of the app, hence their counter is high -->
                <p><i class="bi bi-alphabet-uppercase mx-2"></i>Words learnt: {{ sessionType === 'Listening Comprehension' ? 257 : 10 }}</p>
                <p><i class="bi bi-book mx-2"></i>Articles read: {{ sessionType === 'Reading Comprehension' ? 1 : 0 }}</p>
                <p><i class="bi bi-ear mx-2"></i>Audio listened: {{ sessionType === 'Listening Comprehension' ? 1 : 0 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-4 py-2">
        <div class="border rounded flex-centered-column">
          <div class="container my-3">
            <div v-if="sessionType === 'Reading Comprehension'" class="sticky-note p-2">
              <h3 class="text-center">Words Practiced</h3>
              <p>Select which words you'd like to appear in future revisions.</p>
              <div class="form-check">
                <div class="p-3">
                  <div v-for="(mistakes, word) in words">
                    <input class="form-check-input" type="checkbox" v-model="selectedWords[word]" :id="'word_' + word">
                    <label class="form-check-label" :for="'word_' + word">
                      {{ word }} <i>{{ getWordMistakesLabel(word) }}</i>
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <button class="btn btn-small btn-primary btn-word-select mx-auto my-1" data type="button" @click="toggleAll()">
                  {{ allWordsSelected() ? 'Deselect All' : 'Select All' }}
                </button>
              </div>
            </div>
            <div v-if="sessionType === 'Listening Comprehension'" class="sticky-note p-2">
              <h3 class="text-center">Comprehension</h3>
              <p>You answered {{ correctAnswers }}/{{ totalQuestions }} questions correctly.</p>
              <p v-if="misunderstoodSentences.length > 0">Misunderstood sentences:</p>
              <ul>
                <li v-for="sentence in misunderstoodSentences"><i>"{{ sentence }}"</i></li>
              </ul>
              <p v-if="misunderstoodSentences.length === 0">Congratulations on answering all questions correctly! You'll be offered more difficult material in future sessions.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-4 py-2">
        <div class="border rounded flex-centered-column">
          <div class="container my-3">
            <div class="flex-centered-column p-3">
              <h3>Exams</h3>
              <p>Select a day to schedule an exam for this session's contents.</p>
              <calendar></calendar>
              <button class="btn btn-small btn-primary m-3" data type="button" @click="dummyAlert()">
                Schedule Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row container d-flex justify-content-center my-2">
      <a href="/index.html?loggedin=1" type="button" class="btn btn-success btn-results d-flex align-items-center justify-content-center text-center m-2" @click="onHomeClicked()">Home</a>
      <a href="#" type="button" class="btn btn-primary btn-results d-flex align-items-center justify-content-center text-center m-2" @click="dummyAlert()">New Session</a>
    </div>
  </div>
</div>
`
}