<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
import SucceedChip from '@/components/SucceedChip.vue'
import CreditCardSvgIcon from '@/components/Icons/CreditCardSvgIcon.vue'
import InfoSquareSvgIcon from '@/components/Icons/InfoSquareSvgIcon.vue'

const desserts = [
  {
    id: 1,
    risk: 50,
    amount: '20.00',
    sourceType: '4242',
    customer: 'FENGMIN SUN',
    device: '',
    deviceipAddress: 'Unknown',
    date: 'Apr 11, 11:51 AM'
  },
  {
    id: 2,
    risk: 10,
    amount: '8.00',
    sourceType: '4242',
    customer: 'FENGMIN SUN',
    device: '',
    deviceipAddress: 'Unknown',
    date: 'Mar 11, 11:45 AM'
  }
]
</script>
<template>
  <SectionCard>
    <Heading title="Related payments" />
    <v-table>
      <thead>
        <tr>
          <th class="!font-semibold">RISK</th>
          <th class="!font-semibold">AMOUNT</th>
          <th class="!font-semibold">SOURCE TYPE</th>
          <th class="!font-semibold">CUSTOMER</th>
          <th class="!font-semibold">DEVICE</th>
          <th class="!font-semibold">DEVICEIP ADDRESS</th>
          <th class="!font-semibold">DATE</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{
            id,
            risk,
            amount,
            sourceType,
            customer,
            device,
            deviceipAddress,
            date
          } in desserts"
          :key="id"
        >
          <th>
            <span
              class="inline-block rounded-full px-1 py-1 font-semibold text-xs text-[#9d5530] bg-[#fdebba]"
              >{{ risk }}</span
            >
          </th>
          <th class="text-[#6057b9]">${{ amount }} <SucceedChip class="ml-2" /></th>
          <th>
            <span class="inline-flex px-2 py-1 items-center gap-2 bg-[#faead9] rounded-md">
              <CreditCardSvgIcon class="text-2xl" />•••• {{ sourceType }}</span
            >
          </th>
          <th>
            <span class="inline-flex px-2 py-1 bg-[#faead9] rounded-md">{{ customer }}</span>
          </th>
          <th>{{ device }}</th>
          <th>
            <span class="flex items-center text-gray-400"
              >{{ deviceipAddress }} <InfoSquareSvgIcon class="ml-2 text-2xl"
            /></span>
          </th>
          <th>{{ date }}</th>
        </tr>
      </tbody>
    </v-table>
  </SectionCard>
</template>
<style lang="less" scoped></style>
