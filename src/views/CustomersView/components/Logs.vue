<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'

// prettier-ignore
const logs = [
{id:"molestiae-provident-fugit",time:"5/30/24, 11:59:08 AM",statusCode:'200 OK',event:"POST /v1/invoices"},
{id:"sit-placeat-ipsum",time:"4/24/24, 2:13:21 PM",statusCode:'200 OK',event:"POST/v1/quotes/qt_1P8z53AqkzzGorqL1I8RCX4S"},
{id:"recusandae-id-vitae",time:"3/12/24, 11:31:19 AM",statusCode:'200 OK',event:"PoST/v1/invoices/in_10tM3YAqkzzGorqLI5uCBMpQ"},
{id:"aut-non-autem",time:"3/12/24, 11:31:12 AM",statusCode:'200 OK',event:"POST /v1/invoices"},
{id:"sint-impedit-molestias",time:"3/12/24, 11:30:45 AM",statusCode:'200 OK',event:"PoST/v1/invoices/in 10tM2KAqkzzGorqLWncyOR4i"},
]
</script>
<template>
  <SectionCard>
    <Heading title="Logs"> </Heading>
    <v-divider class="border-opacity-100 -mt-2 mb-6"></v-divider>
    <v-row dense v-for="{ id, time, statusCode, event } in logs" :key="id">
      <v-col
        ><span class="font-semibold">{{ event }}</span></v-col
      >
      <v-col cols="2"
        ><v-chip label density="compact">{{ statusCode }}</v-chip></v-col
      >
      <v-col cols="2"
        ><span class="text-gray-500">{{ time }}</span></v-col
      >
    </v-row>

    <v-btn class="mt-8" variant="text" color="#4f3ac8"
      ><span class="font-semibold normal-case">View more logs</span></v-btn
    >
  </SectionCard>
</template>
