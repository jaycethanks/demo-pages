<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'

const headers = [
  { title: 'Amount', key: 'amount' },
  { title: 'Quote number', key: 'description' },
  { title: 'Created', key: 'date' },
  { title: '', key: 'actions', sortable: false }
]
const items = [
  {
    id: 1,
    amount: {
      val: '20.00',
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
      val: '0.00',
      unit: 'USD',
      symbol: '$',
      succeed: true
    },
    description: 'pi_3JmqzVAqkzzGorqL1MrPeb5d',
    date: 'Oct 21, 2021, 10:26 AM'
  }
]
</script>
<template>
  <SectionCard>
    <Heading title="Quotes">
      <v-btn density="comfortable" icon="mdi-plus"></v-btn>
    </Heading>

    <v-data-table hide-default-footer :headers="headers" :items="items">
      <template v-slot:headers="{ columns }">
        <tr>
          <template v-for="column in columns" :key="column.key">
            <td class="font-semibold">{{ column.title }}</td>
          </template>
        </tr>
      </template>
      <template v-slot:item.amount="{ value }">
        <td class="inline-flex items-center gap-2">
          <span class="font-semibold">{{ value.symbol + value.val }}</span>
          <span>{{ value.unit }}</span>
          <v-chip class="!text-gray-500" density="compact" label color="error">
            <span class="font-semibold">Canceled</span></v-chip
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
