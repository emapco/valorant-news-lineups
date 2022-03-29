<template>
  <ion-button
    fill="clear"
    size="small"
    shape="round"
    @click="scrollToTop"
  >
    <slot />
  </ion-button>
</template>

<script setup lang='ts'>
import { IonButton } from "@ionic/vue";

/**
 * Tabs application has a inner scrollable layout so
 * window.scrollTo() doesn't work.
 * Thus this function instead gets all the pages in the inner
 * layout, identifies which page is currently displayed (based on
 * class names). Then the displayed page's scrollTop is set to 0.
 */
function scrollToTop() {
  // innner scrollable layout pages have the 'content-ltr' class
  const inner_pages = document.getElementsByClassName("content-ltr");
  const nrPages = inner_pages.length;
  // for..in results in strings instead of DOM elements
  for (let i = 0; i < nrPages; i++) {
    try {
      const parentClasses = Array.from(inner_pages[i]?.parentNode.classList);
      // displayed page does not contain the class 'ion-page-hidden'
      if (!parentClasses.includes("ion-page-hidden")) {
        inner_pages[i].shadowRoot.children[2].scrollTop = 0;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
</script>