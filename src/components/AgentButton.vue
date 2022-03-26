<template>
  <ion-card class="agent-card">
    <ion-card-content>
      <ion-img :src="agent.src" />
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonImg, IonCardContent } from "@ionic/vue";
import { defineProps } from "vue";

const props = defineProps(["agent"]);
</script>

<style scoped>
  .agent-card {
    background-size: contain;
    background-repeat: no-repeat;
    @apply w-[40%] sm:w-[30%] md:w-[25%] lg:w-[15%]
    hover:w-[43%] sm:hover:w-[31%] md:hover:w-[26%] lg:hover:w-[16%];
    @apply lg:grow-[1] duration-300 ease-out;
  }
</style>