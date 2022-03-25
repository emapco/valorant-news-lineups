/* eslint-disable vue/singleline-html-element-content-newline */
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Lineups</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"> Lineups </ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- content -->
      <div class="flex-row-center">
        <map-button
          v-for="(map, key) in maps"
          :key="key"
          :map="map"
          @click="onClick(key)"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import MapButton from "../components/MapButton.vue";
import { VAL_MAPS } from "@/store";
import { ref } from "vue";
const maps = ref(VAL_MAPS);

function onClick(key: string) {
  console.log(key)
}
</script>

<style scoped>
</style>