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
        <div class="offcanvas-header d-block d-lg-none">          
          <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <h1 class="text-white text-center mt-3 d-lg-none">EAD</h1>
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
          <!-- <div class="logo-box">
            <img class="logo-itt" src="../../assets/imgs/escudo_itt_grande.png" alt="" srcset="">
          </div> -->
          <div class="logo-box d-lg-none">
            <img class="logo-cc" src="../../assets/imgs/Logo-horizontal-blanco.svg" alt="" srcset="">
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
  background-color: #1b396a;
  height: 100px;
}

.offcanvas-header {
  background-color: #1b396a;  
}

.offcanvas-body{
  position: relative;
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

h1{
  letter-spacing: -4px;
  font-weight: 900;
  font-size: 50px;
}

.logo-itt{
position: absolute;
width: 30%;
top: 50%;
left: 50%;
transform: translate(-50%, 0);
}

.logo-cc{
  position: absolute;
  width: 30%;
  bottom: 0%;
left: 50%;
transform: translate(-50%, 0);
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
