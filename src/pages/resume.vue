<template>
  <v-container fluid class="resume-container">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <!-- First page of the resume -->
        <v-img
          src="@/assets/img/MichaelLeongJinShunResume_en_page_1.png"
          alt="Resume Page 1"
          class="resume-image"
          contain
        ></v-img>

        <!-- Second page of the resume -->
        <v-img
          src="@/assets/img/MichaelLeongJinShunResume_en_page_2.png"
          alt="Resume Page 2"
          class="resume-image"
          contain
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped>
.resume-container {
  padding: 0;
  height: 100vh;
  overflow-y: auto; /* Enables scrolling for the container */
}

.resume-image {
  width: 100%;
  margin-bottom: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Optional: adds shadow for better visual separation */
}
</style>
