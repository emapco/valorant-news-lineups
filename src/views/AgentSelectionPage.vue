<template>
  <base-layout
    :page-title="`Lineups: ${titleCase(map)}`"
    page-default-back-link="/tabs/lineups/"
  >
    <div class="flex-row-center">
      <agent-selection-button
        v-for="(agent, key) in agents"
        :agent="agent"
        :key="key"
        :router-link="`/tabs/lineups/${map}/${key}/`"
      />
    </div>
  </base-layout>
</template>

<script setup lang='ts'>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { titleCase } from "@/util";
import AgentSelectionButton from "../components/AgentSelectionButton.vue";

import { VAL_AGENTS } from "@/store/agent-store";
const agents = ref(VAL_AGENTS);
const map = ref("");

onMounted(() => {
  const route = useRoute();
  if (typeof route.params.map === "string") {
    map.value = route.params.map;
  }
});
</script>
