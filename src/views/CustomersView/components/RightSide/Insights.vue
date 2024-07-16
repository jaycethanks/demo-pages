<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
const config = {
  fill: false,
  selectedGradient: ['blue', 'violet'],
  padding: 8,
  smooth: false,
  value: [
    0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ],
  lineWidth: 2
}
</script>
<template>
  <SectionCard>
    <Heading title="Insights"> </Heading>
    <v-divider class="border-opacity-100 -mt-2 mb-6"></v-divider>
    <v-row dense>
      <v-col>
        <p class="title font-semibold">Total spend</p>
        <p class="subtitle text-gray-500 mt-1">$171.77</p>
        <p class="info text-gray-400 mt-2">3 transactions</p>
      </v-col>
      <v-col>
        <v-sparkline
          height="80"
          width="200"
          :fill="config.fill"
          :gradient="config.selectedGradient"
          :line-width="config.lineWidth"
          :model-value="config.value"
          :padding="config.padding"
          :smooth="config.smooth"
          auto-draw
        ></v-sparkline>
        <p class="text-gray-400">Feb 2019 <span class="ml-2">Jun 2024</span></p>
      </v-col>
    </v-row>
  </SectionCard>
</template>
