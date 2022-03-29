<template>
  <base-layout page-title="Lineups">
    <!-- display the different maps that can be selected -->
    <div class="flex-row-center">
      <map-selection-button
        v-for="(map, key) in maps"
        :key="key"
        :map="map"
        :router-link="`/tabs/lineups/${key}`"
      />
    </div>
  </base-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MapSelectionButton from "../components/MapSelectionButton.vue";

import { VAL_MAPS } from "@/store/map-store";
const maps = ref(VAL_MAPS);
</script>