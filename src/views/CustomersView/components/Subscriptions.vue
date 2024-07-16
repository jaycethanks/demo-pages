<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
import EmptyPlaceHolder from '@/components/EmptyPlaceHolder.vue'
</script>
<template>
  <SectionCard>
    <Heading title="Subscriptions">
      <v-btn density="comfortable" icon="mdi-plus"></v-btn>
    </Heading>
    <EmptyPlaceHolder>No subscriptions</EmptyPlaceHolder>
  </SectionCard>
</template>
