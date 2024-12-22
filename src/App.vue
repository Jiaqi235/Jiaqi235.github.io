<template>
  <div id="app">
    <div class="layout-wrapper" >
      <!-- Sidebar (can be folded/unfolded) -->
      <!-- <div class="sidebar">
        <SideNavbar
          ref="sbar"
        />
      </div> -->
      <!-- Main Content Area -->
      <main
        class="main-content scrollable"
        ref="mainContent"
      >
        <router-view
        />
      </main>
    </div>
  </div>
</template>

<script>
import SideNavbar from './components/SideNavbar.vue'
import router from './router'
import './assets/styles.css';

export default {
  name: 'App',
  components: {
    SideNavbar
  }
}
</script>

<style scoped>
/* Wrapper for entire layout */
.layout-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%; /* Full viewport height */
  background-color: #1A2634;
}

/* Sidebar (adjusts dynamically based on its width) */
.sidebar {
  flex-shrink: 0; /* Prevent shrinking */
  transition: width 0.3s ease; /* Smooth resizing */
  height: 100%; /* Full height */
  overflow-x: hidden; /* Hide overflowing content */
  background-color: #1A2634;
}

/* Main Content Area */
.main-content {
  flex-grow: 1; /* Take up remaining space */
  background-color: #1A2634;
  color: white;
  width: 100%;
  height: 100%;
  overflow-y: visible; /* Scrollable vertical content */
  overflow-x: hidden; /* Prevent horizontal overflow */
  padding-left: 20px;
  transition: margin-left 0.3s ease; /* Optional smooth animation */
}

.scrollable::-webkit-scrollbar {
  width: 10px; /* Width of the scrollbar */
}

.scrollable::-webkit-scrollbar-thumb {
  background-color: #a3a3a3; /* Color of the thumb */
  border-radius: 10px; /* Optional: Rounded corners */
}

.scrollable::-webkit-scrollbar-track {
  background-color: #223244; /* Color of the track */
}
</style>
