<template>
  <router-link :to="url" class="boton">
    <slot></slot>
  </router-link>
</template>

<style scoped>
.boton {
  border-radius: 8px;
  background-color: #f98523;
  color: white;  
  padding: 10px 40px;
  cursor: pointer;
}

.boton:hover{
    background-color: #f97123;
}

.boton:active {
  transform: scale(0.95);
}
</style>

<script>
export default {
    props:["url"]
}
</script>