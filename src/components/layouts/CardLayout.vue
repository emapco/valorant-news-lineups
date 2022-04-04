<template>
  <ion-card
    class="w-auto shadow-xl"
    :color="color"
  >
    <ion-card-header v-if="title || subtitle">
      <ion-card-title v-if="title">
        {{ title }}
      </ion-card-title>
      <ion-card-subtitle v-if="subtitle">
        {{ subtitle }}
      </ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <slot />
    </ion-card-content>
  </ion-card>
</template>

<script setup lang='ts'>
import { defineProps } from "vue";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/vue";

const props = defineProps(["title", "subtitle", "color"]);
</script>