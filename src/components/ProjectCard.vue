<template>
  <v-card class="project-card" color="surface" variant="flat">
    <v-img v-if="image" :src="image" height="160" cover class="project-image"></v-img>

    <div class="project-body">
      <h3 class="project-title">
        <router-link :to="`/projects/${project}`" class="project-title-link">{{ title }}</router-link>
      </h3>
      <p class="project-description text-muted">{{ description }}</p>
      <div v-if="metric" class="project-metric text-accent">{{ metric }}</div>

      <div class="project-footer">
        <div v-if="tags.length" class="project-tags">
          <v-chip
            v-for="tag in tags"
            :key="tag"
            size="small"
            variant="tonal"
            color="primary"
            label
            class="project-tag"
            >{{ tag }}</v-chip
          >
        </div>
        <v-btn
          v-if="link"
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          :icon="isGithubLink ? 'mdi-github' : 'mdi-open-in-new'"
          :aria-label="isGithubLink ? 'GitHub repository' : 'Open project'"
          variant="text"
          size="small"
          class="project-link"
        ></v-btn>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { computed } from "vue";

// Define the props for the ProjectCard component
const props = defineProps({
  image: {
    type: String,
    default: null,
  },
  project: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: null,
  },
  metric: {
    type: String,
    default: null,
  },
  tags: {
    type: Array,
    default: () => [],
  },
});

const isGithubLink = computed(() => props.link?.startsWith("https://github.com/"));
</script>

<style scoped>
.project-card {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(var(--v-theme-primary), 0.15);
  border-radius: 8px;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.project-card:hover,
.project-card:focus-within {
  transform: translateY(-4px);
  border-color: rgba(var(--v-theme-accent), 0.6);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

.project-title-link {
  color: inherit;
  text-decoration: none;
}

/* stretched link: the title link covers the whole card, so the card stays
   clickable without nesting the GitHub link inside another anchor */
.project-title-link::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
}

.project-title-link:focus-visible {
  outline: none;
}

.project-link {
  position: relative;
  z-index: 1;
}

.project-image {
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.15);
}

.project-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  text-align: left;
}

.project-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.project-description {
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 12px;
}

.project-metric {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 12px;
}

/* pushes tags to the bottom so cards in a row line up */
.project-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;
  margin-top: auto;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.project-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
}
</style>
