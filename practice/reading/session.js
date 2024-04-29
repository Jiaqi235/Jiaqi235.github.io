import { createApp, ref, computed } from 'vue';
import NavBarTemplate from '../../components/navBar.js'
import FooterTemplate from '../../components/pageFooter.js'

const app = createApp({
  data() {
    return {
      selectedOption: 'Unfolded', // Default option
      selectedText: 'Unfolded',
      isDisabled: false,
      selectedPronunciation: 'phonetic',
      selectedFormatting: 'view',
      oneTouchTool: false,
      selectedColor: '#ffff00', // Default color is yellow
      leftPageIndex: 1,
      rightPageIndex: 2,
      centerPageIndex: 1,
      dictRightPos: true,

      isSmallScreen: false,
      panelOpen: true,

      markedWords: [],
      colorMark: [],
      wordToSearch: "Atmosphere",
      isLastPage: false,

      lastHoveredWord: "",

      pages:
        [
          {
            index: -1,
            text: ``
          },
          {
            index: 0,
            text: `<h2> Growing Plants in Space </h2><br>
            <h6><i>Written <span>by:</span> <span>NASA</span></i></h6>
          As humans explore space, we will want to bring plants for both aesthetic and practical reasons. We already know from our pioneering astronauts that fresh flowers and gardens on the International Space Station create a beautiful atmosphere and let us take a little piece of Earth with us on our journeys. They're good for our psychological well-being on Earth and in space. They also will be critical for keeping astronauts healthy on long-duration missions.
          <br>      
          A lack of vitamin C was all it took to give sailors scurvy, and vitamin deficiencies can cause a number of other health problems. Simply packing some multi-vitamins will not be enough to keep astronauts healthy as they explore deep space. They will need fresh produce.
          <br> 
          Right now on the space station, astronauts receive regular shipments of a wide variety of freeze-dried and prepackaged meals to cover their dietary needs - resupply missions keep them freshly stocked. When crews venture further into space, traveling for months or years without resupply shipments, the vitamins in prepackaged form break down over time, which presents a problem for astronaut health.  
          <br>
          NASA is looking at ways to provide astronauts with nutrients in a long-lasting, easily absorbed form-freshly grown fresh fruits and vegetables. The challenge is how to do that in a closed environment without sunlight or Earth's gravity.
          `
          },
          {
            index: 1,
            text: `The Veggie garden is about the size of a carry-on piece of luggage and typically holds six plants. Each plant grows in a “pillow” filled with a clay-based growth media and fertilizer. The pillows are important to help distribute water, nutrients and air in a healthy balance around the roots. Otherwise, the roots would either drown in water or be engulfed by air because of the way fluids in space tend to form bubbles. </p>
          <p> In the absence of gravity, plants use other environmental factors, such as light, to orient and guide growth. A bank of light emitting diodes (LEDs) above the plants produces a spectrum of light suited for the plants' growth. Since plants reflect a lot of green light and use more red and blue wavelengths, the Veggie chamber typically glows magenta pink. </p>
          <h3> Veggie </h3>
          <p> The Vegetable Production System, known as Veggie, is a space garden residing on the space station. Veggie's purpose is to help NASA study plant growth in microgravity, while adding fresh food to the astronauts' diet and enhancing happiness and well-being on the orbiting laboratory. 
          To date, Veggie has successfully grown a variety of plants, including three types of lettuce, Chinese cabbage, mizuna mustard, red Russian kale and zinnia flowers. 
         
          `
          },
          {
            index: 2,
            text: `
            The flowers were especially popular with astronaut Scott Kelly, who picked a bouquet and photographed it floating in the cupola against the backdrop of Earth. Some of the plants were harvested and eaten by the crew members, with remaining samples returned to Earth to be analyzed. One concern was harmful microbes growing on the produce. So far, no harmful contamination has been detected, and the food has been safe (and enjoyable) for the crew to eat.
            <p> Our team at Kennedy Space Center envisions planting more produce in the future, such as tomatoes and peppers. Foods like berries, certain beans and other antioxidant-rich foods would have the added benefit of providing some space radiation protection for crew members who eat them. </p>
            <h3> Advanced Plant Habitat </h3>
            The Advanced Plant Habitat (APH), like Veggie, is a growth chamber on station for plant research. It uses LED lights and a porous clay substrate with controlled release fertilizer to deliver water, nutrients and oxygen to the plant roots. But unlike Veggie, it is enclosed and automated with cameras and more than 180 sensors that are in constant interactive contact with a team on the ground at Kennedy, so it doesn't need much day-to-day care from the crew.
            `
          },
          {
            index: 3,
            text: `<p>
            Its water recovery and distribution, atmosphere content, moisture levels and temperature are all automated. It has more colors of LED lights than Veggie, with red, green, and blue lights, but also white, far red and even infrared to allow for nighttime imaging. </p>
            <p>
            When a harvest is ready for research studies, the crew collects samples from the plants, freezes or chemically fixes them to preserve them, and sends them back down to Earth to be studied so scientists can better understand how space affected their growth and development. </p>

            APH had its first test run on the space station in Spring 2018 using Arabidopsis thaliana (the “white mouse of the plant research world”) and dwarf wheat. The time-lapse video of this was a popular social media release from the space station worldwide.
            `
          }
        ]

    };
  },
  mounted() {
    this.checkScreenSize(); // Call the function initially

    // Attach the function to the window resize event
    window.addEventListener('resize', this.checkScreenSize);
    this.addShortcutsListener();
     // Initialize tooltips
     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
     var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
       return new bootstrap.Tooltip(tooltipTriggerEl)
     })
  },
  methods: {
    setFormatting(format) {
      if (this.selectedFormatting === format) {
        this.selectedFormatting = "view";
        this.activateCustomCursor();
        return;
      }
      this.selectedFormatting = format;
      this.formatting = true;
      if (format === 'clearAll') {
        this.markedWords = [];
        this.selectedFormatting = "view";
      }
      this.activateCustomCursor();
      this.hideToolbarTutorial();
    },
    selectColor() {
      const colorPicker = document.getElementById('color-picker');
      colorPicker.click(); // Open color picker
    },
    toggleHighlight(event) {
      if (this.selectedFormatting === 'view') return;
      else if (this.selectedFormatting === 'dict') {
        if (event.target.innerText.split(" ").length > 1 || event.target.innerText === '') return;
        this.wordToSearch = event.target.innerText;
        let modal = new bootstrap.Modal(document.getElementById('dictModal'));
        modal.show();
      }
      else if ((this.selectedFormatting === 'highlight_y' ||
      this.selectedFormatting === 'highlight_g' ||
      this.selectedFormatting === 'highlight_m' )
       && event.target.classList.contains('word')) {
        // It shold mark all the occurences of the word
        const clickedWord = event.target.innerText;
        const wordElements = document.querySelectorAll('.word');
        wordElements.forEach(wordElement => {
          const word = wordElement.innerText;
          if (word === clickedWord) {
            if (this.markedWords.includes(word)) {
              for (const pair of this.colorMark) {
                if (pair.word === word) {
                  wordElement.classList.remove(pair.color);
                  return pair.color = this.selectedFormatting;
                }
              }
            }
            wordElement.classList.toggle(this.selectedFormatting);
            if (wordElement.classList.contains(this.selectedFormatting)) {
              if (!this.markedWords.includes(word)) {
                this.markedWords.push(word);
                this.colorMark.push({ word: word, color: this.selectedFormatting });
              }
            } else {
              this.markedWords = this.markedWords.filter(w => w !== word);
            }
          }
        });
      }
      this.formatting = false;
    },
    goToExercises() {
      window.location.href = "exercises.html?language=english"; // Navigate to exercises page
    },
    isFolded() {
      return this.selectedOption === 'folded';
    },
    updatePagesIndex() {
      if (!this.isFolded()) {
        this.centerPageIndex = this.leftPageIndex;
      }
      else {
        if (this.centerPageIndex % 2 === 0) {
          this.leftPageIndex = this.centerPageIndex - 1 < 0 ? 1 : this.centerPageIndex - 1;
          this.rightPageIndex = this.leftPageIndex + 1;
        }
        else {
          this.leftPageIndex = this.centerPageIndex;
          this.rightPageIndex = this.centerPageIndex + 1 > this.pages.length - 1 ? this.pages.length - 1 : this.centerPageIndex + 1;
        }
      }
    }
    ,
    isLowResolution() {      
      return window.innerWidth < 800;
    }
    ,
    isLimitPage(direction) {
      if (direction === 'left') {
        if(this.isFolded())
        {
          return this.centerPageIndex != 1;
        }
        else{
          return this.leftPageIndex != 1;
        }
      }
      else if (direction === 'right') {
        if(this.isFolded())
        {
          return this.centerPageIndex != this.pages.length - 1;
        }
        else{
          return this.rightPageIndex != this.pages.length - 1;
        }
      }
    }
    ,
    checkScreenSize() {
      console.log("Checking screen size");
      this.isSmallScreen = window.innerWidth < 1600;
      this.updateSelectedOption('unfolded');
      this.updateSelectedOption('folded');

      if (this.isSmallScreen && this.selectedOption === 'unfolded') {
        this.updateSelectedOption('folded');
        this.isDisabled = true;
      }
      else if (this.isSmallScreen && this.selectedOption === 'folded') {
        this.isDisabled = true;
      }
      else {  
        this.isDisabled = false;
      }
    },
    notImplemented() {
      window.alert('This feature/page is not implemented in the prototype.');
    }
    ,
    nextPage() {
      if (this.isFolded())
      {
        this.centerPageIndex++;
        if (this.centerPageIndex >= this.pages.length - 1) {
          this.centerPageIndex = this.pages.length - 1;
          this.leftPageIndex = this.centerPageIndex;
          this.rightPageIndex = this.centerPageIndex + 1;
        }
      }
      else {
        this.leftPageIndex += 2;
        this.rightPageIndex += 2;
        if (this.rightPageIndex >= this.pages.length) {
          this.leftPageIndex = this.pages.length - 2;
          this.rightPageIndex = this.pages.length - 1;
          this.centerPageIndex = this.leftPageIndex;
        }
      }
      this.updatePagesIndex();
    },
    prevPage() {
      if (this.isFolded())
      {
        this.centerPageIndex--;
        if (this.centerPageIndex <= 0) {
          this.centerPageIndex = 1;
          this.leftPageIndex = 1;
          this.rightPageIndex = 2;
        }
      }
      else {
        this.leftPageIndex -= 2;
        this.rightPageIndex -= 2;
        if (this.leftPageIndex <= 0) {
          this.leftPageIndex = 1;
          this.rightPageIndex = 2;
          this.centerPageIndex = 1;
        }
      }
      this.updatePagesIndex();
    },
    activateCustomCursor() {
      if (this.selectedFormatting === 'highlight_y') {
          document.getElementById('text-container-book').style.cursor = 'url("/img/session/highlight_cursor.png") 7 51, auto';
        }
      if (this.selectedFormatting === 'highlight_g') {
        document.getElementById('text-container-book').style.cursor = 'url("/img/session/highlight_cursor_g.png") 7 51, auto';
      }
      if (this.selectedFormatting === 'highlight_m') {
        document.getElementById('text-container-book').style.cursor = 'url("/img/session/highlight_cursor_m.png") 7 51, auto';
      }
      if (this.selectedFormatting === 'dict') {
        document.getElementById('text-container-book').style.cursor = 'url("/img/session/dict_cursor.png") 20 20, auto';
      }
      if (this.selectedFormatting === 'view') {
        document.getElementById('text-container-book').style.cursor = 'pointer';
      }

    },
    togglePanel() {
      this.panelOpen = !this.panelOpen;
    },
    isPanelOpen() {
      return this.panelOpen;
    },
    getIsLastPage(index) {
      if (this.isFolded()) {
        return this.centerPageIndex === this.pages.length - 1;
      }
      return index === this.pages.length - 1 || index === this.pages.length - 1;
    },
    updateSelectedOption(value) {
      this.selectedOption = value;
      if (value === 'unfolded') {
        this.selectedText = 'Unfolded';
      } else if (value === 'folded') {
        this.selectedText = 'Folded';
      }
    },
    highlightWord(event) {
      // TODO, why when using dict, only the first word is highlighted????
      if (this.selectedFormatting === "view")
      {
        document.querySelectorAll('.word').forEach(word => {
          word.classList.remove('hover-word');
        });
        return;
      }
      if (!event.target.classList.contains('word')) return;
      if (this.lastHoveredWord != event.target.innerText) {
        document.querySelectorAll('.word').forEach(word => {
          word.classList.remove('hover-word');
        });
      }
      event.target.classList.add('hover-word');

      this.lastHoveredWord = event.target.innerText;
    },
    addShortcutsListener() {
      const vm = this;
  
      // Add event listener for keydown event
      document.addEventListener('keydown', function(event) {
        switch(event.key) {
          case 'A':
          case 'a':
          case 'ArrowLeft':
            console.log('prev');
            vm.prevPage();
            break;
          case 'D':
          case 'd':
          case 'ArrowRight':
            console.log('next');
            vm.nextPage();
            break;
          case 'T':
          case 't':
            console.log('toggle');
            vm.togglePanel();
            break;
          case 'X':
          case 'x':
            console.log('toggle folding');
            if (vm.isDisabled) return;
            vm.updateSelectedOption(vm.selectedOption === 'unfolded' ? 'folded' : 'unfolded');
            vm.setFormatting("view");
          case "Escape":
            vm.setFormatting("view");
            break;
          case "1":
            vm.setFormatting("highlight_y");
            break;
          case "2":
            vm.setFormatting("highlight_g");
            break;
          case "3":
            vm.setFormatting("highlight_m");
            break;
          case "4":
            vm.setFormatting("dict");
            break;
        }
      });
    },
    findColorByWord(word) {
      for (const pair of this.colorMark) {
        if (pair.word === word) {
          return pair.color;
        }
      }
      return "highlight_y";
    },
    showToolbarTutorial() {
      (new bootstrap.Toast('#toolbarTutorialToast')).show();
    },
    hideToolbarTutorial() {
      (new bootstrap.Toast('#toolbarTutorialToast')).hide();
    }
  },
  computed: {
    formattedText() {
      return (index) => {
        if (index >= this.pages.length - 1) {
          index = this.pages.length - 1;
        }
        const formattedPageText = this.pages[index].text.split(' ').map((word) => {
          if (this.markedWords.includes(word)) {
            return `<span class="word ${this.findColorByWord(word)}">${word}</span>`;
          } else {
            return `<span class="word">${word}</span>`;
          }
        }).join(' ');
  
        return formattedPageText;
      };
    }
  },
  components: {
    "navbar": NavBarTemplate,
    "pagefooter": FooterTemplate,
  }
});

app.mount("#app");
