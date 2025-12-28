<template>
  <v-container fluid class="pa-10">
    <v-row>
      <v-col v-for="project in projects" :key="project.id" cols="12" md="4">
        <ProjectCard
          :image="project.image"
          :project="project.id"
          :title="project.title"
          :description="project.description"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { projects } from "@/data/projects.js";
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  components: { ProjectCard },
  data() {
    return { projects };
  },
};
</script>

