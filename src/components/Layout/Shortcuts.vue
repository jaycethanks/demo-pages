<script lang="ts" setup>
import ClockSvgIcon from '@/components/Icons/ClockSvgIcon.vue'
const shortCutList = ['Tax', 'Quotes', 'Terminal', 'Radar', 'Invoices']
</script>
<template>
  <ul class="mt-12 text-[#36373e]">
    <p class="px-2 mb-4 text-[#686a78]">Shortcuts</p>
    <li v-ripple class="flex gap-4 items-center mb-1 p-2" v-for="item in shortCutList" :key="item">
      <ClockSvgIcon class="text-2xl shrink-0" /> <span>{{ item }}</span>
    </li>
  </ul>
</template>
<style lang="less" scoped></style>
