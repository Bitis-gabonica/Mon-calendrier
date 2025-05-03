<template>
    <div class="card shadow-sm">
      <div class="card-body">
        <h3 class="card-title mb-3">Liste des événements</h3>
  
        <table class="table table-striped">
          <thead><tr><th>Date</th><th>Titre</th><th>Description</th><th></th></tr></thead>
          <tbody>
            <tr v-for="e in events" :key="e.id">
              <td>{{ e.date }}</td><td>{{ e.title }}</td><td>{{ e.description }}</td>
              <td>
                <router-link :to="`/create?edit=${e.id}`" class="btn btn-sm btn-outline-primary me-1">Éditer</router-link>
                <button @click="del(e.id)" class="btn btn-sm btn-outline-danger">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  const API='http://localhost:3000/events'
  const events=ref([])
  function load(){ fetch(API).then(r=>r.json()).then(d=>events.value=d) }
  function del(id){
    if(!confirm('Supprimer ?')) return
    fetch(`${API}/${id}`,{method:'DELETE'}).then(load)
  }
  onMounted(load)
  </script>
  
  