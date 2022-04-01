<template>
  <h2
    v-if="!defendLineups.length && !attackLineups.length"
    class="m-4 w-full"
  >
    Sorry, we currently don't have {{ agentTitleCase }} lineups on {{ mapTitleCase }}
  </h2>
  <div v-else>
    <lineup-list
      :lineup-list="defendLineups"
      :agent-name="agentTitleCase"
      map-side="defense"
    />
    <lineup-list
      :lineup-list="attackLineups"
      :agent-name="agentTitleCase"
      map-side="attack"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed, Ref, onMounted } from "vue";
import { titleCase } from "@/util";
import { ValLineup } from "@/store/LineupTypes";
import LineupList from "@/components/lineupsTabComponents/LineupList.vue";

const props = defineProps(["map", "agent"]);
const mapTitleCase = computed(() => titleCase(props.map));
const agentTitleCase = computed(() => titleCase(props.agent));
const defendLineups: Ref<ValLineup[]> = ref([]);
const attackLineups: Ref<ValLineup[]> = ref([]);

onMounted(async () => {
  const lineupData: ValLineup[] = await import(
    `@/store/${props.map}-${props.agent}-lineups.json`
  )
    .then(({ default: myData }) => myData)
    .catch(() => console.log('JSON NOT FOUND'));

  if (lineupData) {
    lineupData.forEach((lineup: ValLineup) => {
      if (lineup.side === "attack") {
        attackLineups.value.push(lineup);
      } else {
        defendLineups.value.push(lineup);
      }
    });
  }
});
</script>
