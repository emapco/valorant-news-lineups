<template>
  <div>
    <span
      v-for="(agent, key) in agents"
      :key="key"
    >
      <agent-button
        v-if="agent.maps.includes(map)"
        :agent="agent"
        @click="$emit('agentSelected', agent.name)"
      />
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from "vue";
import AgentButton from "../components/AgentButton.vue";

import { VAL_AGENTS } from "@/agent-store";
const agents = ref(VAL_AGENTS);

const props = defineProps(["map"]);
const emit = defineEmits(["agentSelected"]);
</script>
