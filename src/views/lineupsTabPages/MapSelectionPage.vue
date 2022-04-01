<template>
  <base-layout page-title="Lineups">
    <!-- display the different maps that can be selected
    clicking on a map takes user to AgentSelectionPage -->
    <div class="flex-row-center">
      <map-selection-button
        v-for="(map, key) in maps"
        :key="key"
        :map="map"
        :router-link="`/tabs/lineups/${map.name}`"
      />
    </div>
  </base-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MapSelectionButton from "@/components/lineupsTabComponents/MapSelectionButton.vue";

import mapsData from "@/store/maps.json";
const maps = ref(mapsData);
</script>