<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
import UsaFlagSvgIcon from '@/components/Icons/UsaFlagSvgIcon.vue'
import { ref } from 'vue'
</script>
<template>
  <SectionCard class="whitespace-nowrap">
    <Heading title="Payment method" />
    <v-row dense>
      <v-col md="3" lg="2" cols="6" class="text-gray-500">ID</v-col>
      <v-col md="3" lg="2" cols="6" class="">card_1EJtKjAgkzzGorqL499SKn7w</v-col>
      <v-col md="3" lg="2" cols="6" offset-lg="2" offset-sm="0" class="text-gray-500">Owner</v-col>
      <v-col md="3" lg="2" cols="6" class="">FENGMIN SUN</v-col>
    </v-row>
    <v-row dense>
      <v-col md="3" lg="2" cols="6" class="text-gray-500">Number</v-col>
      <v-col md="3" lg="2" cols="6" class="inline-flex items-center">
        <span class="mr-2 text-xs">••••</span>
        4242
      </v-col>
      <v-col md="3" lg="2" cols="6" offset-lg="2" offset-sm="0" class="text-gray-500"
        >Address</v-col
      >
      <v-col md="3" lg="2" cols="6" class="text-gray-400">No address</v-col>
    </v-row>
    <v-row dense>
      <v-col md="3" lg="2" cols="6" class="text-gray-500">Fingerprint</v-col>
      <v-col md="3" lg="2" cols="6" class="inline-flex items-center text-[#7065cc]"
        >QlfGjXhL311xfKVV</v-col
      >
      <v-col md="3" lg="2" cols="6" offset-lg="2" offset-sm="0" class="text-gray-500">Origin</v-col>
      <v-col md="3" lg="2" cols="6" class="flex items-center gap-2"
        >United States <UsaFlagSvgIcon
      /></v-col>
    </v-row>
    <v-row dense>
      <v-col md="3" lg="2" cols="6" class="text-gray-500">Expires</v-col>
      <v-col md="3" lg="2" cols="6" class="inline-flex items-center">11 / 2028</v-col>
    </v-row>
    <v-row dense>
      <v-col md="3" lg="2" cols="6" class="text-gray-500">Type</v-col>
      <v-col md="3" lg="2" cols="6">Visa credit card</v-col>
    </v-row>
    <v-row dense>
      <v-col md="3" lg="2" cols="6" class="text-gray-500">Issuer</v-col>
      <v-col md="3" lg="2" cols="6">Stripe Payments UK Limited</v-col>
    </v-row>
  </SectionCard>
</template>
<style lang="less" scoped></style>
