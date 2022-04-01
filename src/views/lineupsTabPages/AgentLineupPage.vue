<template>
  <base-layout
    :page-title="pageTitle"
    :page-default-back-link="pageDefaultBackLink"
  >
    <agent-lineup-list
      :agent="agent"
      :map="map"
    />
  </base-layout>
</template>

<script setup lang='ts'>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { titleCase } from "@/util";
import AgentLineupList from "@/components/lineupsTabComponents/AgentLineupList.vue";

const map = ref("");
const agent = ref("");

const route = useRoute();
if (typeof route.params.map === "string") {
  map.value = route.params.map;
}
if (typeof route.params.agent === "string") {
  agent.value = route.params.agent;
}

const pageTitle = computed(
  () => `Lineups: ${titleCase(map.value)} | ${titleCase(agent.value)} `
);
const pageDefaultBackLink = computed(() => `/tabs/lineups/${map.value}`);
</script>