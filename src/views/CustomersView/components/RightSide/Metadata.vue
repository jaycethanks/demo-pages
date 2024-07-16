<script lang="ts" setup>
import EmptyPlaceHolder from '@/components/EmptyPlaceHolder.vue'
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
</script>
<template>
  <SectionCard>
    <Heading title="Metadata">
      <v-btn density="comfortable" icon="mdi-pencil-outline"></v-btn>
    </Heading>
    <EmptyPlaceHolder>No metadata</EmptyPlaceHolder>
  </SectionCard>
</template>
