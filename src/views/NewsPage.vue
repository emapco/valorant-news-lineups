<template>
  <base-layout page-title="Valorant News">
    <rss-feed :link="link" author="vlr.gg" data-type="xml" />
  </base-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import RssFeed from "@/components/util/RssFeed.vue";

const rss = "https://vlr.gg/rss";
const api = 'https://gc74qsy536.execute-api.us-east-1.amazonaws.com/prod/fetchRSS?rss='

const link = ref(api + rss);
</script>

