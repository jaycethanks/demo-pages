<script lang="ts" setup>
import MoneySvgIcon from '@/components/Icons/MoneySvgIcon.vue'
import SignBoardSvgIcon from '@/components/Icons/SignBoardSvgIcon.vue'
import BackupIcon from '@/components/Icons/BackupIcon.vue'
import VisaSvgIcon from '@/components/Icons/VisaSvgIcon.vue'
import SectionCard from '@/components/SectionCard.vue'
import SucceedChip from '@/components/SucceedChip.vue'
</script>
<template>
  <SectionCard class="text-gray-500">
    <div class="title flex items-center gap-2"><MoneySvgIcon /> PAYMENT</div>
    <div class="title flex items-center gap-2 justify-end">
      pi_3PF6xZAqkzzGorqL1DRq1u0T <SignBoardSvgIcon />
    </div>
    <!-- main-info -->
    <div class="flex justify-between mt-2">
      <div class="right flex items-center">
        <span class="text-3xl font-semibold text-[#22252d]">$20.00</span
        ><span class="text-3xl mx-2 text-gray-600">USD</span>
        <SucceedChip />
      </div>
      <div class="left">
        <v-btn class="mr-4" density="comfortable"
          ><BackupIcon class="text-2xl" /><span class="normal-case font-semibold"
            >Refund</span
          ></v-btn
        >
        <v-btn class="!min-w-10 px-1" density="comfortable">
          <v-icon icon="mdi-dots-horizontal"></v-icon>
        </v-btn>
      </div>
    </div>

    <!-- description part -->
    <div class="max-w-[800px] mt-8">
      <v-row class="text-gray-500" dense>
        <v-col>Last update</v-col>
        <v-col>Customer</v-col>
        <v-col>Payment method</v-col>
        <v-col>Risk evaluation</v-col>
      </v-row>
      <v-row class="text-gray-700" dense>
        <v-col>May 11, 11:50 AM</v-col>
        <v-col class="text-primary hover:!opacity-75 font-semibold">Felix Sun</v-col>
        <v-col class="flex items-center"
          ><VisaSvgIcon class="text-[#0057a3] inline-block text-2xl" /><span class="mx-2 text-xs"
            >••••</span
          >
          4242</v-col
        >

        <v-col class="text-primary hover:!opacity-75">
          <v-chip density="comfortable" color="orange">55</v-chip>
          Normal</v-col
        >
      </v-row>
    </div>
  </SectionCard>
</template>
<style lang="less" scoped></style>
