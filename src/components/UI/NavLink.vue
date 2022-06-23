<template>
  <div>
    <router-link @click="$emit('hide-dropdown', false)" :to="url" active-class="active">
      <slot></slot>
    </router-link>
  </div>
</template>

<style scoped>
a {
  color: white;
  text-transform: uppercase;
}

a:hover, .active {
  color: #f98523;
}
</style>

<script>
export default {
  props: ["url"],
};
</script>
