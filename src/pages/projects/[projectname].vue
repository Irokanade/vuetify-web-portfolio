<template>
  <v-container class="project-page py-12">
    <template v-if="project">
      <v-btn
        to="/projects"
        variant="text"
        color="primary"
        prepend-icon="mdi-arrow-left"
        class="mb-6 px-0"
        >All projects</v-btn
      >
      <h1 class="project-page-title mb-3">{{ project.title }}</h1>
      <p class="text-subtitle-1 text-muted mb-4">{{ project.description }}</p>

      <div v-if="project.metric" class="project-page-metric font-mono text-accent mb-4">
        {{ project.metric }}
      </div>

      <div v-if="project.tags" class="d-flex flex-wrap ga-2 mb-6">
        <v-chip
          v-for="tag in project.tags"
          :key="tag"
          size="small"
          variant="tonal"
          color="primary"
          label
          class="font-mono"
          >{{ tag }}</v-chip
        >
      </div>

      <v-img
        v-if="project.image"
        :src="project.image"
        class="project-page-image mb-6"
      ></v-img>

      <ul v-if="project.highlights" class="text-body-1 mb-8 highlight-list">
        <li v-for="(highlight, index) in project.highlights" :key="index" class="mb-2">
          {{ highlight }}
        </li>
      </ul>
      <v-btn
        v-if="project.link"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        variant="flat"
        :prepend-icon="isGithubLink ? 'mdi-github' : 'mdi-open-in-new'"
        >{{ isGithubLink ? "View on GitHub" : "Open project" }}</v-btn
      >
    </template>
    <div v-else class="text-center py-12">
      <h1 class="project-page-title mb-2">404</h1>
      <p class="text-subtitle-1 text-muted mb-6">Project not found</p>
      <v-btn to="/projects" color="primary" variant="flat">Back to projects</v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { projects } from "@/data/projects.js";

const route = useRoute();
// computed (not onMounted) so the 404 branch never flashes before the lookup runs
const project = computed(() => projects.find((p) => p.id === route.params.projectname));

const isGithubLink = computed(() => project.value?.link?.startsWith("https://github.com/"));
</script>

<style scoped>
.project-page {
  max-width: 760px;
}

.project-page-title {
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 700;
  line-height: 1.2;
  color: rgb(var(--v-theme-primary));
}

.project-page-metric {
  font-size: 1rem;
  font-weight: 700;
}

.project-page-image {
  border-radius: 8px;
  border: 1px solid rgba(var(--v-theme-primary), 0.15);
}

.highlight-list {
  padding-left: 1.2em;
}

.highlight-list li {
  line-height: 1.7;
}

.highlight-list li::marker {
  color: rgb(var(--v-theme-accent));
}
</style>
