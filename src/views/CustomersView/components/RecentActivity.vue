<script lang="ts" setup>
import Heading from '@/components/Heading.vue'
import SectionCard from '@/components/SectionCard.vue'
import NoteSvgIcon from '@/components/Icons/NoteSvgIcon.vue'
</script>
<template>
  <SectionCard>
    <Heading title="Recent activity">
      <v-btn density="comfortable"
        ><v-icon icon="mdi-plus" size="large"></v-icon
        ><span class="normal-case font-semibold">Add note</span></v-btn
      >
    </Heading>
    <v-divider class="border-opacity-100 -mt-2 mb-6"></v-divider>
    <div class="recent-activities">
      <v-row>
        <v-col cols="1">
          <NoteSvgIcon class="text-gray-500" />
        </v-col>
        <v-col>
          <p>
            Maria is a UX Specialist at The Good. She uses her knowledge of user-centered design,
            evidence-based methods, and human behavior to provide research that inspires intuitive,
            functional design.
          </p>
          <p class="mt-2 text-gray-500">Mar 6, 2024, 12:09 PM by Felix Sun</p>
        </v-col>
        <v-col cols="1">
          <v-btn
            @click.stop
            density="comfortable"
            variant="text"
            icon="mdi-dots-horizontal"
            class="text-gray-500"
          ></v-btn>
        </v-col>
      </v-row>

      <p class="mt-12 text-gray-500">
        Access to events in the Dashboard are provided for the past 13 months.
      </p>
    </div>
  </SectionCard>
</template>
