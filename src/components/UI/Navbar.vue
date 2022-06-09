<template>
  <nav class="navbar navbar-expand-lg nav-bg navbar-dark">
    <div class="container-fluid">
      <router-link to="/">
        <img src="../../assets/imgs/logos-light.png" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <!-- <h5>Educación a distancia</h5> -->
          <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div class="offcanvas-body nav-bg">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 my-auto">
            <nav-links
              v-for="(link, idx) in navItems"
              :key="idx"
              :url="link.url"
              class="mb-3 mb-lg-0"
              >{{ link.titulo }}</nav-links
            >
          </ul>
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
  background-color: #1b396a;
  height: 100px;
}

.offcanvas-header {
  background-color: #1b396a;
}

a {
  color: white;
  text-transform: uppercase;
  margin-right: 60px;
  text-decoration: none;
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
  color: white;
}

.navbar-dark .navbar-toggler {
  
}
</style>

<script>
import NavLinks from "./NavLinks.vue";

export default {
  components: {
    NavLinks,
  },

  data() {
    return {
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
};
</script>
