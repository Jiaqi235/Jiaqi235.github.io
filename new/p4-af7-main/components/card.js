
export default {
  data() {
    return {};
  },
  props: ["title", "header", "icon", "smallIcon", "description", "href", "footer", "vertical", "centerText"],
  methods: {},
  template: `
<a class="card container-fluid p-0 m-1" :href="href">
  <div class="mx-0" :class="{'row': !vertical}">
    <div class="col-lg card-header justify-content-center align-items-center d-flex border-0">
      <i v-if="smallIcon" class="bi inline-icon" :class="smallIcon"></i>
      <h4 v-if="header" class="card-title">{{ header }}</h4>
      <img v-if="icon" :src="icon" alt="" class="img card-icon" style="display: block;" />
    </div>
    <div class="col-lg card-block flex-centered-column justify-content-center p-3">
      <h4 v-if="title" class="card-title">{{ title }}</h4>
      <p class="card-text" :class="{'text-center': centerText}" >{{ description }}</p>
    </div>
    <div v-if="footer" class="card-footer">
      <p class="text-center my-0">{{ footer }}</p>
    </div>
  </div>
</a>
`
}