<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Valorant In the News</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">
            News
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <rss-feed :link="link" />
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
