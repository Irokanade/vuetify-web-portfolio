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
// Vue integration tracks vue-router navigations as page views, which plain inject() does not
import { Analytics } from "@vercel/analytics/vue";
import { onMounted } from "vue";
import { useTheme } from "vuetify";
import NavBar from "./components/NavBar.vue";
import FooterComp from "./components/FooterComp.vue";

const theme = useTheme();

onMounted(() => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  theme.global.name.value = prefersDark ? "dark" : "light";
});
</script>

<style>
:root {
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
}

.font-mono {
  font-family: var(--font-mono);
}
</style>
