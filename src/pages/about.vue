<template>
  <v-container class="about-page py-12">
    <section class="mb-12">
      <h1 class="page-title mb-4">About me</h1>
      <p class="text-body-1 about-intro">
        My name is Michael Leong Jin Shun. I am a Java backend engineer by day and a C++ enjoyer by night. I'm reading
        <em>C++ Concurrency in Action</em> and am currently obsessed with multithreading, lock-free programming, and
        low-latency systems.
      </p>
    </section>

    <section class="mb-12">
      <h2 class="section-title mb-6">Experience</h2>
      <ExperienceTimeline :experiences="experiences" />
    </section>

    <section class="mb-12">
      <h2 class="section-title mb-4">Education</h2>
      <div class="text-subtitle-1 font-weight-medium">{{ education.degree }}</div>
      <div class="text-body-2 text-muted">{{ education.school }}</div>
    </section>

    <section class="mb-12">
      <h2 class="section-title mb-4">Skills</h2>
      <div class="d-flex flex-wrap ga-2">
        <v-chip
          v-for="(skill, index) in skills"
          :key="index"
          :prepend-icon="skill.icon"
          variant="tonal"
          color="primary"
          label
          >{{ skill.name }}</v-chip
        >
      </div>
    </section>

    <section>
      <h2 class="section-title mb-4">Learning resources</h2>
      <v-row>
        <v-col v-for="(learningResource, index) in learningResources" :key="index" cols="12" sm="6">
          <v-card variant="flat" color="surface" class="resource-card pa-4 h-100">
            <v-icon icon="mdi-book-open-page-variant-outline" color="accent" class="mb-2"></v-icon>
            <div class="text-body-1">{{ learningResource }}</div>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
import { experiences, education } from "@/data/experience.js";
import ExperienceTimeline from "@/components/ExperienceTimeline.vue";

export default {
  components: { ExperienceTimeline },
  data() {
    return {
      skills: [
        { name: "C++", icon: "mdi-language-cpp" },
        { name: "C", icon: "mdi-language-c" },
        { name: "Java", icon: "mdi-language-java" },
        { name: "Spring", icon: "mdi-leaf" },
        { name: "VueJS", icon: "mdi-vuejs" },
        { name: "JavaScript", icon: "mdi-language-javascript" },
        { name: "Python", icon: "mdi-language-python" },
        { name: "Git", icon: "mdi-git" },
        { name: "Docker", icon: "mdi-docker" },
        { name: "Linux", icon: "mdi-linux" },
      ],
      experiences,
      education,
      learningResources: [
        "C++ Concurrency in Action - Anthony Williams (2019)",
        "What Every Programmer Should Know About Memory - Ulrich Drepper (2007)",
        "Memory Barriers: a Hardware View for Software Hackers - Paul E. McKenney (2010)",
        "Rust Atomics and Locks - Mara Bos (2023)",
      ],
    };
  },
};
</script>

<style scoped>
.about-page {
  max-width: 900px;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
}

.section-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.2);
  padding-bottom: 8px;
}

.about-intro {
  line-height: 1.7;
}

.resource-card {
  border: 1px solid rgba(var(--v-theme-primary), 0.15);
  border-radius: 8px;
}
</style>
