<template>
  <base-layout :page-title="'Valorant Game Updates'">
    <div class="flex-row-center">
      <ion-button
        :class="{ selected : isSelected('game')}"
        @click="onClick('game')"
      >
        Game Patches
      </ion-button>
      <ion-button
        :class="{ selected : isSelected('dev')}"
        @click="onClick('dev')"
      >
        Development News
      </ion-button>
    </div>
    <rss-feed :link="link" />
  </base-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IonButton } from "@ionic/vue";
import BaseLayout from "@/components/layouts/BaseLayout.vue";
import RssFeed from "@/components/RssFeed.vue";

const GAME_URL = "https://val-info-data.s3.amazonaws.com/game_updates.xml";
const DEV_URL = "https://val-info-data.s3.amazonaws.com/dev_updates.xml";

const link = ref(GAME_URL);
const selectedButton = ref("game");

function isSelected(id: string) {
  return selectedButton.value === id;
}

function onClick(id: string) {
  selectedButton.value = id;
  switch (id) {
    case "game":
      link.value = GAME_URL;
      break;
    case "dev":
      link.value = DEV_URL;
      break;
  }
}
</script>

<style scoped>
.selected {
  opacity: 60%;
}
</style>