<!-- Footer.vue -->
<template>
  <v-footer class="custom-footer text-center d-flex flex-column" app>
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
      { name: "github", icon: "mdi-github", url: "https://github.com/Irokanade" },
      { name: "linkedin", icon: "mdi-linkedin", url: "https://www.linkedin.com/in/michael-jin-shun-leong-5764a7308" },
    ],
  }),
};
</script>

<style scoped>
.custom-footer {
  /* background-color: #007BFF; */
  color: white; /* Text color for contrast */
}
</style>
