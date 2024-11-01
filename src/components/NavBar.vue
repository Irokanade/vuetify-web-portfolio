<template>
  <v-navigation-drawer v-model="sidebar" app>
    <v-list density="compact">
      <v-list-item v-for="(item, i) in menuItems" :key="i" :value="item">
        <v-icon :icon="item.icon"></v-icon>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-toolbar app>
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
      <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
        <v-icon left dark>{{ item.icon }}</v-icon>
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

<style>
.title {
  text-decoration: none;
  color: inherit;
}
</style>
