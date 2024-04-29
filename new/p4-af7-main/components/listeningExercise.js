
// Component for Listening exercises (task 3, /practice/listening/exercises.html)

const LETTERS = ["A", "B", "C", "D"]

export default {
  data() {
    return {
      isCorrect: false,
      letters: LETTERS,
    };
  },
  props: ["index", "correctAnswerIndex", "question", "answers", "checked"],
  methods: {
    onClick(ev) {
      let answerIndex = ev.currentTarget.getAttribute("option-index");
      this.isCorrect = answerIndex == this.correctAnswerIndex;
      this.$emit("answerChanged", this.index, answerIndex, this.isCorrect);
    }
  },
  template: `
<div class="col-lg-6 my-1 p-4 container">
  <div>
    <div class="row">
      <p>Q{{ index + 1 }}: {{ question }}</p>
    </div>
    <div class="row form-check" :id="index + 'form'">
      <div v-for="(answer, answerIndex) in answers" class="my-1">
        <input @click="onClick" class="form-check-input" type="radio" :name="'radioGroup' + index" :id="index + 'option' + answerIndex" :option-index="answerIndex">
        <!-- The iterator used starts at 1. -->
        <label class="form-check-label mx-2" :for="index + 'option' + answerIndex">
          {{ letters[answerIndex] }}: {{ answers[answerIndex] }}
        </label>
      </div>
    </div>
    <div :id="index + 'resultDiv'">
      <p :id="index + 'resultText'"></p>
      <p :id="index + 'resultAudioText'"></p>
      <button :id="index + 'resultButton'" style="border:none; background-color: transparent;">
        <img :id="index + 'resultButtonImage'" style="max-width:max(20%, 30px)">
      </button>
    </div>
  </div>
</div>
`,
}