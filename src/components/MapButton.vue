<template>
  <ion-card class="map-card">
    <ion-card-header class="map-name">
      <ion-card-title><u>{{ map.name }}</u></ion-card-title>
    </ion-card-header>
    <ion-img :src="map.src" />
  </ion-card>
</template>

<script setup lang="ts">
import { IonImg, IonCard, IonCardTitle, IonCardHeader } from "@ionic/vue";
import { defineProps } from "vue";

const props = defineProps(["map"]);
</script>

<style scoped>
.map-card {
  background-size: contain;
  background-repeat: no-repeat;
  @apply w-[84%] sm:w-[45%] md:w-[25%] lg:w-[22%]
  hover:w-[87%] sm:hover:w-[47%] md:hover:w-[28%] lg:hover:w-[24%];
  @apply shadow-md lg:grow-[1] duration-200 ease-out;
}

.map-name {
  padding: 0.5rem;
}
</style>