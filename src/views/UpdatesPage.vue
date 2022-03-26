<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Updates</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">
            Updates
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <rss-feed
        :link="link"
        :source="source"
      />
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

const valUpdates =
  "https://createfeed.fivefilters.org/extract.php?url=https%3A%2F%2Fplayvalorant.com%2Fen-us%2Fnews%2F&item=div%5Bclass%2A%3D%22NewsCard-module--featured%22%5D+a&item_title=img+%40alt&item_desc=p%5Bclass%2A%3D%22copy-02+NewsCard-module--description%22%5D&item_date=p%5Bclass%2A%3D%22copy-02+NewsCard-module--dateWrapper%22%5D+span%5Bclass%2A%3D%22NewsCard-module--published%22%5D&item_date_format=m%2Fd%2Fy&feed_title=Valorant+RSS+News&max=5&order=document&guid=url";
const CORS = "https://cors-anywhere.herokuapp.com/";

const link = ref(CORS+valUpdates);
const source = ref("playvalorant.com");
</script>
