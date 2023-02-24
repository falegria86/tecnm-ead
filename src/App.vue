<template>
  <Header class="fixed-top" @toggle-navbar="toggleNavbar">
    <template v-slot:logo>
      <div v-if="!isActive">
        <img src="./assets/imgs/logos-light.png" class="img-logo" />
      </div>
      <div v-else>
        <img src="./assets/imgs/logos-light.png" class="img-logo" />
      </div>
    </template>
    <template v-slot:logo-2>
      <div v-if="!isActive">
        <img
          src="./assets/imgs/ead-logo.svg"
          class="img-logo d-none d-sm-flex"
        />
      </div>
      <div v-else>
        <img
          src="./assets/imgs/ead-logo.svg"
          class="img-logo d-none d-sm-flex"
        />
      </div>
    </template>

    <template v-slot:navbar>
      <navbar
        @hide-dropdown="hideDropDown"
        :showBars="showBars"
        class="my-auto"
      >
        <img
          src="./assets/imgs/ead-logo.svg"
          class="ead-logo d-block d-xl-none"
        />
        <nav-link
          v-for="(link, i) in navLinks"
          :key="i"
          @hide-dropdown="hideDropDown"
          :url="link.url"
          class="links"
        >
          {{ link.title }}</nav-link
        >

        <img
          src="./assets/imgs/Logo-horizontal-blanco.svg"
          class="logo-cc d-block d-xl-none"
        />
      </navbar>
      <transition>
        <i
          @click="toggleBars"
          v-if="!showBars"
          class="fa-solid faIcon d-xl-none fa-bars my-auto me-4"
        ></i>
      </transition>
    </template>
  </Header>

  <div class="nav-margin">
    <Router-view />
  </div>
</template>

<style>
@import "@/assets/base.css";

.nav-margin {
  margin-top: 100px;
}

.img-logo {
  width: 160px;
}

.faIcon {
  color: white;
  font-size: 25px;
  cursor: pointer;
}

.links {
  margin-right: 60px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: rotate(180deg) scale(0.5);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.7s ease;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: rotate(0) scale(1);
}

.ead-logo {
  margin: 0 auto;
  font-weight: 900;
  letter-spacing: -5px;
  margin-bottom: 45px;
  font-size: 50px;
  width: 50%;
}

.logo-cc {
  width: 30%;
  margin: 0 auto;
  margin-top: auto;
}

@media (max-width: 1199px) {
  .links {
    font-size: 16px;
    font-weight: normal;
    margin: 0 auto 30px auto;
    text-align: center;
  }
}
</style>

<style scoped></style>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.fixNav);
  },
  destroyed() {
    window.removeEventListener("scroll", this.fixNav);
  },
  data() {
    return {
      /* Variable que activa o desactiva la sidebar */
      showBars: false,
      menuActive: false,
      navbar: false,
      isActive: false,

      /* Links de la barra de navegación */
      navLinks: [
        {
          title: "Inicio",
          url: "/",
        },
        {
          title: "Plataforma educativa",
          url: "/plataforma-educativa",
        },
        {
          title: "Modelo educativo",
          url: "/modelo-educativo",
        },
        {
          title: "Carreras",
          url: "/carreras",
        },
      ],
    };
  },

  methods: {
    toggleBars() {
      this.showBars = !this.showBars;
    },

    hideDropDown(state) {
      this.showBars = state;
    },

    toggleMenu() {
      this.menuActive = !this.menuActive;
    },

    toggleNavbar(state) {
      this.navbar = state;
    },
    fixNav() {
      if (window.scrollY > 500) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },
};
</script>
