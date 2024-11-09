<template>
  <v-container fluid class="pa-10">
    <v-row>
      <v-col v-for="(project, index) in projects" :key="index" cols="12" md="4">
        <v-card
          class="project-card"
          :style="{ backgroundImage: `url(${project.image})` }"
          elevation="2"
          @click="goToLink(project.link)"
        >
          <v-card-title class="project-title">{{ project.title }}</v-card-title>
          <v-card-subtitle class="project-subtitle">
            {{ project.description }}
          </v-card-subtitle>
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
          image: "",
          link: "",
        },
        {
          title: "Multidimensional Dental Image Segmentation and Processing",
          description: "YOLO + SAM",
          image: "",
          link: "",
        },
        {
          title: "Portfolio Website",
          description: "Vue3 + Vuetify + TypeScript",
          image: "",
          link: "https://github.com/Irokanade/vuetify-web-portfolio",
        },
      ],
    };
  },
  methods: {
    goToLink(link) {
      if (link) {
        window.open(link, "_blank"); // Opens the link in a new tab if it exists
      } else {
        console.warn("No link provided for this project."); // Warns if no link is set
      }
    },
  },
};
</script>

<style scoped>
.project-card {
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
  cursor: pointer; /* Makes it clear the card is clickable */
  width: 100%;
}

.project-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.project-title,
.project-subtitle {
  white-space: normal;
  word-wrap: break-word;
}

.project-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 4px 8px;
  border-radius: 4px;
}

.project-subtitle {
  font-size: 0.9rem;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 4px 8px;
  border-radius: 4px;
}
</style>
