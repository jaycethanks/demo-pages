<script lang="ts" setup>
import StoreSvgIcon from '@/components/Icons/StoreSvgIcon.vue'
import { ref } from 'vue'
const model = ref(false)
</script>
<template>
  <header class="px-12 text-[#3e4150] flex">
    <!-- header aside part -->
    <div class="aside gap-4 flex items-center w-[200px]">
      <StoreSvgIcon class="text-2xl" />
      <span class="font-semibold">FelixTest</span>
    </div>

    <!-- header main-content part -->
    <div class="main-content flex justify-between flex-1 items-center">
      <div class="left w-[200px]">
        <v-text-field
          density="compact"
          prepend-inner-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </div>
      <div class="right flex items-center gap-8">
        <v-btn variant="text" class="font-semibold"
          ><span class="normal-case">Devepolers</span></v-btn
        >
        <span class="inline-flex items-center gap-2 font-semibold">
          Test Mode <v-switch density="compact" v-model="model" hide-details inset></v-switch
        ></span>
        <v-btn icon="mdi-comment-question-outline"></v-btn>
        <v-btn icon="mdi-bell-outline"></v-btn>
        <v-btn icon="mdi-cog"></v-btn>
        <v-btn icon="mdi-plus"></v-btn>
      </div>
    </div>
  </header>
</template>
<style lang="less" scoped></style>
