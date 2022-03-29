<template>
  <h2
    class="m-4 w-auto"
    v-if="!defend_lineups.length && !attack_lineups.length"
  >
    Sorry, we currently don't have {{ agentTitleCase }} lineups on {{ mapTitleCase }}
  </h2>
  <div v-else>
    <accordion-layout title="Defense Side">
      <ion-item v-if="!defend_lineups.length">
        Sorry, we currently don't have {{ agentTitleCase }} defense lineups
      </ion-item>
      <ion-item
        v-for="(defend_lu, index) in defend_lineups"
        :key="index"
      >
        <lineup-item :lineup="defend_lu" />
      </ion-item>
    </accordion-layout>
    <accordion-layout title="Attack Side">
      <ion-item v-if="!attack_lineups.length">
        Sorry, we currently don't have {{ agentTitleCase }} attack lineups
      </ion-item>
      <ion-item
        slot="content"
        v-for="(attack_lu, index) in attack_lineups"
        :key="index"
      >
        <lineup-item :lineup="attack_lu" />
      </ion-item>
    </accordion-layout>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { IonItem } from "@ionic/vue";
import { titleCase } from "@/util";
import AccordionLayout from "./layouts/AccordionLayout.vue";
import LineupItem from "@/components/LineupItem.vue";

import { VAL_LINEUP } from "@/store/lineup-store";
import ValLineup from "@/store/lineup-store";

const props = defineProps(["map", "agent"]);
const mapTitleCase = ref(titleCase(props.map));
const agentTitleCase = ref(titleCase(props.agent));
const defend_lineups = ref([]);
const attack_lineups = ref([]);

const filtered_lineups: ValLineup[] = VAL_LINEUP.filter(
  (lineup) => lineup.map == props.map && lineup.agent == props.agent
);

filtered_lineups.forEach((lineup: ValLineup) => {
  if (lineup === "defend") {
    defend_lineups.value.push(lineup);
  } else {
    attack_lineups.value.push(lineup);
  }
});
</script>
