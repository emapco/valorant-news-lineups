<template>
  <card-layout class="agent-card">
    <ion-img :src="agent.src" />
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
  @apply w-[40%] sm:w-[30%] md:w-[25%] lg:w-[13%]
    hover:w-[42%] sm:hover:w-[30.5%] md:hover:w-[25.5%] lg:hover:w-[13.5%];
  @apply cursor-pointer duration-300 ease-out;
}
</style>
<!--hover:w-[42%] sm:hover:w-[30.5%] md:hover:w-[25.5%] lg:hover:w-[13.5%]; -->