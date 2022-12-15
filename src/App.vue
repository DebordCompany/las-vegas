<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue"

</script>

<template>
  <header class="header">
    <RouterLink  to="/">Las Vegas</RouterLink>
  </header>
  <Navbar/>
  <RouterView  />
  <Footer></Footer>
    
  
</template>

<style scoped>

</style>
