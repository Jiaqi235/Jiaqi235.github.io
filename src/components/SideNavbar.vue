<template>
  <div id="app">
    <!-- Background Overlay -->
    <div
      class="background-overlay"
      :class="{ 'show-overlay': showOverlay }"
      v-if="showOverlay"
      @click="toggleSidebar"
    ></div>

    <!-- Sidebar -->
    <aside
      class="side-navbar scrollable"
      :class="{
        open: isOpen && !isSmallScreen,
        small: isSmallScreen || !isOpen,
        hidden: isHidden,
        'show-overlay': showOverlay,
      }"
    >
      <nav class="nav-style">
        <li>
          <router-link to="/tools" class="routerlink" exact-active-class="active" @click.native="toggleSidebar">
            <div class="wrapper">
              <i class="fas fa-tools"></i>
              <span class="tab-text">Tools</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/games" class="routerlink" active-class="active" @click.native="toggleSidebar">
            <div class="wrapper">
              <i class="fas fa-gamepad"></i>
              <span class="tab-text">Games</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/feedback" class="routerlink" active-class="active" @click.native="toggleSidebar">
            <div class="wrapper">
              <i class="fas fa-comment"></i>
              <span class="tab-text">Feedback</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="routerlink" active-class="active" @click.native="toggleSidebar">
            <div class="wrapper">
              <i class="fas fa-info-circle"></i>
              <span class="tab-text">About</span>
            </div>
          </router-link>
        </li>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      isOpen: true,
      isSmallScreen: false,
      isHidden: false,
      showOverlay: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
      this.updateOverlay();
    },
    updateOverlay() {
      if (!this.isSmallScreen && !this.isHidden) {
        this.showOverlay = false;
        return;
      }

      this.showOverlay = this.isOpen;
    },
    handleResize() {
      const width = window.innerWidth;
      this.isSmallScreen = width <= 980 && width > 800;
      this.isHidden = width <= 800;
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
li::marker {
  content: none;
  color: #eec550;
}

.background-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 19;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.background-overlay.show-overlay {
  opacity: 1;
  pointer-events: auto;
}

.side-navbar {
  background-color: #293c51;
  color: white;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  padding: 15px;
  transition: all 0.3s ease;
  z-index: 10;
}

.side-navbar.open {
  width: 230px;
}

.side-navbar.small {
  width: 100px;
  font-size: 14px;
}

.side-navbar.hidden {
  display: none;
}

.tab-text {
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wrapper {
  margin-left: 5px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-style {
  padding-top: 15px;
  display: flex;
  flex-direction: column;
}

.routerlink {
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  border-radius: 10px;
  padding: 10px;
  transition: background-color 0.3s ease;
}

.routerlink.active {
  background-color: #eec550;
  color: #1a2634;
  font-weight: bold;
}
</style>
