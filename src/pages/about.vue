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
        <div v-if="experience.description && experience.description.length > 0" class="text-body-2 text-medium-emphasis pl-4 border-left">
        <ul class="experience-list">
          <li v-for="(bullet, bIndex) in experience.description" 
              :key="bIndex" 
              class="mb-2">
            {{ bullet }}
          </li>
        </ul>
      </div>
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
        { name: "Java", icon: "mdi-language-java" },
        { name: "Spring", icon: "mdi-leaf" },
        { name: "Spring Boot", icon: "mdi-leaf" },
        { name: "VueJS", icon: "mdi-vuejs" },
        { name: "JavaScript", icon: "mdi-language-javascript" },
        { name: "Python", icon: "mdi-language-python" },
        { name: "", icon: "mdi-language-c" },
        { name: "", icon: "mdi-language-cpp" },
        { name: "Git", icon: "mdi-git" },
        { name: "Docker", icon: "mdi-docker" },
        { name: "Linux", icon: "mdi-linux" },
      ],
      experiences: [
        {
          date: "2025.01.01 - Present",
          role: "Full Stack Developer",
          company: "Wisdom Garden Taiwan",
          description: [
            "Built and maintained backend services using the Java Ninja Framework, providing RESTful APIs for a Vue 2 frontend",
            "Designed and developed event-driven microservices with Spring Boot and RabbitMQ for asynchronous communication",
            "Implemented a custom, internal RabbitMQ Channel Pool to optimize channel reuse and throughput under framework constraints",
            "Migrated selected asynchronous workflows to Java Virtual Threads (Project Loom), reducing thread management complexity and improving scalability"
          ]
        },
        {
          date: "2023.07.01 - 2023.08.31",
          role: "DevOps Intern",
          company: "Wisdom Garden Taiwan",
          description: [],
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

.experience-list {
  list-style-type: "– "; /* Clean, modern bullet style */
  padding-left: 0;
}

.experience-list li {
  line-height: 1.6;
}

.border-left {
  border-left: 2px solid grey;
}

.opacity-70 {
  opacity: 0.7;
}
</style>
