<template>
  <Hero />
  <Conocenos class="mt-5"/>
  <Contacto class="my-5"/>
  <Footer />
</template>

<script>
import Hero from "../components/Hero.vue";
import Conocenos from "../components/Conocenos.vue";
import Contacto from "../components/Contacto.vue";

export default {
  components: {
    Hero,
    Conocenos,
    Contacto
  },
};
</script>
