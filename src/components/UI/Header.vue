<template>
  <div class="header container-fluid" :class="{ active: isActive }">
    <router-link to="/" class="my-auto">
      <slot name="logo"></slot>
    </router-link>
    <slot name="navbar"></slot>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  height: 100px;
  background-color: #1b396a;
  justify-content: space-between;
}

/* .header.active {
  background-color: #1b396a;
  height: 60px;
} */
</style>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.fixNav);
  },
  destroyed() {
    window.removeEventListener("scroll", this.fixNav);
  },

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    fixNav() {
      if (window.scrollY > 500) {        
        this.isActive = true;        
      } 
      
      else this.isActive = false;
    },
  },
};
</script>
