<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
import CanceledChip from '@/components/CanceledChip.vue'
import SucceedChip from '@/components/SucceedChip.vue'
import { ref } from 'vue'

const selected = ref([])

const headers = [
  { title: 'Amount', key: 'amount' },
  { title: 'Frequency', key: 'frequency' },
  { title: 'Invoice number', key: 'invoicenumber' },
  { title: 'Due', key: 'due' },
  { title: 'Created', key: 'created' },
  { title: '', key: 'actions', sortable: false }
]

type Record = {
  amount: string
  due: string
  id: string
  invoicenumber: string
  frequency: string
  created: string
}
const items: Record[] = [
  {
    amount: '$0.00',
    due: '—',
    id: 'perferendis',
    invoicenumber: 'BOE69DBD-0013',
    frequency: '',
    created: 'May 30, 11:59 AM'
  },
  {
    amount: '$0.00',
    due: '—',
    id: 'odit',
    invoicenumber: 'BOE69DBD-0012',
    frequency: '',
    created: 'May 30, 11:59 AM'
  },
  {
    amount: '$0.00',
    due: 'Apr 11',
    id: 'sed',
    invoicenumber: 'BOE69DBD-0011',
    frequency: '',
    created: 'Mar 12, 11:31 AM'
  },
  {
    amount: '$0.00',
    due: 'Apr 11',
    id: 'eos',
    invoicenumber: 'BOE69DBD-0010',
    frequency: '',
    created: 'Mar 12, 11:29 AM'
  },
  {
    amount: '$0.00',
    due: '—',
    id: 'blanditiis',
    invoicenumber: 'BOE69DBD-0009',
    frequency: '',
    created: 'Mar 12, 10:33 AM'
  },
  {
    amount: '$0.00',
    due: 'Apr 5',
    id: 'quo',
    invoicenumber: 'BOE69DBD-0008',
    frequency: '',
    created: 'Mar 6, 10:25 AM'
  },
  {
    amount: '$0.00',
    due: 'May 20, 2023',
    id: 'quis',
    invoicenumber: 'BOE69DBD-0007',
    frequency: '',
    created: 'Apr 20,2023,5:01 PM'
  },
  {
    amount: '$0.00',
    due: '—',
    id: 'occaecati',
    invoicenumber: 'B0E69DBD-0006',
    frequency: '',
    created: 'Jan 11,2022,12:18 PM'
  },
  {
    amount: '$0.00',
    due: '—',
    id: 'commodi',
    invoicenumber: 'BOE69DBD-0005',
    frequency: '',
    created: 'Dec 27,2021,11:24 AM'
  },
  {
    amount: '$0.00',
    due: '—',
    id: 'iusto',
    invoicenumber: 'B0E69DBD-0004',
    frequency: '',
    created: 'Dec 27,2021,11:23 AM'
  }
]
</script>
<template>
  <SectionCard>
    <Heading title="Invoices">
      <v-btn density="comfortable" icon="mdi-plus"></v-btn>
    </Heading>
    <v-divider class="border-opacity-100 -mt-2"></v-divider>
    <v-data-table :headers="headers" :items="items">
      <template v-slot:headers="{ columns }">
        <tr>
          <template v-for="column in columns" :key="column.key">
            <td class="font-semibold">{{ column.title }}</td>
          </template>
        </tr>
      </template>
      <template v-slot:item.amount="{ value }">
        <td class="inline-flex items-center gap-2">
          <span class="font-semibold">{{ value }}</span>
          <span>USD</span>
          <v-chip class="!text-gray-500" density="compact" label>
            <span class="font-semibold">Draft</span></v-chip
          >
        </td>
      </template>
      <template v-slot:item.description="{ value }">
        <span class="whitespace-nowrap">{{ value }}</span>
      </template>
      <template v-slot:item.date="{ value }">
        <span class="whitespace-nowrap">{{ value }}</span>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn density="comfortable" variant="text" size="small" icon="mdi-dots-horizontal"></v-btn>
      </template>
    </v-data-table>
  </SectionCard>
</template>
