<template>
  <base-layout
    :page-title="pageTitle"
    :page-default-back-link="pageDefaultBackLink"
  >
    <agent-lineup-list
      :agent="agent"
      :map-name="mapName"
    />
  </base-layout>
</template>

<script setup lang='ts'>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { titleCase } from "@/util";
import AgentLineupList from "@/components/lineupsTabComponents/AgentLineupList.vue";

import agentsData from "@/store/agents.json";
const mapName = ref("");
const agent: any = ref(null);
let agentName = "";

const route = useRoute();
if (typeof route.params.map === "string") {
  mapName.value = route.params.map;
}
if (typeof route.params.agent === "string") {
  agentName = route.params.agent;
}

// locate agent in json array so we can pass it to child component
agentsData.forEach((a) => {
  if (a.name === route.params.agent) {
    agent.value = a;
  }
});

const pageTitle = computed(
  () => `Lineups: ${titleCase(mapName.value)} | ${titleCase(agentName)} `
);
const pageDefaultBackLink = computed(() => `/tabs/lineups/${mapName.value}`);
</script>
