<template>
  <base-layout page-title="Valorant Development News">
    <rss-feed
      :link="link"
      author="playvalorant.com"
      data-type="json"
    />
  </base-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import RssFeed from "@/components/util/RssFeed.vue";
import GameUpdatesNavButtons from "@/components/updatesTabComponents/GameUpdatesNavButtons.vue";

const DEV_URL = "https://val-info-data.s3.amazonaws.com/dev_updates.json.br";
const link = ref(DEV_URL);
</script>
