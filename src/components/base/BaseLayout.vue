<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start" v-if="pageDefaultBackLink">
          <ion-back-button :default-href="pageDefaultBackLink" />
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">
            {{ pageTitle }}
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script setup lang='ts'>
import { defineProps } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
} from "@ionic/vue";

const props = defineProps(["pageTitle", "pageDefaultBackLink"]);
</script>

<style>
</style>