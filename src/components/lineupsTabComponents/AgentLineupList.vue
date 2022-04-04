<template>
  <h2
    v-if="!lineups.length"
    class="m-4 w-auto text-center"
  >
    Sorry, we currently don't have {{ agentTitleCase }} lineups for {{ mapTitleCase }}
  </h2>
  <div v-else>
    <lineup-list
      v-for="ability in agent.abilities"
      :agent-name="agentTitleCase"
      :ability-name="ability"
      :lineup-list="getAbilityLineupList(ability)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed, Ref, onMounted } from "vue";
import { titleCase } from "@/util";
import { ValLineup } from "@/store/LineupTypes";
import LineupList from "@/components/lineupsTabComponents/LineupList.vue";

const props = defineProps(["mapName", "agent"]);
const mapTitleCase = computed(() => titleCase(props.mapName));
const agentTitleCase = computed(() => titleCase(props.agent.name));
const lineups: any = ref([]);

onMounted(async () => {
  import(`@/store/${props.mapName}-${props.agent.name}-lineups.json`)
    .then(({ default: data }) => (lineups.value = data))
    .catch(() => console.log("JSON NOT FOUND"));
});

function getAbilityLineupList(abilityName: string) {
  return lineups.value.filter(
    (lineup: ValLineup) => lineup.ability === abilityName
  );
}
</script>
