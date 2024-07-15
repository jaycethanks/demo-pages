<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
</script>
<template>
  <SectionCard>
    <Heading title="Metadata">
      <v-btn class="mr-2"><span class="normal-case">View receipt</span></v-btn>
      <v-btn><span class="normal-case">Send receipt</span></v-btn>
    </Heading>
    <p class="text-gray-400">No receipts sent</p>
  </SectionCard>
</template>
<style lang="less" scoped></style>
