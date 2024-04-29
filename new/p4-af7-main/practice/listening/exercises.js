
import { createApp } from 'vue'
import NavBarTemplate from '../../components/navBar.js'
import FooterTemplate from '../../components/pageFooter.js'
import ExerciseResultsTemplate from '/components/exerciseResults.js'
import ExerciseTemplate from '../../components/listeningExercise.js'
import IconButtonTemplate from '../../components/iconButton.js'

const LETTERS = ["A", "B", "C", "D"];

const audioPlayer = {
  props: {
    audioPlayCount: {
      type: Number,
      default: 0
    },
    audioName: {
      type: String,
      required: true
    },
    audioTitle: {
      type: String,
      required: true
    },
    audioDescription: {
      type: String,
      required: true
    },
    audioWidth: {
      type: String,
      default: '80%'
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  template: 
  `
  <div class="border rounded flex-centered-column w-100 h-100 d-flex align-items-center">
    <h2 class="text-center my-3">Audio: &quot;{{ audioTitle }}&quot;</h2>
    <p class="text-center">{{ audioDescription }}</p>
    <audio :controls="!disabled" controlsList="nodownload" style="{ 'width': audioWidth }" @ended="audioEnded" :disabled="disabled">
      <source :src="audioSrc" :type="audioType">
    </audio>

    <p v-if="!checked">{{ 2 - audioPlayCount }}/2 Plays remaining</p>
  </div>
  `,
  computed: {
    audioSrc() {
      return `audio/${this.audioName}`;
    },
    audioType() {
      // Obtener la extensión del nombre del archivo
      const extension = this.audioName.split('.').pop().toLowerCase();
      
      // Mapear la extensión a un tipo de audio conocido
      switch (extension) {
        case 'mp3':
          return 'audio/mpeg';
        case 'ogg':
          return 'audio/ogg';
        case 'wav':
          return 'audio/wav';
        default:
          return 'audio/mpeg'; // Tipo de audio por defecto
      }
    },
    disabled() {
      return this.audioPlayCount >= 2 && !this.checked;
    }
  },
  methods: {
    audioEnded() {
      this.$emit('audio-ended');
    }
  }
};

const audioResult = {
  props: {
    questionIndex: {
      type: Number,
      required: true
    },
    playImageSrc: {
      type: String,
      required: true
    },
    pauseImageSrc: {
      type: String,
      required: true
    },
    audioSrc: {
      type: String,
      required: true
    },
    playing: {
      type: Boolean,
      default: false
    }
  },
  template: 
  `
    <button @click="">
      <img v-if="!playing" :src="playImageSrc">
      <img v-else :src="pauseImageSrc">
    </button>
    <audio controls hidden :id="questionIndex + 'resultAudio'">
      <source :src="audioSrc" :type"audioType">
    </audio>
  `,
  computed: {
    audioType() {
      // Obtener la extensión del nombre del archivo
      const extension = this.audioName.split('.').pop().toLowerCase();
      
      // Mapear la extensión a un tipo de audio conocido
      switch (extension) {
        case 'mp3':
          return 'audio/mpeg';
        case 'ogg':
          return 'audio/ogg';
        case 'wav':
          return 'audio/wav';
        default:
          return 'audio/mpeg'; // Tipo de audio por defecto
      }
    }
  },
  methods: {
    clickButton() {
      const audio = document.getElementById("questionIndex + 'resultAudio");
      if (audio.paused) {
        audio.play();
        this.playing = true;
      } else {
        audio.pause();
        this.playing = false;
      }
    }
  }
}

const app = createApp({
  data() {
    return {
      playCount: 0,
      // The exercise is extracted from: https://learnenglishteens.britishcouncil.org/skills/listening/c1-listening/help-others-help-yourself
      questions: [
        {
          question: "Liam says that Parkour is...",
          answers: [
            "a type of military training.",
            "a means of jumping off high buildings.",
            "a way of overcoming obstacles.",
            "a kind of video.",
          ],
          correctAnswerIndex: 2,
          referenceSentence: "Parkour is a way of overcoming obstacles.",
        },
        {
          question: "Liam's main job is...",
          answers: [
            "to check the bikes are safe.",
            "to clean the ramps.",
            "to do demonstrations.",
            "to teach young people about BMX.",
          ],
          correctAnswerIndex: 2,
          referenceSentence: "Liam's main job is to do demonstrations.",
        },
        {
          question: "Which area did Liam not have training in?",
          answers: [
            "Giving medical attention.",
            "Cooking hamburgers.",
            "Food hygiene.",
            "Basic accounting.",
          ],
          correctAnswerIndex: 1,
          referenceSentence: "Liam does not have training in cooking hamburgers.",
        },
        {
          question: "Why did Debbie volunteer the second time?",
          answers: [
            "To be more competitive in the job market.",
            "To help other people.",
            "To complete her degree course.",
            "To learn how to train volunteers.",
          ],
          correctAnswerIndex: 0,
          referenceSentence: "Debbie volunteered to be more competitive in the job market.",
        },
        {
          question: "Which sport did Debbie not volunteer to help with?",
          answers: [
            "Cricket.",
            "Swimming.",
            "Table tennis.",
            "Football.",
          ],
          correctAnswerIndex: 1,
          referenceSentence: "Debbie did not volunteer to help with swimming.",
        },
        {
          question: "Debbie and Liam both say that...",
          answers: [
            "it's important to pay people to work in sport.",
            "volunteers are often exploited.",
            "they love volunteering.",
            "volunteers are essential for sport.",
          ],
          correctAnswerIndex: 3,
          referenceSentence: "Debbie and Liam both say that volunteers are essential for sport.",
        },
      ],
      letters: LETTERS,
      answers: [-1, -1, -1, -1, -1, -1],
      deselect: false,
      allAnswered: false,
      allCorrect: false,
      checked: false,
      showingResults: false,
      misunderstoodSentences: [], // Passed to results component
    };
  },
  methods: {
    handleAudioEnded() {
      if (!this.checked) {
        this.playCount++;
      }
    },
    onAnswerChanged(exerciseIndex, answerIndex, isCorrect) {
      const numberAnswerIndex = parseInt(answerIndex);
      if (this.answers[exerciseIndex] == numberAnswerIndex) {   // Desseleccionar la respuesta
        this.answers[exerciseIndex] = -1;
        const formCheckInput = document.getElementById(`${exerciseIndex}option${numberAnswerIndex}`);
        formCheckInput.checked = false;
      } else {
        this.answers[exerciseIndex] = parseInt(answerIndex);
      }
      
      this.allCorrect = this.areAllAnswersCorrect();
      this.allAnswered = this.allCorrect || this.answers.every(function (v) {
        return v >= 0;
      }.bind(this));
    },
    areAllAnswersCorrect() {
      return this.answers.every(function (v, index) {
        return v == this.questions[index].correctAnswerIndex;
      }.bind(this));
    },
    check() {
      this.checked = true;
      this.checkAnswers();
      this.scrollToTop();
    },
    checkAnswers() {
      let score = 0.0;

      // Calculate results, final score and disable radio inputs
      for (let i = 0; i < this.questions.length; i++) {
        const selectedAnswerIndex = this.answers[i];
        const correctAnswerIndex = this.questions[i].correctAnswerIndex;
      
        const isCorrect = selectedAnswerIndex === correctAnswerIndex;
        const correctElement = document.getElementById(`${i}option${correctAnswerIndex}`).parentNode;

        const resultTextElement = document.getElementById(`${i}resultText`);

        if (selectedAnswerIndex == -1) {  // No answer selected
          correctElement.classList.add('correct-answer');
          resultTextElement.textContent = `Question not answered. The correct answer is ${this.letters[correctAnswerIndex]}.`;
          resultTextElement.classList.add('incorrect-answer');
          this.showResultAudio(i);
        } else {
          const selectedElement = document.getElementById(`${i}option${selectedAnswerIndex}`).parentNode;

          if (isCorrect) {    // Correct answer selected
            selectedElement.classList.add('correct-answer');
            resultTextElement.textContent = `Correct answer.`;
            resultTextElement.classList.add('correct-answer');
            score += 1.0;
          } else {            // Incorrect answer selected
            selectedElement.classList.add('incorrect-answer');
            correctElement.classList.add('correct-answer');
            resultTextElement.textContent = `Wrong answer. The correct answer is ${this.letters[correctAnswerIndex]}.`;
            resultTextElement.classList.add('incorrect-answer');
            this.showResultAudio(i);
            score -= 0.333;
          }
        }

        // Disable radio input to not allow changing the answers
        const form = document.getElementById(`${i}form`);
        const radios = form.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.disabled = true;
        });
      }

      // Show final score
      const scoreElement = document.getElementById('listening-score');
      scoreElement.textContent = `Score: ${score.toFixed(2)} / ${this.questions.length}`;
    },
    showResultAudio(questionIndex) {
      const resultButtonElement = document.getElementById(`${questionIndex}resultButton`);
        const resultButtonImage = document.getElementById(`${questionIndex}resultButtonImage`);
        const resultAudioText = document.getElementById(`${questionIndex}resultAudioText`);
        const resultAudio = document.getElementById('listeningResultAudio');

        resultAudioText.textContent = 'Audio segment where this question is answered:';
        resultButtonImage.src = '../../img/listening/play.png';

        resultButtonElement.addEventListener("click", () => {
          const currentIndex = resultAudio.getAttribute('data-index');
          const currentState = resultAudio.getAttribute('data-paused');
          
          if (currentIndex === "-1")             // No se esta reproduciendo nada
          {             
            resultAudio.src = `audio/help_others_help_yourself.mp3`;
            resultAudio.play();
            resultAudio.addEventListener("ended", () => { resultButtonImage.src = '../../img/listening/play.png'; });
            resultButtonImage.src = '../../img/listening/pause.png';
            resultAudio.dataset.index = `${questionIndex}`;
            resultAudio.dataset.paused = '0';
          } 
          else if (currentIndex !== `${i}`)      // Se esta reproduciendo otro audio
          {    
            resultAudio.src = `audio/help_others_help_yourself.mp3`;
            resultAudio.play();
            resultAudio.addEventListener("ended", () => { resultButtonImage.src = '../../img/listening/play.png'; });
            document.getElementById(`${currentIndex}resultButtonImage`).src = '../../img/listening/play.png';
            resultButtonImage.src = '../../img/listening/pause.png';
            resultAudio.dataset.index = `${questionIndex}`;
            resultAudio.dataset.paused = '0';
          }
          else if (currentState === '0')         // Se esta reproduciendo este audio
          {
            resultAudio.pause();
            resultButtonImage.src = '../../img/listening/play.png';
            resultAudio.dataset.paused = '1';
          }
          else                                  // Este audio esta en pausa 
          {
            resultAudio.play();
            resultAudio.addEventListener("ended", () => { resultButtonImage.src = '../../img/listening/play.png'; });
            resultButtonImage.src = '../../img/listening/pause.png';
            resultAudio.dataset.paused = '0';
          }
        })
    },
    scrollToTop() {
      const top = document.getElementById('top');
      top.scrollIntoView();
    },
    showResults() {
      // Gather reference sentences for all failed questions
      let misunderstoodSentences = [];
      for (let i = 0; i < this.questions.length; i++) {
        if (this.answers[i] !== this.questions[i].correctAnswerIndex) {
          misunderstoodSentences.push(this.questions[i].referenceSentence)
        }
      }
      this.misunderstoodSentences = misunderstoodSentences;
      this.showingResults = true;
    },
    getCorrectAnswersCount() {
      let count = 0;
      for (let i = 0; i < this.questions.length; i++) {
        if (this.answers[i] == this.questions[i].correctAnswerIndex) {
          count++;
        }
      }
      return count;
    },
  },
  computed: {
    totalQuestions() {
      return this.questions.length;
    }
  },
  components: {
    "navbar": NavBarTemplate,
    "pagefooter": FooterTemplate,
    "audioplayer": audioPlayer,
    "exercise": ExerciseTemplate,
    "iconbutton": IconButtonTemplate,
    "exerciseresults": ExerciseResultsTemplate,
  },
});
app.mount("#app");
