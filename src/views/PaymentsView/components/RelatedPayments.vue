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
            <v-chip density="comfortable" color="orange">{{ risk }}</v-chip>
          </th>
          <th class="text-[#6057b9]">${{ amount }} <SucceedChip class="ml-2" /></th>
          <th>
            <v-chip density="comfortable" label color="orange">
              <p class="text-gray-700 inline-flex items-center gap-2">
                <CreditCardSvgIcon class="text-2xl" />•••• {{ sourceType }}
              </p>
            </v-chip>
          </th>
          <th>
            <v-chip density="comfortable" label color="orange">
              <span class="text-gray-700">{{ customer }}</span>
            </v-chip>
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
