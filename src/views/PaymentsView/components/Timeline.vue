<script lang="ts" setup>
import SuccessSvgIcon from '@/components/Icons/SuccessSvgIcon.vue'
import MoneySvgIcon from '@/components/Icons/MoneySvgIcon.vue'
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
</script>
<template>
  <SectionCard>
    <Heading title="Timeline">
      <v-btn prepend-icon="mdi-plus"><span class="normal-case">Add node</span></v-btn>
    </Heading>
    <ul>
      <li class="flex mb-4">
        <div class="icon-wrap"><SuccessSvgIcon class="mt-2 text-sm text-green-500" /></div>
        <div class="detail ml-4">
          <p class="title">Payment succeeded</p>
          <p class="subtitile text-gray-500">May 11, 2024, 11:50 AM</p>
        </div>
      </li>
      <li class="flex mb-4">
        <div class="icon-wrap"><MoneySvgIcon class="mt-2 text-gray-500" /></div>
        <div class="detail ml-4">
          <p class="title">Payment started</p>
          <p class="subtitile text-gray-500">May 11, 2024, 11:50 AM</p>
        </div>
      </li>
    </ul>
  </SectionCard>
</template>
<style lang="less" scoped></style>
