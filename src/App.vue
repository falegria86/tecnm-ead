<template>
  <Navbar />
  <div class="nav-margin">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";

.nav-margin {
  margin-top: 100px;
}
</style>