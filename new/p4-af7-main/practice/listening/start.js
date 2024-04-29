
import { createApp } from 'vue'
import NavBarTemplate from '../../components/navBar.js'
import FooterTemplate from '../../components/pageFooter.js'

const app = createApp({
  data() {
    return {
      
    };
  },
  methods: {

  },
  components: {
    "navbar": NavBarTemplate,
    "pagefooter": FooterTemplate,
  },
});
app.mount("#app");