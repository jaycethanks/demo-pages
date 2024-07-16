<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
import InfoSquareSvgIcon from '@/components/Icons/InfoSquareSvgIcon.vue'
import riskLogo from '@/assets/logo-risk.png'
import MapBox from './MapBox.vue'
import { ref } from 'vue'
const alert = ref(true)
</script>
<template>
  <SectionCard>
    <!-- Title Part -->
    <Heading>
      <template #title>
        <p class="inline-flex items-center">
          <span class="mr-2"><img :src="riskLogo" alt="" /></span>
          <span class="font-bold text-lg">Risk insights </span>
          <InfoSquareSvgIcon class="text-gray-400 ml-2" />
        </p>
      </template>
      <p class="inline-flex items-center gap-4">
        <v-chip density="comfortable" color="orange">55</v-chip>
        <span class="font-semibold">Normal</span>
        <v-btn density="comfortable"
          ><span class="normal-case font-semibold">Show all insights</span></v-btn
        >
      </p>
    </Heading>

    <!-- info banner -->
    <p class="flex items-center gap-4 text-gray-400">
      <InfoSquareSvgIcon class="text-gray-400 ml-2" />
      <span>Risk insights are unavailable in test mode.</span>
    </p>
    <v-alert
      class="mt-6"
      v-model="alert"
      text="This transaction is missing iP address and billing address, which impacts fraud detection."
      title="Integration improvement available"
      type="warning"
      closable
      variant="tonal"
    >
      <template v-slot:close>
        <div class="flex items-center">
          <v-btn color="primary" variant="tonal" rounded="0" class="w-auto px-2 mr-4 rounded-lg"
            ><span class="normal-case text-base">Learn more</span></v-btn
          >
          <v-btn icon="mdi-close" @click="alert = false"></v-btn>
        </div> </template
    ></v-alert>
    <v-btn class="mt-6" v-if="!alert" @click="alert = true">Reset Alert</v-btn>

    <!-- discreption part -->
    <div class="grid grid-cols-2 mt-4">
      <div class="left">
        <h3 class="font-semibold mb-4">CUSTOMER</h3>
        <v-row dense>
          <v-col lg="3" cols="6" class="text-gray-500">Customer email</v-col>
          <v-col align-self="start" lg="3" cols="6" class="">sunfmin@gmail.com</v-col>
        </v-row>
        <v-row dense>
          <v-col lg="3" cols="6" class="text-gray-500">Name</v-col>
          <v-col align-self="start" lg="3" cols="6" class="inline-flex items-center"
            >Felix Sun
          </v-col>
        </v-row>
        <v-row dense>
          <v-col lg="3" cols="6" class="text-gray-500">Are name and email similar?</v-col>
          <v-col align-self="start" lg="3" cols="6" class="inline-flex items-center text-gray-400"
            >Not available
          </v-col>
        </v-row>
        <v-row dense>
          <v-col lg="3" cols="6" class="text-gray-500"
            >Authorization rate fortransactions associatedwith this email (all time)</v-col
          >
          <v-col align-self="start" lg="3" cols="6" class="inline-flex items-center text-gray-400"
            >Not available
          </v-col>
        </v-row>
        <v-row dense>
          <v-col lg="3" cols="6" class="text-gray-500">Related customers</v-col>
          <v-col class="text-gray-400" align-self="start" lg="3" cols="6">Not available</v-col>
        </v-row>
      </div>
      <div class="right">
        <h3 class="font-semibold mb-4 flex items-center">
          LOCATION
          <InfoSquareSvgIcon class="text-gray-400 ml-2" />
        </h3>

        <MapBox />
        <!-- <span class="text-red-700 font-semibold text-2xl"
          >提价代码的时候这里记得放开地图组件注释
        </span> -->
      </div>
    </div>
  </SectionCard>
</template>
<style lang="less" scoped></style>
