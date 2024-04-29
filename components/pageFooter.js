
import { dummyAlert } from "../dummyAlert.js"

export default {
  data() {
    return {};
  },
  methods: {
    dummyAlert() {
      dummyAlert();
    },
  },
  template: `
<!-- Source: https://getbootstrap.com/docs/5.3/examples/footers/ -->
<footer class="d-flex flex-wrap justify-content-between align-items-center p-3 m-1 border-top">
  <p class="col-md-4 mb-0 text-body-secondary">© 2024 Grupo AF7</p>
  <ul class="nav col-md-4 justify-content-end">
    <li class="nav-item"><a href="/index.html" class="nav-link px-2 text-body-secondary">Home</a></li>
    <li class="nav-item"><a href="#" @click="dummyAlert()" class="nav-link px-2 text-body-secondary">About</a></li>
    <li class="nav-item"><a href="#" @click="dummyAlert()" class="nav-link px-2 text-body-secondary">FAQs</a></li>
    <li class="nav-item"><a href="#" @click="dummyAlert()" class="nav-link px-2 text-body-secondary">Privacy policy</a></li>
    <li class="nav-item"><a href="#" @click="dummyAlert()" class="nav-link px-2 text-body-secondary">Terms of service</a></li>
    <li class="nav-item"><a href="#" @click="dummyAlert()" class="nav-link px-2 text-body-secondary">Support</a></li>
  </ul>
</footer>
`
}