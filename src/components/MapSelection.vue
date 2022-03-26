<template>
  <div class="flex-row-center">
    <map-button
      v-for="(map, key) in maps"
      :key="key"
      :map="map"
      @click="$emit('mapSelected', map.name)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
import MapButton from "../components/MapButton.vue";

import { VAL_MAPS } from "@/map-store";
const maps = ref(VAL_MAPS);

const emit = defineEmits(["mapSelected"]);
</script>