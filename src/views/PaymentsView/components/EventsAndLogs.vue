<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
import { computed, ref } from 'vue'
const items = [
  {
    id: 1,
    content: 'Suscipit ea eius aut repellat et dicta. Dolor dolor similique. ',
    time: '5/11/24, 11:50:59 AM',
    data: {
      from: 'quo',
      foo: 'Lorem ipsum dolor sit aur adipiscing elit.',
      bar: 'Nullam eget felobortis mattis aliquam faucibus.',
      baz: 'Vivameget arcu dictum varius duis at consectetur.'
    }
  },
  {
    id: 2,
    content: 'Est expedita nesciunt repellat deserunt velit corrupti. Amet velit nemo. ',
    time: '5/11/24, 11:50:59 AM',
    data: {
      from: 'harum',
      foo: 'Sed do eiusmod  labore et dolore magna aliqua.',
      bar: 'Ut enim , quis nostrud exercitation ullamco laboris.',
      baz: 'Duis aute irure dolor in  velit esse cillum.'
    }
  },
  {
    id: 3,
    content: 'Et aspernatur error itaque maxime saepe eos distinctio ut.. ',
    time: '5/11/24, 11:50:59 AM',
    data: {
      from: 'nonjks',
      foo: 'Excepteur sint occaecat cupidatat non proident.',
      bar: 'Deserunt mollit , consectetur adipiscing elit.',
      baz: 'Sed ut  natus error sit voluptatem accusantium.'
    }
  }
]
const currentSelected = ref(0)
const currentData = computed(() => items.find((it) => it.id === currentSelected.value))
const handleSelected = (toggle: Function, id: number) => {
  toggle()
  currentSelected.value = id
}
</script>
<template>
  <SectionCard>
    <Heading title="Events and logs" />
    <p class="text-lg">LATEST ACTIVITY</p>
    <p class="mt-2"><span class="text-gray-500">PaymentIntent status: </span> succeeded</p>
    <v-row class="mt-12">
      <!-- left timeline part -->
      <v-col cols="6">
        <p class="mb-4">ALL ACTIVITY</p>
        <v-item-group selected-class="selected-class">
          <v-timeline side="end" align="start">
            <v-timeline-item
              v-for="{ id, content, time } in items"
              :key="id"
              dot-color="#a4a7b1"
              size="x-small"
            >
              <v-item v-slot="{ isSelected, selectedClass, toggle }">
                <v-alert
                  class="box-content cursor-pointer"
                  color="#fff"
                  :class="[selectedClass]"
                  @click="() => handleSelected(toggle as Function, id)"
                >
                  <template v-slot:title>
                    {{ content }}
                  </template>
                  <template v-slot:text>
                    <span class="text-gray-400 inline-block mt-2">{{ time }}</span>
                  </template>
                </v-alert>
              </v-item>
            </v-timeline-item>
          </v-timeline>
        </v-item-group>
      </v-col>
      <v-col cols="6" v-if="currentData">
        <!-- right info detail part -->
        <p>From Stripe</p>
        <p class="font-semibold mt-2">{{ currentData?.data.from }}</p>
        <p class="mt-2 text-[#726db2]">View event detail</p>
        <p class="mt-6 mb-4">Event data</p>
        <pre
          >{{ JSON.stringify(currentData?.data, undefined, 2) }}
        </pre>
      </v-col>
    </v-row>
  </SectionCard>
</template>
<style lang="css" scoped>
.selected-class {
  outline: 1px solid #5153a7;
}
</style>
