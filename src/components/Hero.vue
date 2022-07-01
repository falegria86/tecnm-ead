<template>
  <div class="hero-bg d-flex">
    <div class="container my-auto">
      <h1>Educación a distancia</h1>
      <p class="text-white mb-4">
        Únete a la comunidad de estudiantes del Instituto Tecnológico de Tepic
      </p>
      <div class="btn-animated">
        <boton-primario class="text-center" url="/modelo-educativo"
          >Saber más</boton-primario
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-bg {
  width: 100%;
  height: 700px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
    url("../assets/imgs/hero.png");
  background-size: cover;
}

h1 {
  font-size: 55px;
  font-weight: 800;
  text-align: left;
  color: white;

  text-shadow: 1px 3px 3px rgba(0, 0, 0, 0.31);
  animation: start-animation 0.6s ease-out;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;
}

p {
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  width: 70%;
  animation: start-animation 1s ease-out;
  animation-delay: 1s;
  animation-fill-mode: backwards;
}

.btn-animated {
  animation: btn-animation 0.5s ease-in-out;
  animation-delay: 1.2s;
  animation-fill-mode: backwards;
}

@keyframes start-animation {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes btn-animation {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
