<template>
  <ion-page>
    <ion-tabs>
      <install-banner />
      <scroll-to-top>
        <ion-icon :icon="chevronUp" />
        <ion-label>&nbsp;Scroll to top&nbsp;</ion-label>
        <ion-icon :icon="chevronUp" />
      </scroll-to-top>
      <ion-router-outlet />
      <ion-tab-bar slot="bottom">
        <ion-tab-button
          tab="updates"
          href="/tabs/updates"
        >
          <ion-icon :icon="build" />
          <ion-label>Updates</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="lineups"
          href="/tabs/lineups"
        >
          <ion-icon :icon="trendingUp" />
          <ion-label>Lineups</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="news"
          href="/tabs/news"
        >
          <ion-icon :icon="newspaper" />
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
import { trendingUp, newspaper, build, chevronUp } from "ionicons/icons";

import ScrollToTop from "@/components/util/ScrollToTop.vue";
import InstallBanner from "@/components/util/InstallBanner.vue";

</script>
