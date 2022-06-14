<template>
  <div>
    <router-link @click="$emit('hide-dropdown', false)" :to="url">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["url"],
};
</script>

<style scoped>
a {
  color: white;
  text-transform: uppercase;
}

a:hover {
  color: #f98523;
}
</style>
