
import { dummyAlert } from "../dummyAlert.js"

export default {
  data() {
    return {};
  },
  props: {
    icon: {type: String},
    tooltip: {type: String},
    isDummy: {type: Boolean, default: true},
  },
  methods: {
    dummyAlert() {
      dummyAlert();
    },
  },
  template: `
<div class="icon-btn">
  <button class="btn btn-secondary mx-1 position-relative" data-bs-toggle="tooltip" :title="tooltip" @click="isDummy ? dummyAlert() : ''">
    <i class="bi img-fluid" :class="icon"></i>
  </button>
</div>
`
}