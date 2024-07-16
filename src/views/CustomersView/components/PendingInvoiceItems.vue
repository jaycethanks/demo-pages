<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
import EmptyPlaceHolder from '@/components/EmptyPlaceHolder.vue'
</script>
<template>
  <SectionCard>
    <Heading title="Pending invoice items">
      <v-btn density="comfortable" icon="mdi-plus"></v-btn>
    </Heading>
    <EmptyPlaceHolder>No pending invoice items</EmptyPlaceHolder>
  </SectionCard>
</template>
