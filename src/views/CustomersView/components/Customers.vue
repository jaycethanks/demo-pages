<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
</script>
<template>
  <SectionCard>
    <p class="mb-1">
      <span class="font-semibold text-primary hover:!opacity-75 cursor-pointer"
        >Customers <v-icon icon="mdi-chevron-right" size="small"></v-icon
      ></span>
    </p>
    <Heading title="阿斯顿发斯蒂芬12312323">
      <v-btn density="comfortable" class="mr-2"
        ><span class="normal-case font-semibold">Create payment</span></v-btn
      >
      <v-btn density="comfortable" class="mr-2"
        ><span class="normal-case font-semibold">Create invoice</span></v-btn
      >
      <v-btn density="comfortable" class="!min-w-10 px-1">
        <v-icon icon="mdi-dots-horizontal"></v-icon>
      </v-btn>
    </Heading>
    <p class="text-gray-500 -mt-4">aaaa@asdfasd.com</p>
  </SectionCard>
</template>
