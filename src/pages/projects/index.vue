<template>
  <v-container class="projects-page py-12">
    <h1 class="page-title mb-2">Projects</h1>
    <p class="text-body-1 text-muted mb-8">
      Mostly C++ systems work: order books, lock-free queues, cache simulation.
    </p>
    <v-row align="stretch">
      <v-col v-for="project in projects" :key="project.id" cols="12" sm="6" md="4">
        <ProjectCard
          :image="project.image"
          :project="project.id"
          :title="project.title"
          :description="project.description"
          :link="project.link"
          :metric="project.metric"
          :tags="project.tags"
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

<style scoped>
.projects-page {
  max-width: 1200px;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
}
</style>
