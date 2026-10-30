<!-- Footer.vue -->
<template>
  <v-footer color="surface" class="footer text-center d-flex flex-column py-6">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon.name"
        :icon="icon.icon"
        :href="icon.url"
        target="_blank"
        :aria-label="icon.name"
        rel="noopener noreferrer"
        class="mx-2"
        variant="text"
      ></v-btn>
    </div>

    <v-divider class="footer-divider"></v-divider>

    <div class="text-body-2 text-muted">© {{ new Date().getFullYear() }} Michael Leong Jin Shun</div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        name: "github",
        icon: "mdi-github",
        url: "https://github.com/Irokanade",
      },
      {
        name: "linkedin",
        icon: "mdi-linkedin",
        url: "https://www.linkedin.com/in/michael-jin-shun-leong-5764a7308",
      },
    ],
  }),
};
</script>

<style scoped>
.footer {
  flex: 0 0 auto;
  border-top: 1px solid rgba(var(--v-theme-primary), 0.25);
}

.footer-divider {
  /* footer centers its children, so an empty divider needs an explicit width */
  width: 100%;
  max-width: 240px;
  margin: 8px 0;
}
</style>
