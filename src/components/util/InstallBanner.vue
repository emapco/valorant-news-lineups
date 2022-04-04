<template>
  <card-layout
    v-if="deferredPrompt"
    color="medium"
    class="banner"
  >
    <ion-icon
      class="close-icon"
      :icon="closeCircleOutline"
      @click="dismiss"
    />
    <div class="card-content">
      Install <span class="underline text-base">Val Informer</span> for lineups at your fingertips!<br>
      <ion-button
        color="light"
        shape="round"
        fill="solid"
        @click="install"
      >
        <ion-label>install</ion-label>
        <ion-icon :icon="download" />
      </ion-button>
    </div>
  </card-layout>
</template>

<script setup lang='ts'>
import { onMounted, ref } from "vue";
import { useStorage } from "vue3-storage";
import { IonButton, IonIcon, IonLabel } from "@ionic/vue";
import { closeCircleOutline, download } from "ionicons/icons";
import CardLayout from "../layouts/CardLayout.vue";

const storage = useStorage();
const deferredPrompt = ref();

onMounted(() => {
  const displayBanner =
    storage.getStorageSync("display-install-banner") === undefined
      ? true
      : storage.getStorageSync("display-install-banner");

  // Add eventListeners if local storage is not set so that install banner is displayed
  if (displayBanner) {
    window.addEventListener("beforeinstallprompt", (e: Event) => {
      e.preventDefault();
      deferredPrompt.value = e;
    });
    window.addEventListener("appinstalled", dismiss);
  }
});

function dismiss() {
  deferredPrompt.value = null;
  storage.setStorageSync("display-install-banner", false);
}

function install() {
  deferredPrompt.value.prompt();
}
</script>

<style scoped>
.banner {
  @apply absolute left-0 right-0 mx-auto mt-10 px-4 z-50 
   w-4/5 sm:w-[55%] md:w-[45%] lg:w-[25%]
   shadow-2xl drop-shadow-lg;
}

.close-icon {
  @apply cursor-pointer absolute right-0 top-2 text-2xl;
}

.card-content {
  @apply text-center font-black;
}
</style>