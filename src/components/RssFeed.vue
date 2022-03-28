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
    :subtitle="`${item.author} | ${item.pubDate}`"
  >
    {{ item.description }}
    <br><br>
    <a
      :href="item.link"
      target="_blank"
    >
      <ion-button>Read more</ion-button>
    </a>
  </card-layout>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from "vue";
import {
  IonButton,
  IonSpinner,
} from "@ionic/vue";
import CardLayout from "@/components/base/CardLayout.vue";
import $ from "jquery";

const props = defineProps(["link"]);
const link = ref(props.link);
const items = ref([]);

const NUM_RE = /^[0-9]*$/; // to determine if date is in UTC milliseconds
const get_response_cache: any = {}; // for storing get response cache

check_get_cache();

/**
 * watch function for detecting changes to the link prop.
 * It then updates the link's ref value and checks if the
 * link has been cached
 */
watch(
  () => props.link,
  async (newVal) => {
    items.value = [];
    link.value = newVal;
    check_get_cache();
  }
);

/**
 * Checks if the particular link has been added to caching variable
 * via key:value (url:get response) pairs.
 *
 * If url is a key then it sets the items.value to the stored get response.
 * Otherwise make a get request and cache it as a key:value pair
 */
function check_get_cache() {
  if (Object.keys(get_response_cache).includes(link.value)) {
    items.value = get_response_cache[link.value];
  } else {
    getRSSFeed(link.value);
    get_response_cache[link.value] = items.value;
  }
}

/**
 * Uses jquery to get xml (RSS feed) file and
 * then selects each item in the feed
 */
function getRSSFeed(url: string) {
  $.get(url, (data) => {
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

      // feed might have date in UTC milliseconds thus
      // if regex matches then convert
      if (NUM_RE.test(item.pubDate)) {
        item.pubDate = new Date(Number(item.pubDate)).toLocaleDateString();
      }
      items.value.push(item);
    });
  });
}
</script>
