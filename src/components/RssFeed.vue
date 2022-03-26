<template>
  <ion-card
    v-for="(item, index) in items"
    :key="index"
  >
    <ion-card-header>
      <ion-card-title>
        {{ item.title }}
      </ion-card-title>
      <ion-card-subtitle v-if="item.author || item.pubDate">
        {{ item.author }}
        <span v-if="item.author && item.pubDate"> | </span>
        {{ item.pubDate }}
      </ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      {{ item.description }}
      <br><br>
      <a
        :href="item.link"
        target="_blank"
      >
        <ion-button>Read more</ion-button>
      </a>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from "@ionic/vue";
import $ from "jquery";

const props = defineProps(["link", "source"]);
const items = ref([]);

/*
item: {
    title: string;
    link: string;
    description: string;
    pubDate: string;
    author: string;
}
*/
$.get(props.link, function (data) {
  let $xml = $(data);
  $xml.find("item").each(function () {
    let $this = $(this),
      item = {
        title: $this.find("title").text(),
        link: $this.find("link").text(),
        description: $this.find("description").text(),
        pubDate: $this.find("pubDate").text(),
        author: $this.find("dc\\:creator").text(),
      };
    console.log(item.author)
    if (!item.author) {
      item.author = props.source;
    }
    items.value.push(item);
  });
});

/*
import Parser from "rss-parser";
type CustomFeed = {
  title: string;
};
type CustomItem = {
  title: string;
  link: string;
  pubDate: Date;
  desc: string;
  source: string;
};

const parser: Parser<CustomFeed, CustomItem> = new Parser({
  headers: {
    "User-Agent":
      "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:98.0) Gecko/20100101 Firefox/98.0",
  },
  customFields: {
    feed: ["title"],
    item: ["title", "link", "pubDate", "desc", "source"],
  },
});

const getFeed = async () => {
  try {
    await parser.parseURL(CORS + googleFeedUrl, (err, feed) => {
      console.log(err);
      console.log(feed);
    });
  } catch (e) {
    console.log(e);
  }
};

getFeed();
*/
</script>
