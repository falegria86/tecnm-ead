<template>
  <div class="hero-bg d-flex">
    <div class="container my-auto">
      <h1>Educación a distancia</h1>
      <p class="text-white mb-4">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
      </p>
      <boton-primario class="text-center" url="/" >Saber más</boton-primario>
    </div>
  </div>
</template>

<style scoped>
.hero-bg {
  width: 100%;
  height: 700px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../assets/imgs/hero.png");
  background-size: cover;
}

h1 {
  font-size: 55px;
  font-weight: 800;
  text-align: left;
  color: white;
  text-shadow: 1px 3px 3px rgba(0, 0, 0, 0.31);
}

p {
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  width: 70%;
}
</style>
