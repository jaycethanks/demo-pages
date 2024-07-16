<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
import CommandSvgIcon from '@/components/Icons/CommandSvgIcon.vue'
import ClockSvgIcon from '@/components/Icons/ClockSvgIcon.vue'
</script>
<template>
  <SectionCard>
    <Heading title="Details">
      <v-btn density="comfortable" icon="mdi-pencil-outline"></v-btn>
    </Heading>
    <v-divider class="border-opacity-100 -mt-2 mb-6"></v-divider>

    <div class="-mt-4">
      <p class="detail-title font-semibold">Customer ID</p>
      <p class="detail-value text-gray-500">
        <CommandSvgIcon /><span class="decoration-dotted underline underline-offset-4"
          >cus_EnUK8WcwQkuKQP</span
        >
      </p>

      <p class="detail-title font-semibold">Customer since</p>
      <p class="detail-value text-gray-500"><ClockSvgIcon />Mar 31, 2019</p>

      <p class="detail-title font-semibold">Description</p>
      <p class="detail-value text-gray-500">customer0077N23</p>

      <p class="detail-title font-semibold">Billing emails</p>
      <p class="detail-value text-gray-500">aaaa@asdfasd.com</p>

      <p class="detail-title font-semibold">Biling details</p>
      <p class="detail-value text-gray-500">—</p>

      <p class="mt-6 text-primary hover:!opacity-75 cursor-pointer">Show more</p>
    </div>
  </SectionCard>
</template>
<style lang="css" scoped>
.detail-title {
  margin-top: 1.25rem;
}
.detail-value {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
</style>
