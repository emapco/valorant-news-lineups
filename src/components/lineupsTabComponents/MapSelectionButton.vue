<template>
  <ion-card class="map-card">
    <ion-card-header class="underline pt-0 pb-2">
      <ion-card-title class="text-center">
        {{ titleCase(map.name)  }}
      </ion-card-title>
    </ion-card-header>
    <ion-img
      class="img-container"
      :src="imgSrc"
      :alt="map.name"
    />
  </ion-card>
</template>

<script setup lang="ts">
import { defineProps, ref, nextTick, onMounted } from "vue";
import { IonImg, IonCard, IonCardTitle, IonCardHeader } from "@ionic/vue";
import CardLayout from "../layouts/CardLayout.vue";
import {
  titleCase,
  generateScaledDownImageURL,
  generateCircleImageURL,
} from "@/util";

const props = defineProps(["map"]);
const imgSrc = ref("");

setImage();

async function setImage() {
  let windowWidth = window.innerWidth;
  let imgWidth = 420;
  switch (true) {
    case windowWidth > 1200:
      imgWidth = 850;
      break;
    case windowWidth > 900:
      imgWidth = 480;
  }
  imgSrc.value = await generateCircleImageURL(imgWidth, props.map.src);
}
</script>

<style scoped>
.map-card {
  @apply w-[40%] sm:w-[30%] md:w-[26%] lg:w-[20%]
  hover:w-[41%] sm:hover:w-[31%] md:hover:w-[27%] lg:hover:w-[21%] lg:grow-[1] shadow-none
  cursor-pointer duration-200 ease-out 
  bg-contain bg-no-repeat bg-opacity-0;
  background-color: rgba(0, 0, 0, 0);
}
</style>