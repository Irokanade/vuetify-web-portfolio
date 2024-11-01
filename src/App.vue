<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
    <FooterComp />
  </v-app>
</template>

<script lang="ts" setup>
import NavBar from "./components/NavBar.vue";
import FooterComp from "./components/FooterComp.vue";
</script>
