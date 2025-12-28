<template>
  <v-row align="center" justify="center" class="text-left mb-10" v-if="project">
    <v-col cols="12" md="6">
      <v-btn to="/projects" class="mt-3 mb-3" color="blue">back</v-btn>
      <h1 class="display-1 mb-3">{{ project.title }}</h1>
      
      <v-img
        v-if="project.image"
        :src="project.image"
        class="mb-4"
      ></v-img>
      
      <p class="subtitle-1 mb-4">{{ project.description }}</p>
      <v-btn v-if="project.link" :href="project.link" target="_blank">GitHub</v-btn>
    </v-col>
  </v-row>
  <div v-else>
    <p class="subtitle-1">404 Page not found</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { projects } from "@/data/projects.js";

const route = useRoute();
const project = ref(null);

onMounted(() => {
  const projectName = route.params.projectname;
  project.value = projects.find((p) => p.id === projectName);
});

</script>
