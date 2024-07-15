<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
import ArrowLeftSvgIcon from '@/components/Icons/ArrowLeftSvgIcon.vue'
import InfoSquareSvgIcon from '@/components/Icons/InfoSquareSvgIcon.vue'
import EditSvgIcon from '@/components/Icons/EditSvgIcon.vue'
import CheckedSvgIcon from '@/components/Icons/CheckedSvgIcon.vue'
import { ref } from 'vue'
const input = ref('Invoice 7FCF2889-0007')
const disableInput = ref(true)
</script>
<template>
  <SectionCard class="whitespace-nowrap">
    <Heading title="Payment details" />
    <v-row dense>
      <v-col md="4" lg="2" cols="6" class="text-gray-500">Statement descriptor</v-col>
      <v-col md="4" lg="2" cols="6" class="">Stripe</v-col>
    </v-row>
    <v-row dense>
      <v-col md="4" lg="2" cols="6" class="text-gray-500">Amount</v-col>
      <v-col md="4" lg="2" cols="6" class="inline-flex items-center"
        >$20.00 USD <ArrowLeftSvgIcon class="text-xl mx-2" />$153.16 HKD
        <InfoSquareSvgIcon class="text-gray-400 ml-2"
      /></v-col>
    </v-row>
    <v-row dense>
      <v-col md="4" lg="2" cols="6" class="text-gray-500">Payment exchange rate</v-col>
      <v-col md="4" lg="2" cols="6" class="inline-flex items-center"
        >$1.00 USD <ArrowLeftSvgIcon class="text-xl mx-2" /> $7.65795 HKD</v-col
      >
    </v-row>
    <v-row dense>
      <v-col md="4" lg="2" cols="6" class="text-gray-500">Fee</v-col>
      <v-col md="4" lg="2" cols="6" class="inline-flex items-center"
        >$8.32 HKD <InfoSquareSvgIcon class="text-gray-400 ml-2"
      /></v-col>
    </v-row>
    <v-row dense>
      <v-col md="4" lg="2" cols="6" class="text-gray-500">Net</v-col>
      <v-col md="4" lg="2" cols="6">$144.84 HKD</v-col>
    </v-row>
    <v-row dense>
      <v-col md="4" lg="2" cols="6" class="text-gray-500">Status</v-col>
      <v-col md="4" lg="2" cols="6">Succeeded</v-col>
    </v-row>
    <v-row dense>
      <v-col md="4" lg="2" cols="6" class="text-gray-500">Description</v-col>
      <v-col md="4" lg="2" cols="6" class="flex items-center">
        <v-text-field
          :disabled="disableInput"
          density="compact"
          hide-details
          single-line
          v-model="input"
          class="mr-2"
        ></v-text-field>
        <v-btn v-if="disableInput" @click="disableInput = false" variant="text">
          <span class="text-[#6759da] flex gap-2 items-center">
            <EditSvgIcon /><span class="normal-case">Edit</span>
          </span>
        </v-btn>
        <v-btn v-else variant="text" @click="disableInput = true">
          <span class="text-[#6759da] flex gap-2 items-center">
            <CheckedSvgIcon /><span class="normal-case">Ok</span>
          </span>
        </v-btn>
      </v-col>
    </v-row>
  </SectionCard>
</template>
<style lang="less" scoped></style>
