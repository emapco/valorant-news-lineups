<template>
  <base-layout
    :page-title="`Lineups: ${titleCase(map)} | ${titleCase(agent)} `"
    :page-default-back-link="`/tabs/lineups/${map}`"
  >
    <lineup-list
      :agent="agent"
      :map="map"
    />
  </base-layout>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { titleCase } from "@/util";
import LineupList from "@/components/LineupList.vue";

const map = ref("");
const agent = ref("");

const route = useRoute();
if (typeof route.params.map === "string") {
  map.value = route.params.map;
}
if (typeof route.params.agent === "string") {
  agent.value = route.params.agent;
}
</script>