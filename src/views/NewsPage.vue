<template>
  <base-layout :page-title="'Valorant In the News'">
    <rss-feed :link="link" />
  </base-layout>
</template>
<script setup lang="ts">
import { ref } from "vue";
import BaseLayout from "@/components/layouts/BaseLayout.vue";
import RssFeed from "@/components/RssFeed.vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const googleFeedUrl =
  "https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvTkwyY3ZNVEZxT0hkMmNubzRlaElDWlc0b0FBUAE?hl=en-US&gl=US&ceid=US%3Aen";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const vlrFeedUrl = "https://vlr.gg/rss";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CORS = "https://cors-anywhere.herokuapp.com/";
const rss = "https://rss.app/feeds/JEbDuVbXcDBvjvfO.xml";

const link = ref(rss);
</script>
