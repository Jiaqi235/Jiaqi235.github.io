
import { createApp } from 'vue'
import CardTemplate from '../../components/card.js'
import NavBarTemplate from '../../components/navBar.js'
import FooterTemplate from '../../components/pageFooter.js'
import { dummyAlert } from "../../dummyAlert.js"

const app = createApp({
  data() {
    return {
      topics: [
        {
          name: "Food",   
          description: "Learn to order at restaurants.",
          icon: "img/topics/restaurant.svg",
          isDummy: true,
        },
        {
          name: "Nature",
          description: "Learn to talk about landscapes.",
          icon: "img/topics/nature.svg",
          isDummy: true,
        },
        {
          name: "Shopping",
          description: "Learn to ask around in shops.",
          icon: "img/topics/shopping.svg",
          isDummy: true,
        },
        {
          name: "Travel",
          description: "Learn to talk about places and travel.",
          icon: "img/topics/travel.svg",
          isDummy: true,
        },
        {
          name: "Weather",
          description: "Learn to talk about the weather.",
          icon: "img/topics/weather.svg",
          isDummy: true,
        },
        {
          name: "Banking",
          description: "Learn to make inquiries at a bank.",
          icon: "img/topics/bank.svg",
          isDummy: false,
        },
        {
          name: "Sports",
          description: "Learn to talk about sports.",
          icon: "img/topics/sports.svg",
          isDummy: true,
        },
        {
          name: "Family",
          description: "Learn to talk about family members.",
          icon: "img/topics/family.svg",
          isDummy: true,
        },
        {
          name: "Emotions",
          description: "Learn to express your emotions.",
          icon: "img/topics/emotions.svg",
          isDummy: true,
        },
      ]
    };
  },
  methods: {
    onCardClick(topic) {
      if (topic.isDummy) {
        dummyAlert();
      }
    }
  },
  computed: {
    
  },
  components: {
    "card": CardTemplate,
    "navbar": NavBarTemplate,
    "pagefooter": FooterTemplate,
  },
});
app.mount("#app");
