<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>News</ion-title>
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
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

const CORS = 'https://cors-anywhere.herokuapp.com/';
//const googleFeedUrl = 'https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvTkwyY3ZNVEZxT0hkMmNubzRlaElDWlc0b0FBUAE?hl=en-US&gl=US&ceid=US%3Aen';
const vlrFeedUrl = 'https://vlr.gg/rss';

import Parser from 'rss-parser';
type CustomFeed = {
  title: string
  };
type CustomItem = {
  title: string,
  link: string,
  pubDate: Date,
  desc: string,
  source: string
};

const parser: Parser<CustomFeed, CustomItem> = new Parser({
  /*
  headers: {
    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:98.0) Gecko/20100101 Firefox/98.0',
  },
  customFields: {
    feed: ['title'],
    item: ['title', 'link', 'pubDate', 'desc', 'source']
  }

   */
})

const getFeed = async () => {
  try {
    await parser.parseURL(CORS+vlrFeedUrl, (err, feed) => {
      console.log(err);
      console.log(feed);
    });
  } catch (e) {
    console.log(e);
  }

};

getFeed();

</script>
