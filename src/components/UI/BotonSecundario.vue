<template>
  <div class="boton">
    <slot></slot>
  </div>
</template>

<style scoped>
.boton {
  width: 160px;
  border-radius: 8px;
  background-color: #f98523;
  color: white;
  padding: 10px 40px;
  cursor: pointer;
  text-align: center;
}

.boton:hover {
  background-color: #f97123;
}

.boton:active {
  transform: scale(0.95);
}
</style>
