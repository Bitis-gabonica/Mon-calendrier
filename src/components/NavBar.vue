<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const logged = computed(() => !!localStorage.getItem('user'))
function logout () {
  localStorage.removeItem('user')
  router.push('/login')
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Mon Calendrier</router-link>
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="nav" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item" v-if="logged"><router-link to="/create"   class="nav-link">Créer</router-link></li>
          <li class="nav-item" v-if="logged"><router-link to="/calendar" class="nav-link">Calendrier</router-link></li>
          <li class="nav-item" v-if="logged"><router-link to="/events"   class="nav-link">Liste</router-link></li>
        </ul>
        <ul class="navbar-nav">
          <li v-if="logged"  class="nav-item"><a class="nav-link" href="#" @click.prevent="logout">Déconnexion</a></li>
          <li v-else        class="nav-item"><router-link to="/login" class="nav-link">Connexion</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
