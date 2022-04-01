<template>
  <card-layout class="agent-card">
    <ion-img
      :src="agent.src"
      :alt="agent.name"
    />
  </card-layout>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { IonImg } from "@ionic/vue";
import CardLayout from "@/components/layouts/CardLayout.vue";

const props = defineProps(["agent"]);
</script>

<style scoped>
.agent-card {
  background-size: contain;
  background-repeat: no-repeat;
  @apply w-[40%] sm:w-[33%] md:w-[25%] lg:w-[13%]
    hover:w-[42%] sm:hover:w-[34%] md:hover:w-[26%] lg:hover:w-[14%]
    landscape:w-[29%] landscape:hover:w-[30%]
    landscape:sm:w-[20%] landscape:sm:hover:w-[21%]
    landscape:lg:w-[16%] landscape:lg:hover:w-[17%];
  @apply cursor-pointer duration-300 ease-out;
}
</style>