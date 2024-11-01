<template>
  <v-navigation-drawer v-model="sidebar" app class="custom-drawer">
    <v-list density="compact">
      <v-list-item v-for="(item, i) in menuItems" :key="i" :value="item">
        <v-icon :icon="item.icon" class="icon-color"></v-icon>
        <v-list-item-title class="text-color" v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-toolbar app class="custom-toolbar">
    <span class="hidden-sm-and-up">
      <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
    </span>
    <v-toolbar-title>
      <router-link to="/" tag="span" class="title">
        {{ appTitle }}
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path" class="text-color">
        <v-icon left class="icon-color">{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const appTitle = "MichaelLeongJS";
const sidebar = ref(false);

const menuItems = ref([
  { title: "Home", path: "/", icon: "mdi-home" },
  { title: "About", path: "/about", icon: "mdi-information" },
  { title: "Resume", path: "/resume", icon: "mdi-file-outline" },
  { title: "Projects", path: "/projects", icon: "mdi-file-code" },
]);
</script>

<style scoped>
/* Toolbar and drawer background color */
.custom-toolbar {
  background-color: #1a73e8; /* Replace with your preferred blue */
  color: white;
}

.custom-drawer {
  background-color: #1a73e8;
  color: white;
}

/* Text and icon colors */
.text-color {
  color: white; /* Text color for menu items */
}

.icon-color {
  color: white; /* Icon color for menu items */
}

/* Router-link title styling */
.title {
  text-decoration: none;
  color: white;
}
</style>
