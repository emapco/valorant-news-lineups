<template>
  <base-layout
    :page-title="pageTitle"
    page-default-back-link="/tabs/lineups/"
  >
    <!-- display the different agents that can be selected
    clicking on a agent takes user to AgentLineupPage -->
    <div class="flex-row-center">
      <agent-selection-button
        v-for="(agent, key) in agents"
        :agent="agent"
        :key="key"
        :router-link="`/tabs/lineups/${map}/${agent.name}/`"
      />
    </div>
  </base-layout>
</template>

<script setup lang='ts'>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { titleCase } from "@/util";
import AgentSelectionButton from "@/components/lineupsTabComponents/AgentSelectionButton.vue";

import agentsData from "@/store/agents.json";
const agents = ref(agentsData);
const map = ref("");

const route = useRoute();
if (typeof route.params.map === "string") {
  map.value = route.params.map;
}

const pageTitle = computed(() => `Lineups: ${titleCase(map.value)}`);
</script>
