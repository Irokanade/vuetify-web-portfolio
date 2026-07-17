<template>
  <Analytics />
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
    <FooterComp />
  </v-app>
</template>

<script lang="ts" setup>
import { inject } from '@vercel/analytics';
import { onMounted } from "vue";
import { useTheme } from "vuetify";
import NavBar from "./components/NavBar.vue";
import FooterComp from "./components/FooterComp.vue";

inject();

const theme = useTheme();

onMounted(() => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  theme.global.name.value = prefersDark ? "dark" : "light";
});
</script>
