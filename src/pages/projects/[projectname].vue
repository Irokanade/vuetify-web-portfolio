<template>
  <v-row
    align="center"
    justify="center"
    class="text-left mb-10"
    v-if="project"
  >
      <v-col cols="12" md="6">
        <v-btn to="/projects" class="mt-3 mb-3" color="blue">back</v-btn>
        <h1 class="display-1 mb-3">{{ project.title }}</h1>
        <v-img :src="project.img || null" :class="{'mb-4': project.img}"></v-img>
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

import softEngProject from "@/assets/img/soft-eng-project.png";
import dentalImageProject from "@/assets/img/dental-image-project.png"

const route = useRoute();
const project = ref(null);

const projects = [
  {
    project: "software-engineering-course",
    title: "Software Engineering Course",
    img: softEngProject,
    description: `Worked in a team to develop the front-end part of a web application. The goal is for students to apply for NTNU's Computer Science and Information Engineering courses online. 
                  The front-end technologies employed are Vue.JS, Element Plus, and JavaScript. The backend services are developed using GO language and MongoDB NoSQL for persistent storage.
                  The project is completed within 16 weeks, and the final working project is then presented to the university admins.`,

  },
  {
    project: "multidimensional-dental-image-segmentation-and-processing",
    title: "Multidimensional Dental Image Segmentation and Processing",
    img: dentalImageProject,
    description: `It is a one-year project about teeth detection and segmentation in teeth faces images and preprocessing. 
                  My team collaborated with the previous year's team and National Taiwan University (NTU) dentists to build this system. 
                  Our system uses YOLO and SAM image segmentation models to label the segmented teeth in such images. 
                  Our system also then preprocesses such images to the correct orientation and will detect which faces of teeth the image is.`,
  },
  {
    project: "portfolio-website",
    title: "Portfolio Website",
    description: `This is the website hope you like it :)
                  You can also check it out on my github`,
    link: "https://github.com/Irokanade/vuetify-web-portfolio",
  },
];

// mimic api call function for now xD
// will change to async func when i have backend
function fetchProjectDetails(projectname) {
  const fetchProject = projects.find(
    (project) => project.project === projectname,
  );

  return fetchProject;
}

// Use onMounted to set the project based on the route params
onMounted(() => {
  const projectName = route.params.projectname;
  project.value = fetchProjectDetails(projectName);
});
</script>
