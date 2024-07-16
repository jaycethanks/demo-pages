<script lang="ts" setup>
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import { onMounted, onUnmounted, ref } from 'vue'
// https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-vue/
// https://codepen.io/xav-ie/pen/QWXjWXZ?editors=1010
mapboxgl.accessToken =
  'pk.eyJ1IjoieHJ1aXppZnkiLCJhIjoiY2ttbWRyeXQ2MWsyczJ1bW56ajRmczdxcyJ9.58kctzsy_fvUfP2S6ZIaUw'
let mapInstance: any = null
const mapContainer = ref(null)
onMounted(() => {
  if (mapContainer.value !== null) {
    mapInstance = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/streets-v12', // Replace with your preferred map style
      center: [-71.224518, 42.213995],
      zoom: 9
    })
  }
})
onUnmounted(() => {
  mapInstance.remove()
  mapInstance = null
})
</script>
<template>
  <div ref="mapContainer" class="map-container relative w-full h-[200px]">
    <v-btn color="primary" density="comfortable" variant="text" class="!absolute right-1 top-1 z-10"
      ><span class="normal-case font-semibold">Reset</span></v-btn
    >
  </div>
  <p class="mt-2">
    No session data available.
    <a href="javascript:void(0)" class="text-primary hover:!opacity-75 font-semibold">Learn more</a>
  </p>
  <p class="flex justify-between mt-2">
    <span>IP address</span>
    <span class="text-gray-400">Not provided</span>
  </p>
  <p class="flex justify-between mt-2">
    <span>Distance between billing and shipping address</span>
    <span class="text-gray-400">No billing address or shipping address provided</span>
  </p>
</template>
