<template>
  <base-layout page-title="Valorant In the News">
    <rss-feed :link="link" />
  </base-layout>
</template>
<script setup lang="ts">
import { ref } from "vue";
import RssFeed from "@/components/util/RssFeed.vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const googleFeedUrl =
  "https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvTkwyY3ZNVEZxT0hkMmNubzRlaElDWlc0b0FBUAE?hl=en-US&gl=US&ceid=US%3Aen";
const rss = "https://rss.app/feeds/JEbDuVbXcDBvjvfO.xml";
const link = ref(rss);
</script>
