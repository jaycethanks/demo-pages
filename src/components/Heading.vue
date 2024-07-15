<script lang="ts" setup>
defineProps(['title'])
</script>
<template>
  <p class="mb-6 flex justify-between">
    <span class="font-bold text-lg">{{ title }}<slot name="title" /></span>
    <span><slot /></span>
  </p>
</template>
