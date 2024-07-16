<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
</script>
<template>
  <SectionCard>
    <Heading title="Pending invoice items">
      <v-btn class="mr-2"><span>Create payment</span></v-btn>
      <v-btn><span>Create invoice</span></v-btn>
      <v-btn icon="mdi-plus"></v-btn>
    </Heading>
  </SectionCard>
</template>
