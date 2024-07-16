<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
</script>
<template>
  <SectionCard>
    <Heading title="Receipt history">
      <v-btn density="comfortable" class="mr-2"
        ><span class="normal-case font-semibold">View receipt</span></v-btn
      >
      <v-btn density="comfortable"
        ><span class="normal-case font-semibold">Send receipt</span></v-btn
      >
    </Heading>
    <p class="text-gray-400">No receipts sent</p>
  </SectionCard>
</template>
<style lang="less" scoped></style>
