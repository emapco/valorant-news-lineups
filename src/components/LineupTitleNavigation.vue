<template>
  <ion-title>
    Lineups:
    <span
      @click="$emit('mapDeselected')"
      class="nav-text"
    >{{ map }}</span>
    <span v-if="map"> > </span>
    <span
      @click="$emit('agentDeselected')"
      class="nav-text"
    >{{ agent }}</span>
  </ion-title>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
import { IonTitle } from "@ionic/vue";

const props = defineProps(["map", "agent"]);
const emit = defineEmits(["mapDeselected", "agentDeselected"]);
</script>

<style scoped>
.nav-text {
  @apply text-cyan-500 border-8 border-cyan-400 underline
  hover:no-underline hover:scale-105;
}
</style>