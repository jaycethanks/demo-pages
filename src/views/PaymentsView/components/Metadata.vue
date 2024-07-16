<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
import EditSvgIcon from '@/components/Icons/EditSvgIcon.vue'
</script>
<template>
  <SectionCard>
    <Heading title="Metadata">
      <v-btn density="comfortable"
        ><EditSvgIcon class="mr-2" />
        <span class="normal-case font-semibold">Edit metadata</span></v-btn
      >
    </Heading>
    <p class="text-gray-400">No metadata</p>
  </SectionCard>
</template>
<style lang="less" scoped></style>
