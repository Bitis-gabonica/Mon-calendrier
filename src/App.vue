<template>
  <NavBar />
  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<!-- Pas de style ici, Bootstrap est déjà importé dans main.js -->
