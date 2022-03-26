/* eslint-disable vue/singleline-html-element-content-newline */
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <lineup-title-navigation
          :map="selectedMap"
          :agent="selectedAgent"
          @map-deselected="onMapDeselect"
          @agent-deselected="onAgentDeselect"
        />
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <lineup-title-navigation
            :map="selectedMap"
            :agent="selectedAgent"
            @map-deselected="onMapDeselect"
            @agent-deselected="onAgentDeselect"
          />
        </ion-toolbar>
      </ion-header>
      <!-- content -->
      <map-selection
        v-if="!selectedMap"
        @map-selected="onMapSelect"
      />
      <agent-selection
        v-if="selectedMap && !selectedAgent"
        :map="selectedMap"
        @agent-selected="onAgentSelect"
      />
      <!-- end of content -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import LineupTitleNavigation from "@/components/LineupTitleNavigation.vue";
import MapSelection from "@/components/MapSelection.vue";
import AgentSelection from "@/components/AgentSelection.vue";
const selectedMap = ref("");
const selectedAgent = ref("");

function onMapSelect(mapName: string) {
  selectedMap.value = mapName;
}

function onAgentSelect(agentName: string) {
  selectedAgent.value = agentName;
}

function onMapDeselect() {
  selectedMap.value = selectedAgent.value = "";
}

function onAgentDeselect() {
  selectedAgent.value = "";
}
</script>

<style scoped>
</style>