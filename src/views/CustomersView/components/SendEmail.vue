<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
</script>
<template>
  <SectionCard>
    <Heading title="Send email">
      <v-btn density="comfortable"
        ><span class="normal-case font-semibold">Enable recovery emails</span></v-btn
      >
    </Heading>
    <p class="text-gray-500">No emails sent within the past 30 days</p>
  </SectionCard>
</template>
