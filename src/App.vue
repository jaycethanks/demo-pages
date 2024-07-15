<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav class="bg-slate-950 text-white text-center h-auto">
          <RouterLink class="inline-block mr-4 bg-slate-800 py-1 px-2 hover:bg-slate-600 rounded-md my-1" to="/">Page1
          </RouterLink>
          <RouterLink class="inline-block bg-slate-800 py-1 px-2 hover:bg-slate-600 rounded-md my-1" to="/page2">Page2
          </RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>
