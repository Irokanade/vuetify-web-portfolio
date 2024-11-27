<template>
    <v-card
      class="project-card"
      :style="{ backgroundImage: `url(${image})` }"
      elevation="2"
      :to="`/projects/${project}`"
    >
      <v-card-title class="project-title">{{ title }}</v-card-title>
      <v-card-subtitle class="project-subtitle">{{ description }}</v-card-subtitle>
    </v-card>
  </template>
  
  <script setup> 
  // Define the props for the ProjectCard component
  const props = defineProps({
    image: {
      type: String,
      required: true
    },
    project: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .project-card {
    background-size: cover;
    background-position: center;
    color: white;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
    padding: 16px;
    cursor: pointer;
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