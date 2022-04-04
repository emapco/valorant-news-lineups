<template>
  <ion-spinner
    v-if="!items.length"
    class="m-auto w-full"
    name="dots"
  />
  <card-layout
    v-for="(item, index) in items"
    :key="index"
    :title="item.title"
    :subtitle="`${author} | ${item.date}`"
  >
    {{ item.content }}
    <br><br>
    <a
      :href="item.href"
      target="_blank"
    >
      <ion-button>
        <ion-label>Read Article&nbsp;</ion-label>
        <ion-icon class="text-sm" :icon="openOutline" />
      </ion-button>
    </a>
  </card-layout>
</template>

<script setup lang="ts">
import { Ref, ref, defineProps } from "vue";
import { IonButton, IonLabel, IonSpinner, IonIcon } from "@ionic/vue";
import { openOutline } from "ionicons/icons";
import CardLayout from "@/components/layouts/CardLayout.vue";

const props = defineProps(["link", "author", "dataType"]);
const items: Ref<FeedItem[]> = ref([]);

fetchRSSFeed(props.link);

/**
 * Fetches a RSS feed
 * The feed data may be a json or xml(rss) file.
 * The function parses the data according to the dataType passed as a prop.
 * @param link: A href pointing to the resource that contains feed items.
 */
async function fetchRSSFeed(link: string) {
  const response = await fetch(link);
  if (props.dataType === 'json') {
    items.value = await response.json();
    // each item's date is in UTC milliseconds thus convert it
    items.value.forEach((item: FeedItem) => {
      item.date = new Date(item.date).toLocaleDateString()
    });
  } else {
    let text = await response.text();
    // result is a xml RSS document thus get every item
    // and extract the content from the various tags
    const domParser = new window.DOMParser().parseFromString(text, "text/xml");
    const data = domParser.querySelectorAll('item');
    data.forEach((item) => {
      items.value.push({
        title: item.querySelector('title')?.innerHTML,
        content: item.querySelector('description')?.innerHTML,
        date: item.querySelector('pubDate')?.innerHTML,
        href: item.querySelector('link')?.innerHTML
      });
    });
  }
}

interface FeedItem {
  title?: string,
  content?: string,
  date?: string,
  href?: string
}
</script>
