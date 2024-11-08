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

<style scoped>
/* Apply padding globally for the entire app */
.v-application {
  padding: 20px; /* Adjust as needed */
}

/* Optionally add padding to the main content */
.app-main {
  padding-top: 20px; /* Adjust the padding as necessary */
  padding-bottom: 20px;
}

/* Optional: Add padding for NavBar and Footer if needed */
.NavBar {
  padding: 10px; /* Adjust as needed */
}

.FooterComp {
  padding: 10px; /* Adjust as needed */
}
</style>