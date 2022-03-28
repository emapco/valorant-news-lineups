<template>
  <h2
    class="flex-row-center mt-4"
    v-if="!defend_lineups.length && !attack_lineups.length"
  >
    Sorry, we currently don't have {{ agent }} lineups on {{ map }}
  </h2>
  <div v-else>
    <accordion-layout title="Defense Side">
      <ion-item v-if="!defend_lineups.length">
        Sorry, we currently don't have {{ agent }} defense lineups
      </ion-item>
      <ion-item
        v-for="(defend_lu, index) in defend_lineups"
        :key="index"
      >
        <lineup-component :lineup="defend_lu" />
      </ion-item>
    </accordion-layout>
    <accordion-layout title="Attack Side">
      <ion-item v-if="!attack_lineups.length">
        Sorry, we currently don't have {{ agent }} attack lineups
      </ion-item>
      <ion-item
        slot="content"
        v-for="(attack_lu, index) in attack_lineups"
        :key="index"
      >
        <lineup-component :lineup="attack_lu" />
      </ion-item>
    </accordion-layout>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { IonItem } from "@ionic/vue";
import AccordionLayout from "./layouts/AccordionLayout.vue";
import LineupComponent from "@/components/LineupItem.vue";

import { VAL_LINEUP } from "@/store/lineup-store";
import ValLineup from "@store/lineup-store";

const filtered_lineups: ValLineup[] = VAL_LINEUP.filter(
  (lineup) =>
    lineup.map == props.map.toLowerCase() &&
    lineup.agent == props.agent.toLowerCase()
);

const props = defineProps(["map", "agent"]);
const defend_lineups = ref(
  filtered_lineups.filter((lineup) => lineup.side === "defend")
);
const attack_lineups = ref(
  filtered_lineups.filter((lineup) => lineup.side === "attack")
);
</script>
