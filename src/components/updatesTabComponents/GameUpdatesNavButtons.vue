<template>
  <div class="flex-row-center">
    <ion-button
      :class="{ selected : isSelected('game')}"
      :router-link="`/tabs/updates/patches`"
    >
      Game Patches
    </ion-button>
    <ion-button
      :class="{ selected : isSelected('dev')}"
      :router-link="`/tabs/updates/dev`"
    >
      Development News
    </ion-button>
  </div>
</template>

<script setup lang='ts'>
import { defineProps } from "vue";
import { IonButton } from "@ionic/vue";

const props = defineProps(["selected"]);

function isSelected(btn: string) {
  return props.selected === btn;
}
</script>

<style scoped>
.selected {
  opacity: 60%;
}
</style>