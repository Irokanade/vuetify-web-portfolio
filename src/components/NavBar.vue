<template>
  <v-app-bar app color="surface" flat class="navbar">
    <!-- Brand: avatar + name both link home -->
    <router-link to="/" class="navbar-brand ml-4 mr-8" aria-label="Home">
      <v-avatar size="36">
        <v-img alt="cat" src="@/assets/img/cat.jpg"></v-img>
      </v-avatar>
      <span class="navbar-brand-name">Michael Leong</span>
    </router-link>

    <!-- Navbar Links -->
    <template v-if="mdAndUp">
      <router-link
        v-for="link in links"
        :key="link.title"
        :to="link.to"
        class="navbar-link"
        >{{ link.title }}</router-link
      >
      <a :href="resumeUrl" target="_blank" rel="noopener" class="navbar-link">Resume</a>
    </template>

    <!-- Spacer -->
    <v-spacer></v-spacer>

    <!-- Right-Aligned Icons -->
    <template v-if="mdAndUp">
      <v-btn
        v-for="social in socials"
        :key="social.title"
        :href="social.href"
        target="_blank"
        rel="noopener noreferrer"
        :icon="social.icon"
        :aria-label="social.title"
      ></v-btn>
    </template>
    <v-btn icon aria-label="Toggle theme" @click="toggleTheme">
      <v-icon v-if="theme.global.current.value.dark">mdi-weather-night</v-icon>
      <v-icon v-else>mdi-white-balance-sunny</v-icon>
    </v-btn>

    <!-- Mobile menu: links and socials collapse into a dropdown -->
    <v-menu v-if="!mdAndUp" location="bottom end">
      <template #activator="{ props }">
        <v-btn v-bind="props" icon="mdi-menu" aria-label="Open menu" class="mr-2"></v-btn>
      </template>
      <v-list min-width="200" color="primary">
        <v-list-item v-for="link in links" :key="link.title" :to="link.to" :title="link.title"></v-list-item>
        <v-list-item :href="resumeUrl" target="_blank" rel="noopener" title="Resume"></v-list-item>
        <v-divider class="my-1"></v-divider>
        <v-list-item
          v-for="social in socials"
          :key="social.title"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          :prepend-icon="social.icon"
          :title="social.title"
        ></v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useDisplay, useTheme } from "vuetify";

const theme = useTheme();
const { mdAndUp } = useDisplay();

const resumeUrl = "/Michael-Leong-Jin-Shun-Resume.pdf";

const links = [
  { title: "About", to: "/about" },
  { title: "Projects", to: "/projects" },
];

const socials = [
  { title: "GitHub", icon: "mdi-github", href: "https://github.com/Irokanade" },
  {
    title: "LinkedIn",
    icon: "mdi-linkedin",
    href: "https://www.linkedin.com/in/michael-jin-shun-leong-5764a7308",
  },
];

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<style scoped>
.navbar {
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.25) !important;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: inherit;
  text-decoration: none;
}

.navbar-brand-name {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  transition: color 0.2s ease;
}

.navbar-brand:hover .navbar-brand-name {
  color: rgb(var(--v-theme-primary));
}

.navbar-link {
  color: inherit;
  margin-right: 24px;
  padding: 4px 0;
  font-weight: 500;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;
}

.navbar-link:hover {
  color: rgb(var(--v-theme-primary));
}

.navbar-link.router-link-active {
  color: rgb(var(--v-theme-primary));
  border-bottom-color: rgb(var(--v-theme-accent));
}
</style>
