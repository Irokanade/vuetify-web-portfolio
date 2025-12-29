<template>
  <Analytics />
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
    <!-- <FooterComp /> -->
  </v-app>
</template>

<script lang="ts" setup>
import { inject } from '@vercel/analytics';
import NavBar from "./components/NavBar.vue";
// import FooterComp from "./components/FooterComp.vue";

inject();
</script>
