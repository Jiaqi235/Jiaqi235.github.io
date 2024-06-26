
import { dummyAlert } from "/dummyAlert.js"

export default {
  data() {
    return {};
  },
  methods: {
    dummyAlert() {
      dummyAlert();
    },
  },
  /* Source: https://codepen.io/havardob/pen/eYdbewq */
  template: `
<div class="datepicker border mx-auto" @click="dummyAlert()">
  <div class="datepicker-top">
    <div class="month-selector">
      <button class="arrow"><i class="bi bi-chevron-left"></i></button>
      <span class="month-name">April 2024</span>
      <button class="arrow"><i class="bi bi-chevron-right"></i></button>
    </div>
  </div>
  <div class="datepicker-calendar">
    <span class="day">Mo</span>
    <span class="day">Tu</span>
    <span class="day">We</span>
    <span class="day">Th</span>
    <span class="day">Fr</span>
    <span class="day">Sa</span>
    <span class="day">Su</span>
    <button class="date">1</button>
    <button class="date">2</button>
    <button class="date">3</button>
    <button class="date">4</button>
    <button class="date">5</button>
    <button class="date">6</button>
    <button class="date">7</button>
    <button class="date">8</button>
    <button class="date">9</button>
    <button class="date">10</button>
    <button class="date">11</button>
    <button class="date">12</button>
    <button class="date">13</button>
    <button class="date">14</button>
    <button class="date">15</button>
    <button class="date">16</button>
    <button class="date">17</button>
    <button class="date">18</button>
    <button class="date">19</button>
    <button class="date">20</button>
    <button class="date">21</button>
    <button class="date">22</button>
    <button class="date">23</button>
    <button class="date">24</button>
    <button class="date">25</button>
    <button class="date">26</button>
    <button class="date">27</button>
    <button class="date">28</button>
    <button class="date">29</button>
    <button class="date current-day">30</button>
    <button class="date faded">1</button>
    <button class="date faded">2</button>
    <button class="date faded">3</button>
    <button class="date faded">4</button>
    <button class="date faded">5</button>
  </div>
</div>
`
}