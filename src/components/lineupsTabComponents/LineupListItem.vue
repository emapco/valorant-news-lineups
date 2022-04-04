<template>
  <accordion-layout :title="lineup.description">
    <ion-item
      v-for="(img, index) in lineup.imgDesc"
      :key="index"
    >
      <card-layout class="!w-full" :title="img.description">
        <div class="flex items-center justify-center" >
          <ion-img :src="img.src" />
        </div>
      </card-layout>
    </ion-item>
  </accordion-layout>
</template>

<script setup lang='ts'>
import { defineProps } from "vue";
import { IonImg, IonItem } from "@ionic/vue";
import CardLayout from "@/components/layouts/CardLayout.vue";
import AccordionLayout from "@/components/layouts/AccordionLayout.vue";

import { ValLineup } from "@/store/LineupTypes";

const props = defineProps<{
  lineup: ValLineup;
}>();
</script>

<style>
</style>