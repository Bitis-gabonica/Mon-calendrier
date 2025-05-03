<template>
    <div class="card shadow-sm">
      <div class="card-body">
        <h3 class="card-title mb-3">{{ editingId ? 'Modifier' : 'Créer' }} un événement</h3>
  
        <form @submit.prevent="save" class="row g-3">
          <div class="col-md-6">
            <label class="form-label">Titre</label>
            <input v-model="evt.title" required class="form-control"/>
          </div>
          <div class="col-md-4">
            <label class="form-label">Date</label>
            <input v-model="evt.date" type="date" required class="form-control"/>
          </div>
          <div class="col-12">
            <label class="form-label">Description</label>
            <input v-model="evt.description" class="form-control" placeholder="(optionnel)"/>
          </div>
          <div class="col-12">
            <button class="btn btn-success me-2">{{ editingId ? 'Mettre à jour' : 'Ajouter' }}</button>
            <router-link v-if="editingId" to="/create" class="btn btn-outline-secondary">Annuler</router-link>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, reactive } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  const API = 'http://localhost:3000/events'
  const route = useRoute()
  const router = useRouter()
  
  const evt = reactive({ title:'', date:'', description:'' })
  let   editingId = null
  
  onMounted(() => {
    if (route.query.edit) {
      editingId = +route.query.edit
      fetch(`${API}/${editingId}`).then(r=>r.json()).then(data=>{
        Object.assign(evt,data)
      })
    }
  })
  
  function save() {
    const method = editingId ? 'PUT' : 'POST'
    const url    = editingId ? `${API}/${editingId}` : API
    fetch(url,{ method, headers:{'Content-Type':'application/json'}, body:JSON.stringify(evt)})
      .then(()=>router.push('/calendar'))
  }
  </script>
  
  