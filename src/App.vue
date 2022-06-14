<template>
  <Header class="fixed-top">
    <template v-slot:logo>
      <img src="./assets/imgs/logos-light.png" class="img-logo" />
    </template>

    <template v-slot:navbar>
      <navbar
        @hide-dropdown="hideDropDown"
        :showBars="showBars"
        class="my-auto"
      >
        <h1 class="ead-logo d-block d-lg-none">EAD</h1>
        <nav-link
          v-for="(link, i) in navLinks"
          :key="i"
          @hide-dropdown="hideDropDown"
          :url="link.url"
          :dropmenu="link.isDropdown"
          class="links"
        >
          {{ link.title }}</nav-link
        >

        <img
          src="./assets/imgs/Logo-horizontal-blanco.svg"
          class="logo-cc d-block d-lg-none"
        />
      </navbar>
      <transition>
        <i
          @click="toggleBars"
          v-if="!showBars"
          class="fa-solid faIcon d-lg-none fa-bars my-auto me-4"
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
}

.logo-cc{
 width: 30%;
 margin: 0 auto;
 margin-top: auto; 
}

@media (max-width: 991px) {
  .links {
    font-size: 16px;
    font-weight: normal;
    margin: 0 auto 30px auto;
    text-align: center;
  }
}
</style>

<script>
export default {
  data() {
    return {
      /* Variable que activa o desactiva la sidebar */
      showBars: false,
      menuActive: false,
      navbar: false,

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
  },
};
</script>
