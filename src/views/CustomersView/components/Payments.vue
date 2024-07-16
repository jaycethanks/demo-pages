<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
import CanceledChip from '@/components/CanceledChip.vue'
import SucceedChip from '@/components/SucceedChip.vue'
import { ref } from 'vue'

const selected = ref([])

const headers = [
  { title: 'Amount', key: 'amount' },
  { title: 'Description', key: 'description' },
  { title: 'Date', key: 'date' }
]
const items = [
  {
    id: 1,
    amount: {
      val: '1.00',
      unit: 'USD',
      symbol: '$',
      succeed: true
    },
    description: 'pi_3JmqzlAqkzzGorqL0g4eT5Qe',
    date: 'Oct 21, 2021, 10:27 AM'
  },
  {
    id: 2,
    amount: {
      val: '11.00',
      unit: 'USD',
      symbol: '$',
      succeed: true
    },
    description: 'pi_3JmqzVAqkzzGorqL1MrPeb5d',
    date: 'Oct 21, 2021, 10:26 AM'
  },
  {
    id: 3,
    amount: {
      val: '10.00',
      unit: 'USD',
      symbol: '$',
      succeed: true
    },
    description: 'Payment for invoice B0E69DBD-0001',
    date: 'Aug 23, 2019, 4:08 PM'
  },
  {
    id: 4,
    amount: {
      val: '236,17000',
      unit: 'JPY',
      symbol: '¥',
      succeed: false
    },
    description: 'ch_1EJtLbAqkzzGorqLBd9GVqTN',
    date: 'Mar 31, 2019, 10:24 AM'
  }
]
</script>
<template>
  <SectionCard>
    <Heading title="Payments">
      <v-btn density="comfortable" icon="mdi-plus"></v-btn>
    </Heading>

    <v-data-table :headers="headers" v-model="selected" :items="items" item-value="id" show-select>
      <template v-slot:headers="{ columns }">
        <tr>
          <template v-for="column in columns" :key="column.key">
            <td class="font-semibold">{{ column.title }}</td>
          </template>
        </tr>
      </template>
      <template v-slot:item.amount="{ value }">
        <td class="inline-flex items-center">
          <span class="font-semibold">{{ value.symbol + value.val }}</span>
          <span class="ml-2">{{ value.unit }}</span>
          <SucceedChip v-if="value.succeed" class="ml-2" /><CanceledChip v-else class="ml-2" />
        </td>
      </template>
    </v-data-table>
  </SectionCard>
</template>
