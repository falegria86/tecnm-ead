<template>
  <nav>
    <ul
      :class="{ visible: showBars, hide: !showBars }"
      class="sidebar"
    >
      <i
        class="fas fa-xmark d-xl-none"
        @click="$emit('hide-dropdown', false)"
      ></i>
      <slot></slot>
    </ul>
  </nav>
</template>

<style scoped>
.sidebar {
  display: flex;  
}

ul{
  padding: 0;
  margin: 0;
}

i {
  margin: 20px 20px 20px auto;
  font-size: 25px;
  cursor: pointer;
}

/* Medium devices (tablets, 768px and up) */
@media (max-width: 1199px) {
  .sidebar {
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    top: 0;    
    margin-left: auto;
    width: 50%;
    height: 100%;
    flex-direction: column;
    background-color: #1b396a;
    color: white;
    transition: transform 1s ease;
    box-shadow: -3px 0px 8px rgba(0,0,0,0.6);
  }

  .visible {
    opacity: 1;
    transform: translateX(0);
  }

  .hide {
    opacity: 0;
    transform: translateX(800px);
    /* transition: all 1s ease; */
  }
}

@media (max-width: 576px){
  .sidebar {
    width: 70%;
  }
}
</style>

<script>
export default {
  props: ["showBars"],
};
</script>
