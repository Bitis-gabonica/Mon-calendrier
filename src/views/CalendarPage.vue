<template>
    <div class="card shadow-sm">
      <div class="card-body">
        <h3 class="card-title mb-3">Calendrier</h3>
        <FullCalendar :options="options"/>
      </div>
    </div>
  </template>
  
  <script setup>
  import FullCalendar from '@fullcalendar/vue3'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import { ref,onMounted } from 'vue'
  const API='http://localhost:3000/events'
  const options=ref({
    plugins:[dayGridPlugin],
    initialView:'dayGridMonth',
    headerToolbar:{ left:'prev,next today', center:'title', right:'' },
    events:[]
  })
  onMounted(()=>fetch(API).then(r=>r.json()).then(e=>options.value.events=e))
  </script>

  
  