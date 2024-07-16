<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
</script>
<template>
  <SectionCard>
    <Heading title="Invoice credit balance">
      <v-btn density="comfortable" class="mr-2"
        ><span class="normal-case font-semibold">View details</span></v-btn
      >
      <v-btn density="comfortable"
        ><span class="normal-case font-semibold">Adjust balance</span></v-btn
      >
    </Heading>
    <v-divider class="border-opacity-100 -mt-2 mb-6"></v-divider>

    <p class="font-semibold text-lg mb-2">-$400.00 <span class="text-gray-500">USD</span></p>
    <p>Balance will increase the amount due on the customer's next invoice.</p>
  </SectionCard>
</template>
