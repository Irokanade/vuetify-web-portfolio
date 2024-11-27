<template>
  <v-container fluid class="pa-10">
    <v-row>
      <v-col v-for="(project, index) in projects" :key="index" cols="12" md="4">
        <ProjectCard
          :image="project.image"
          :project="project.project"
          :title="project.title"
          :description="project.description"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

import softEngProject from "@/assets/img/soft-eng-project.png";
import dentalImageProject from "@/assets/img/dental-image-project.png"

export default {
  data() {
    return {
      projects: [
        {
          project: "software-engineering-course",
          title: "Software Engineering Course",
          description: "Vue3 + ElementPlus + Go + MongoDB",
          image: softEngProject,
        },
        {
          project: "multidimensional-dental-image-segmentation-and-processing",
          title: "Multidimensional Dental Image Segmentation and Processing",
          description: "YOLO + SAM",
          image: dentalImageProject,
        },
        {
          project: "portfolio-website",
          title: "Portfolio Website",
          description: "Vue3 + Vuetify + TypeScript",
          image: "",
        },
      ],
    };
  },
};
</script>
