<template>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h3 class="card-title mb-3 text-center">Connexion</h3>
  
            <form @submit.prevent="login" class="row g-3">
              <div class="col-12">
                <label class="form-label">Email</label>
                <input v-model="email" type="email" required class="form-control">
              </div>
              <div class="col-12">
                <label class="form-label">Mot de passe</label>
                <input v-model="password" type="password" required class="form-control">
              </div>
              <div class="col-12 text-center">
                <button class="btn btn-primary w-100">Se connecter</button>
              </div>
              <div v-if="error" class="text-danger text-center">{{ error }}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  const email    = ref('')
  const password = ref('')
  const error    = ref('')
  const API      = 'http://localhost:3000/users'
  const router   = useRouter()
  
  function login () {
    fetch(`${API}?email=${encodeURIComponent(email.value)}&password=${encodeURIComponent(password.value)}`)
      .then(r => r.json())
      .then(data => {
        if (data.length) {
          localStorage.setItem('user', JSON.stringify(data[0]))
          router.push('/calendar')
        } else {
          error.value = 'Identifiants invalides'
        }
      })
  }
  </script>
  
  