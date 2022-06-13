<template>
  <nav
    class="navbar fixed-top navbar-expand-lg nav-bg navbar-dark"
    :class="{ active: isActive }"
  >
    <div class="container-fluid">
      <router-link to="/">
        <img v-if="isActive" src="../../assets/imgs/logos-light.png" />
        <img v-else src="../../assets/imgs/logos-dark.png" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <i class="fa-solid fa-bars" :class="{ active: isActive }"></i>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div
          class="offcanvas-header d-block d-lg-none"
          :class="{ active: isActive }"
        >
          <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">
            <i class="fa-solid fa-xmark text-white"></i>
          </button>
          <h1 class="text-white text-center mt-3 d-lg-none">EAD</h1>
        </div>
        <div class="offcanvas-body nav-bg" :class="{ active: isActive }">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 my-auto">
            <nav-links
              v-for="(link, idx) in navItems"
              :key="idx"
              :url="link.url"
              class="mb-3 mb-lg-0"
              :class="{ active: isActive }"              
              >{{ link.titulo }}</nav-links
            >
          </ul>
          <!-- <div class="logo-box">
            <img class="logo-itt" src="../../assets/imgs/escudo_itt_grande.png" alt="" srcset="">
          </div> -->
          <div class="logo-box d-lg-none">
            <img
              class="logo-cc"
              src="../../assets/imgs/Logo-horizontal-blanco.svg"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
img {
  width: 160px;
}
.nav-bg {
  background-color: white;
  height: 100px;
  /* transition: all 0.3s ease-in-out; */
}

.nav-bg.active,
.offcanvas-body.active,
.offcanvas-header.active {
  background-color: #1b396a;
}
.offcanvas-header {
  background-color: white;
}

.nav-bg.active {
  height: 60px;
}
.offcanvas-body {
  position: relative;
}

a {
  color: #1b396a;
  text-transform: uppercase;
  margin-right: 60px;
  text-decoration: none;
}

a.active {
  color: white;
}

a:hover {
  color: #f98523;
}
a.router-link-active {
  color: #f98523;
}

button {
  border: none;
  background-color: transparent;
}

button i {
  font-size: 24px;
  color: #1b396a;
}

button i.active {
  color: white;
}

h1 {
  letter-spacing: -4px;
  font-weight: 900;
  font-size: 50px;
}

.logo-itt {
  position: absolute;
  width: 30%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
}

.logo-cc {
  position: absolute;
  width: 30%;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0);
}

@media (max-width: 991px) {
  .offcanvas-header {
    background-color: #1b396a;
  }

  .offcanvas-body {
    background-color: #1b396a;
  }

  a {
    color: white;
  }
}
</style>

<script>
import NavLinks from "./NavLinks.vue";

export default {
  created() {
    window.addEventListener("scroll", this.fixNav);
  },
  destroyed() {
    window.removeEventListener("scroll", this.fixNav);
  },

  components: {
    NavLinks,
  },

  data() {
    return {
      isActive: false,
      navItems: [
        {
          titulo: "Inicio",
          url: "/",
        },
        {
          titulo: "Plataforma educativa",
          url: "/plataforma-educativa",
        },
        {
          titulo: "Modelo educativo",
          url: "/modelo-educativo",
        },
        {
          titulo: "Carreras",
          url: "/carreras",
        },
      ],
    };
  },

  methods: {
    fixNav() {
      if (window.scrollY > 500) this.isActive = true;
      else this.isActive = false;
    },    
  },
};
</script>
