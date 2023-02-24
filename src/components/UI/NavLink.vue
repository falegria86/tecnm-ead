<template>
  <div>
    <router-link
      @click="$emit('hide-dropdown', false)"
      :to="url"
      active-class="active"
      :class="{ navLinks: isActive }"
    >
      <slot></slot>
    </router-link>
  </div>
</template>

<style scoped>
a {
  color: white;
  text-transform: uppercase;
}

a:hover,
.active {
  color: #f98523;
}

.navLinks {
  color: white;
}
</style>

<script>
export default {
  props: ["url"],
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
      } else {
        this.isActive = false;
      }
    },
  },
};
</script>
