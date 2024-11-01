<template>
  <v-container fluid class="pa-10">
    <v-row>
      <v-col v-for="(project, index) in projects" :key="index" cols="12" md="4">
        <v-card
          class="project-card"
          :style="{ backgroundImage: `url(${project.image})` }"
          elevation="2"
        >
          <v-card-title class="project-title">{{ project.title }}</v-card-title>
          <v-card-subtitle class="project-subtitle">{{
            project.description
          }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Software Engineering Course",
          description: "Vue3 + ElementPlus + Go + MongoDB",
          image: "path/to/shinmei-image.jpg",
        },
        {
          title: "Multidimensional Dental Image Segmentation and Processing",
          description: "YOLO + SAM",
          image: "path/to/hitachi-image.jpg",
        },
        {
          title: "Portfolio Website",
          description: "Vue3 + Vuetify + TypeScript",
          image: "path/to/frincoin-image.jpg",
        },
        {
          title: "Empty Card to test allignment",
          description: "ReactJS + Kotlin(Ktor) + PostgreSQL + Azure",
          image: "path/to/shinmei-image.jpg",
        },
        {
          title: "Empty Card to test allignment",
          description: "ReactJS + Kotlin(Ktor) + PostgreSQL + Azure",
          image: "path/to/shinmei-image.jpg",
        },
        {
          title: "Empty Card to test allignment",
          description: "ReactJS + Kotlin(Ktor) + PostgreSQL + Azure",
          image: "path/to/shinmei-image.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.project-card {
  /* Existing styles */
  background-size: cover;
  background-position: center;
  color: white;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  padding: 16px;
}

.project-card:hover {
  transform: scale(1.05); /* Slight magnification on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Optional shadow effect */
}

.project-title,
.project-subtitle {
  white-space: normal; /* Allow text to wrap */
  word-wrap: break-word; /* Break words if needed */
}

.project-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
  background-color: rgba(0, 0, 0, 0.6); /* Dark overlay for readability */
  padding: 4px 8px;
  border-radius: 4px;
}

.project-subtitle {
  font-size: 0.9rem;
  background-color: rgba(0, 0, 0, 0.6); /* Dark overlay for readability */
  padding: 4px 8px;
  border-radius: 4px;
}
</style>
