<template>
  <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column" app>
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon.name"
        :icon="icon.icon"
        :href="icon.url"
        target="_blank"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} Michael Leong Jin Shun</div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { name: "github", icon: "mdi-github", url: "https://github.com" },
      { name: "twitter", icon: "mdi-twitter", url: "https://twitter.com" },
      { name: "linkedin", icon: "mdi-linkedin", url: "https://linkedin.com" },
      {
        name: "instagram",
        icon: "mdi-instagram",
        url: "https://instagram.com",
      },
    ],
  }),
};
</script>
