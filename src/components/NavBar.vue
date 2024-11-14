<template>
  <v-app-bar app color="#1a73e8">
    <router-link to="/">
      <v-avatar class="mr-4" to="/">
        <v-img alt="cat" src="@/assets/img/cat.jpg"></v-img>
      </v-avatar>
    </router-link>

    <!-- Navbar Title (if needed) -->
    <!-- <v-toolbar-title class="white--text">{{ appTitle }}</v-toolbar-title> -->

    <!-- Navbar Links -->
    <router-link to="/about" class="navbar-link">About</router-link>
    <router-link to="/projects" class="navbar-link">Projects</router-link>
    <router-link to="/resume" class="navbar-link">Resume</router-link>
    <router-link to="/blog" class="navbar-link">Blog</router-link>
    <!-- <v-list class="navbar-list">
      <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path" link class="navbar-item">
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list> -->

    <!-- Spacer -->
    <v-spacer></v-spacer>

    <!-- Right-Aligned Icons -->
    <v-btn href="https://github.com/Irokanade" target="_blank"
      ><v-icon>mdi-github</v-icon></v-btn
    >
    <v-btn
      href="https://www.linkedin.com/in/michael-jin-shun-leong-5764a7308"
      target="_blank"
      ><v-icon>mdi-linkedin</v-icon></v-btn
    >
    <v-btn @click="toggleTheme">
      <v-icon v-if="theme.global.current.value.dark">mdi-weather-night</v-icon>
      <v-icon v-else>mdi-white-balance-sunny</v-icon>
    </v-btn>
    <!-- <v-btn><v-icon>mdi-clock-outline</v-icon></v-btn> -->
  </v-app-bar>
</template>

<script lang="ts" setup>
// import { ref } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<style scoped>
/* Navbar color */
.v-app-bar {
  background-color: #1a73e8; /* Blue background */
}

/* Text links styling */
.navbar-link {
  color: white;
  margin-right: 20px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
}

.navbar-link:hover {
  text-decoration: underline;
}

/* Right-aligned icon color */
.icon-color {
  color: white;
}
</style>
