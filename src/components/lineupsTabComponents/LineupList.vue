<template>
  <accordion-layout :title="abilityNameTitle">
    <ion-item v-if="!lineupList.length">
      Sorry, we currently don't have {{ abilityNameTitle }} lineups
    </ion-item>
    <ion-item
      v-else
      v-for="(lineup, index) in lineupList"
      :key="index"
    >
      <lineup-list-item :lineup="lineup" />
    </ion-item>
  </accordion-layout>
</template>

<script setup lang='ts'>
import { defineProps, computed } from "vue";
import { IonItem } from "@ionic/vue";
import { titleCase } from "@/util";

import AccordionLayout from "@/components/layouts/AccordionLayout.vue";
import LineupListItem from "@/components/lineupsTabComponents/LineupListItem.vue";

const props = defineProps(["agentName", "lineupList", "abilityName"]);

const abilityNameTitle = computed(() => `${titleCase(props.abilityName)}`);
</script>
