<template>
  <base-layout page-title="Valorant Game Updates">
    <game-updates-nav-buttons selected="game" />
    <rss-feed :link="link" />
  </base-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import RssFeed from "@/components/util/RssFeed.vue";
import GameUpdatesNavButtons from "@/components/updatesTabComponents/GameUpdatesNavButtons.vue";

const GAME_URL = "https://val-info-data.s3.amazonaws.com/game_updates.xml";
const link = ref(GAME_URL);
</script>
