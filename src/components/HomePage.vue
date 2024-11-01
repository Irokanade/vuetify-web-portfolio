<template>
  <v-container fluid class="hero-section">
    <v-row justify="center" align="center" class="text-center">
      <v-col cols="12" md="8">
        <h1 class="display-2 font-weight-bold" style="color: #1a73e8;">Michael Leong Jin Shun</h1>
        <h2 class="headline mb-4" style="color: #1a73e8;">Fresh Grad in Computer Science and Information Engineering</h2>
        <p class="subtitle-1 font-italic mb-8">"Interested in software and AI"</p>
        <v-btn color="primary" outlined class="hello-button">
          Hello 👋
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomePageHero",
};
</script>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  padding: 0 20px;
  box-sizing: border-box;
}

.hello-button {
  background-color: #1a73e8; /* Blue button color */
  border-color: #1a73e8; /* Button outline color */
  color: white;
  padding: 10px 20px;
  font-weight: bold;
  text-transform: none; /* Prevents uppercase */
  border-radius: 20px;
}

.hello-button:hover {
  background-color: #145aab; /* Darker blue on hover */
}
</style>
