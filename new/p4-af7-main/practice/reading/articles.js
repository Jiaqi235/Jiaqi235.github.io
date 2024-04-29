import { createApp } from 'vue'
import CardTemplate from '/components/card.js'
import NavBarTemplate from '../../components/navBar.js'
import FooterTemplate from '../../components/pageFooter.js'


const app = createApp({
  data() {
    return {
        articles: [
            {
              theme: "space",
              name: "Solar eclipse precautions",
              description: "Why do we use special sunglasses to watch the solar eclipse?",
              icon: "/img/select/solar_glasses.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "animals",
              name: "Juan the horse",
              description: "Have you heard about a horse on a balcony?",
              icon: "/img/select/juan.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "sports",
              name: "Kylian Mbappé in Madrid",
              description: "Will Mbappé finally join Madrid as the new soccer star?",
              icon: "/img/select/football.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "art",
              name: "Is AI art, art?",
              description: "A person used AI to generate an image and won a competition.",
              icon: "/img/select/ai.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "video games",
              name: "New Supercell game",
              description: "On May 29th, 2024, Squad Busters will be released. Is it going to be a hit?",
              icon: "/img/select/supercell.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "food",
              name: "Pineapple pizza debate",
              description: "Is it a crime to put pineapple on pizza?",
              icon: "/img/select/pizza.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "art",
              name: "Origami in space",
              description: "The art of folding paper is also used in space to deploy devices.",
              icon: "/img/select/origami.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "animals",
              name: "Cuttlefish camouflage",
              description: "Cuttlefish, the masters of disguise and animals that look like aliens.",
              icon: "/img/select/false_cuttle_fish.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "video games",
              name: "Minecraft's new update",
              description: "Tricky Trials brings new mobs, tools, and dungeons to Minecraft.",
              icon: "/img/select/mc.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "food",
              name: "First time trying sushi",
              description: "Do you have to be afraid of sushi being raw?",
              icon: "/img/select/sushi.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "space",
              name: "Elon Musk's Mars plan",
              description: "Will the human race be able to colonize Mars as the second earth?",
              icon: "/img/select/mars.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "video games",
              name: "Silk Song game",
              description: "Will Silk Song live up to the fans' expectations? Will it be really released?",
              icon: "/img/select/silksong.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "animals",
              name: "Velella velella",
              description: "The beautiful but poisonous wind sailor medusa.",
              icon: "/img/select/velella.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "space",
              name: "Plants in space",
              description: "NASA just sent plants into space and made them grow.",
              icon: "/img/select/milky_way.svg",
              href: "session.html"
            },
            {
              theme: "art",
              name: "Million dollar painting sold",
              description: "The old Dali painting has been sold to the Louvre museum.",
              icon: "/img/select/painting.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "sports",
              name: "The rise of the couch potato",
              description: "Are you a couch potato? You are not alone.",
              icon: "/img/select/couch_potato.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "video games",
              name: "Hytale release date",
              description: "What happened to the potential competitor of Minecraft?",
              icon: "/img/select/date_hytale.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "sports",
              name: "Hiking routes in Catalonia",
              description: "Garrotxa has some of the best hiking routes within its volcanic landscapes.",
              icon: "/img/select/hiking.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "art",
              name: "How are sound effects created?",
              description: "See the process of making sound effects for Minecraft.",
              icon: "/img/select/sfx.svg",
              href: "NOT_AVAILABLE"
            },
            {
              theme: "food",
              name: "Catalonia's best cuisine",
              description: "What should you try if you ever come to Catalonia?",
              icon: "/img/select/food.svg",
              href: "NOT_AVAILABLE"
            }
          ],
        selectedArticle: null,
        dropDownValue: "all",
        dropDownText: 'All (20)',
        searchQuery: ''
    };
  },
  methods: {
    selectArticle(article) {
        this.selectedArticle = article;
        if (this.selectedArticle.href === "NOT_AVAILABLE") {
            window.alert('This feature/page is not implemented in the prototype.');
            return;
        }
        this.confirmSelection();
    },
    getArticleName() {
        return this.selectedArticle ? this.selectedArticle.name : '';
    },
    confirmSelection() {
        // Handle navigation to the selected topic
        if (this.selectedArticle) {
            window.location.href =  this.selectedArticle.href + "?language=english"; // Navigate to the selected option
        }
    },
    filteredArticles() {
        //https://blog.logrocket.com/create-search-bar-vue/
        let filtered = this.articles;

        // Filter based on search query
        if (this.searchQuery.trim() !== '') {
            filtered = filtered.filter(article => 
                article.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                article.description.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }

        // Filter based on dropdown value
        if (this.dropDownValue !== 'all') {
            filtered = filtered.filter(article => article.theme === this.dropDownValue);
        }

        return filtered;
    },
    updateDropDown(value) {
        this.dropDownValue = value;
        if (value === 'all') {
          this.dropDownText = 'All (20)';
        } else if (value === 'space') {
          this.dropDownText = 'Space (3)';
        } else if (value === 'food') {
          this.dropDownText = 'Food (3)';
        } else if (value === 'art') {
          this.dropDownText = 'Art (4)';
        } else if (value === 'sports') {
          this.dropDownText = 'Sports (3)';
        } else if (value === 'animals') {
            this.dropDownText = 'Animals (3)';
        } else if (value === 'video games') {
            this.dropDownText = 'Video Games (4)';
        }

      }    
  },
  computed: {
        getFilteredArticles() {
            return this.filteredArticles();
        }
    },
  components: {
    "card": CardTemplate,
    "navbar": NavBarTemplate,
    "pagefooter": FooterTemplate,
  },
});
app.mount("#app");

