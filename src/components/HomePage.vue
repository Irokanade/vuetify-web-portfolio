<template>
  <v-container class="home py-12">
    <!-- Profile Section -->
    <v-row justify="center" class="hero text-center mb-12">
      <v-col cols="12" md="8" lg="7">
        <v-avatar size="112" class="hero-avatar mb-6">
          <v-img src="@/assets/img/cat.jpg" alt="Profile Picture"></v-img>
        </v-avatar>
        <h1 class="hero-name mb-3">Michael Leong Jin Shun</h1>
        <p class="hero-tagline mb-4">
          Backend engineer building
          <span class="text-accent">low-latency C++</span> systems
        </p>
        <p class="text-subtitle-1 text-muted mb-1">
          Java at Wisdom Garden by day, C++ enjoyer by night.
          Interested in systems programming and low-latency / HFT roles.
        </p>
        <p class="text-body-2 text-muted mb-8">
          Currently obsessed with lock-free programming. Recommends
          <em>C++ Concurrency in Action</em>.
        </p>
        <div class="d-flex flex-wrap justify-center ga-3">
          <v-btn
            color="primary"
            variant="flat"
            size="large"
            :href="resumeUrl"
            target="_blank"
            rel="noopener"
            prepend-icon="mdi-file-document-outline"
            >Resume</v-btn
          >
          <v-btn
            href="https://github.com/Irokanade"
            target="_blank"
            rel="noopener noreferrer"
            prepend-icon="mdi-github"
            variant="outlined"
            size="large"
            >GitHub</v-btn
          >
          <v-btn
            href="https://www.linkedin.com/in/michael-jin-shun-leong-5764a7308"
            target="_blank"
            rel="noopener noreferrer"
            prepend-icon="mdi-linkedin"
            variant="outlined"
            size="large"
            >LinkedIn</v-btn
          >
          <v-btn
            href="mailto:michaeljs.leong@gmail.com"
            prepend-icon="mdi-email-outline"
            variant="outlined"
            size="large"
            >Email</v-btn
          >
        </div>
      </v-col>
    </v-row>

    <!-- Writing Section -->
        <!-- <v-row class="mb-10">
          <v-col cols="12" class="text-center">
            <h2 class="font-weight-bold mb-3 text-primary">Writing</h2>
          </v-col>
          <v-col cols="12" md="8" class="mx-auto">
            <v-list two-line>
              <v-list-item>
                <v-list-item-title>Test</v-list-item-title>
                <v-list-item-subtitle>Sep 22, 2022</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Test 2</v-list-item-title>
                <v-list-item-subtitle>Jun 19, 2022</v-list-item-subtitle>
              </v-list-item>
            </v-list>
            <v-btn outlined class="mt-4" color="primary">Read all</v-btn>
          </v-col>
        </v-row> -->

        <!-- Projects Section -->
    <div class="section-header mb-6">
      <h2 class="section-title">Featured projects</h2>
      <v-btn
        to="/projects"
        variant="text"
        color="primary"
        append-icon="mdi-arrow-right"
        >View all</v-btn
      >
    </div>
    <v-row class="mb-12" align="stretch">
      <v-col
        v-for="project in featuredProjects"
        :key="project.id"
        cols="12"
        md="4"
      >
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

    <!-- Experience Section -->
    <div class="section-header mb-6">
      <h2 class="section-title">Experience</h2>
      <v-btn
        to="/about"
        variant="text"
        color="primary"
        append-icon="mdi-arrow-right"
        >Full details</v-btn
      >
    </div>
    <div class="mb-12">
      <ExperienceTimeline :experiences="experiences" compact />
      <div class="text-body-2 mt-8">
        <v-icon icon="mdi-school-outline" size="small" class="mr-2 text-muted"></v-icon>
        {{ education.degree }}
        <span class="text-muted">· {{ education.school }}</span>
      </div>
    </div>

    <!-- Connect Section -->
    <v-row justify="center" class="text-center">
      <v-col cols="12" md="8">
        <h2 class="section-title mb-2">Let's connect</h2>
        <p class="text-body-1 text-muted mb-3">
          Open to chatting about systems programming and low-latency roles.
        </p>
        <a class="email-link font-mono" href="mailto:michaeljs.leong@gmail.com"
          >michaeljs.leong@gmail.com</a
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { projects } from "@/data/projects.js";
import { experiences, education } from "@/data/experience.js";
import ProjectCard from "@/components/ProjectCard.vue";
import ExperienceTimeline from "@/components/ExperienceTimeline.vue";

export default {
  components: { ProjectCard, ExperienceTimeline },
  data() {
    return {
      experiences,
      education,
      featuredProjects: projects.slice(0, 3),
      resumeUrl: "/Michael-Leong-Jin-Shun-Resume.pdf",
    };
  },
};
</script>

<style scoped>
.home {
  max-width: 1200px;
}

.hero-avatar {
  border: 3px solid rgb(var(--v-theme-primary));
  box-shadow: 0 0 0 6px rgba(var(--v-theme-primary), 0.15);
}

.hero-name {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.hero-tagline {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  font-weight: 500;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.2);
  padding-bottom: 8px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
}

.email-link {
  color: rgb(var(--v-theme-primary));
  font-size: 1.05rem;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.email-link:hover {
  border-bottom-color: rgb(var(--v-theme-accent));
}
</style>
