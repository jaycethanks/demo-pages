<script lang="ts" setup>
import StoreSvgIcon from '@/components/Icons/StoreSvgIcon.vue'
import { ref } from 'vue'
const model = ref(false)
</script>
<template>
  <header class="px-8 py-6 text-[#3e4150] flex gap-6">
    <!-- header aside part -->
    <RouterLink color="primary" key="homepage" to="/">
      <div v-ripple class="aside gap-4 flex items-center w-[200px] p-2 active:text-primary">
        <StoreSvgIcon class="text-2xl" />
        <span class="font-semibold">FelixTest</span>
      </div>
    </RouterLink>

    <!-- header main-content part -->
    <div class="px-12 main-content flex justify-between flex-1 items-center">
      <div class="left sm:w-[100px] md:w-[300px] lg:w-[500px]">
        <v-text-field
          density="compact"
          prepend-inner-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </div>
      <div class="right flex items-center gap-8">
        <v-btn variant="text"><span class="normal-case font-semibold">Devepolers</span></v-btn>
        <span class="inline-flex items-center gap-2 font-semibold whitespace-nowrap">
          Test Mode <v-switch density="comfortable" v-model="model" hide-details></v-switch
        ></span>
        <v-btn density="comfortable" variant="text" icon="mdi-comment-question-outline"></v-btn>
        <v-btn density="comfortable" variant="text" icon="mdi-bell-outline"></v-btn>
        <v-btn density="comfortable" variant="text" icon="mdi-cog"></v-btn>
        <v-btn color="primary" density="comfortable" icon="mdi-plus"></v-btn>
      </div>
    </div>
  </header>
</template>
<style lang="less" scoped></style>
