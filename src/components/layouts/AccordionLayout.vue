<template>
  <ion-accordion-group class="w-full">
    <ion-accordion value="shapes">
      <ion-item
        class="font-semibold text-lg"
        slot="header"
      >
        {{ title }}
      </ion-item>
      <ion-list slot="content">
        <slot slot="content" />
      </ion-list>
    </ion-accordion>
  </ion-accordion-group>
</template>

<script setup lang='ts'>
import { defineProps } from "vue";
import { IonAccordion, IonAccordionGroup, IonItem, IonList } from "@ionic/vue";

const props = defineProps(["title"]);
</script>