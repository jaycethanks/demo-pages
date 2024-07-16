<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
import VisaSvgIcon from '@/components/Icons/VisaSvgIcon.vue'
import BankSvgIcon from '@/components/Icons/BankSvgIcon.vue'

enum Status {
  Expired,
  Default,
  None
}
type Record = {
  id: number
  isVisa: boolean
  status: Status
  textContent: string
  date: string
}

const paymentRecords: Record[] = [
  {
    id: 1,
    isVisa: true,
    status: Status.Expired,
    date: 'Expired Dec 2020',
    textContent: 'Visa •••• 1111'
  },
  {
    id: 2,
    isVisa: true,
    status: Status.Default,
    date: 'Expired Dec 2020',
    textContent: 'Visa •••• 1111'
  },
  {
    id: 3,
    isVisa: false,
    status: Status.None,
    date: '$0.00 USD available',
    textContent: 'ACH Credit Transfer'
  }
]
</script>
<template>
  <SectionCard>
    <Heading title="Payment methods">
      <v-btn density="comfortable" icon="mdi-plus"></v-btn>
    </Heading>

    <v-expansion-panels>
      <v-expansion-panel
        v-for="{ id, date, isVisa, status, textContent } in paymentRecords"
        :key="id"
      >
        <v-expansion-panel-title>
          <template v-slot:default="{ expanded }">
            <div class="flex items-center justify-between w-full pr-4">
              <!-- title slot left part -->
              <div class="left inline-flex items-center gap-4">
                <VisaSvgIcon v-if="isVisa" class="text-2xl text-[#09579d]" />
                <BankSvgIcon v-else class="text-2xl text-slate-600" />
                <span
                  class="font-semibold"
                  :class="{ 'text-gray-400': status === Status.Expired }"
                  >{{ textContent }}</span
                >
                <v-chip
                  label
                  density="compact"
                  :color="status === Status.Default ? 'blue' : 'lightgrey'"
                  v-if="status !== Status.None"
                >
                  <span class="font-semibold">{{
                    status === Status.Default ? 'Default' : 'Expored'
                  }}</span>
                </v-chip>
              </div>
              <!-- title slot right part -->
              <div class="right">
                <span class="text-gray-500 mr-4">{{ date }}</span>
                <v-btn
                  @click.stop
                  density="comfortable"
                  variant="text"
                  icon="mdi-dots-horizontal"
                ></v-btn>
              </div>
            </div>
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <p>SOME DETAIL LATER MAYBE...</p>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </SectionCard>
</template>
