<template>
  <div class="flex-row-center">
    <agent-button
      v-for="(agent, key) in agents"
      :agent="agent"
      :key="key"
      @click="$emit('agentSelected', agent.name)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from "vue";
import AgentButton from "../components/AgentButton.vue";

import { VAL_AGENTS } from "@/store/agent-store";
const agents = ref(VAL_AGENTS);

const props = defineProps(["map"]);
const emit = defineEmits(["agentSelected"]);
</script>
