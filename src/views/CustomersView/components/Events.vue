<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'

// prettier-ignore
const events = [
{id:"molestiae-provident-fugit",time:"5/30/24, 11:59:08 AM",event:"A draft invoice was created"},
{id:"sit-placeat-ipsum",time:"4/24/24, 2:13:21 PM",event:"A draft invoice was created"},
{id:"recusandae-id-vitae",time:"3/12/24, 11:31:19 AM",event:"A quote with lD qt 1P8z53AqkzzGorqL118RCX4s was canceled"},
]
</script>
<template>
  <SectionCard>
    <Heading title="Events"> </Heading>
    <v-divider class="border-opacity-100 -mt-2 mb-6"></v-divider>
    <v-row dense v-for="{ id, time, event } in events" :key="id">
      <v-col
        ><span class="font-semibold">{{ event }}</span></v-col
      >

      <v-col cols="2"
        ><span class="text-gray-500">{{ time }}</span></v-col
      >
    </v-row>

    <p class="text-gray-500 mt-8">Events before April 14, 2024 are not available</p>
  </SectionCard>
</template>
