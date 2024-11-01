<template>
  <v-container class="text-primary" fluid>
    <v-row class="mb-8">
      <v-col cols="12">
        <h2 class="font-mono mb-2 text-h5">&lt;NAME&gt;</h2>
        <div class="text-h6">Michael Leong Jin Shun</div>
      </v-col>
    </v-row>

    <v-row class="mb-8">
      <v-col cols="12">
        <h2 class="font-mono mb-2 text-h5">&lt;BORN&gt;</h2>
        <div class="text-h6">28/06/2002</div>
      </v-col>
    </v-row>

    <v-row class="mb-8">
      <v-col cols="12">
        <h2 class="font-mono mb-2 text-h5">&lt;NATIONALITY&gt;</h2>
        <div class="text-h6">Malayisa 🇲🇾</div>
      </v-col>
    </v-row>

    <v-row class="mb-8">
      <v-col cols="12">
        <h2 class="font-mono mb-2 text-h5">&lt;EDUCATION&gt;</h2>
        <div class="text-h6">National Taiwan Normal University</div>
      </v-col>
    </v-row>

    <v-row class="mb-8">
      <v-col cols="12">
        <h2 class="font-mono mb-4 text-h5">&lt;SKILLS&gt;</h2>
      </v-col>
      <v-col
        v-for="(skill, index) in skills"
        :key="index"
        cols="6"
        md="3"
        class="d-flex align-center justify-center mb-3"
      >
        <v-icon :icon="skill.icon" class="mr-2"></v-icon>
        <span class="font-weight-medium text-h6">{{ skill.name }}</span>
      </v-col>
    </v-row>

    <v-row class="mb-8">
      <v-col cols="12">
        <h2 class="font-mono mb-4 text-h5">&lt;EXPERIENCES&gt;</h2>
      </v-col>
      <v-col
        v-for="(experience, index) in experiences"
        :key="index"
        cols="12"
        md="6"
        class="text-left mb-4"
      >
        <div class="font-weight-bold text-h6">{{ experience.date }}</div>
        <div class="text-subtitle-1">{{ experience.role }}</div>
        <div class="text-body-2">{{ experience.company }}</div>
      </v-col>
    </v-row>

    <v-row class="mb-8">
      <v-col cols="12">
        <h2 class="font-mono mb-4 text-h5">&lt;LANGUAGES&gt;</h2>
      </v-col>
      <v-col
        v-for="(language, index) in languages"
        :key="index"
        cols="6"
        md="4"
        class="text-left mb-3"
      >
        <div class="font-weight-medium text-h6">{{ language }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: "VueJS", icon: "mdi-vuejs" },
        { name: "TypeScript", icon: "mdi-language-typescript" },
        { name: "Java", icon: "mdi-language-java" },
        { name: "Spring", icon: "mdi-spring" },
        { name: "Python", icon: "mdi-language-python" },
        { name: "Flask", icon: "mdi-language-python" },
        { name: "JavaScript", icon: "mdi-language-javascript" },
        { name: "AWS CDK", icon: "mdi-aws" },
        { name: "Postman", icon: "mdi-postman" },
        { name: "GitHub", icon: "mdi-github" },
        { name: "Docker", icon: "mdi-docker" },
        { name: "NodeJS", icon: "mdi-nodejs" },
        { name: "MongoDB", icon: "mdi-database" },
      ],
      experiences: [
        {
          date: "2023.07.01 - 2023.08.31",
          role: "DevOps Intern",
          company: "Wisdom Garden Taiwan",
        },
        {
          date: "2023.09.01 - 2024.08.31",
          role: "Software Engineer",
          company: "Test",
        },
        {
          date: "2021.11.01 - 2022.05.30",
          role: "Frontend Developer",
          company: "Another Company to test allignment",
        },
      ],
      languages: ["English", "Chinese", "Malay"],
    };
  },
};
</script>

<style scoped>
.font-mono {
  font-family: monospace;
}
.text-primary {
  color: #9c27b0; /* Adjust color to match the example */
}
</style>
