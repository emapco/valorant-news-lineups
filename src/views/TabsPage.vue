<template>
  <ion-page>
    <ion-tabs>
      <scroll-to-top />
      <ion-router-outlet />
      <ion-tab-bar slot="bottom">
        <ion-tab-button
          tab="updates"
          href="/tabs/updates"
        >
          <ion-icon :icon="triangle" />
          <ion-label>Updates</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="lineups"
          href="/tabs/lineups"
        >
          <ion-icon :icon="ellipse" />
          <ion-label>Lineups</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="news"
          href="/tabs/news"
        >
          <ion-icon :icon="square" />
          <ion-label>News</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { ellipse, square, triangle } from "ionicons/icons";
import ScrollToTop from "@/components/util/ScrollToTop.vue";
</script>
