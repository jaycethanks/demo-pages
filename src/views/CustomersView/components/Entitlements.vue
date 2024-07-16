<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
import EmptyPlaceHolder from '@/components/EmptyPlaceHolder.vue'
</script>
<template>
  <SectionCard>
    <Heading title="Entitlements"> </Heading>
    <p class="text-gray-500 -mt-4 mb-4">
      Entitlements are updated at subscription creation or on a new billing cycle.
      <a href="javascript:void(0)" class="font-semibold text-[#4935bc]"> Learn more</a>
    </p>
    <EmptyPlaceHolder>No active entitlements</EmptyPlaceHolder>
  </SectionCard>
</template>
