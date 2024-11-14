<template>
  <v-app>
    <!-- Main Content -->
    <v-main>
      <v-container fluid class="py-10">
        <!-- Profile Section -->
        <v-row align="center" justify="center" class="profile-section text-center mb-10">
          <v-col cols="12" md="6">
            <v-avatar class="mr-4" size="80">
              <v-img src="@/assets/img/cat.jpg" alt="Profile Picture"></v-img>
            </v-avatar>
            <h1 class="display-1 mb-3">Michael Leong Jin Shun</h1>
            <p class="subtitle-1 mb-4">
              Graduated with a degree in Computer Science from NTNU. Keen interest in Software Development and Artificial Intelligence.
            </p>
            <v-btn color="blue" to="/about">About me</v-btn>
          </v-col>
        </v-row>

        <!-- Writing Section -->
        <v-row class="mb-10">
          <v-col cols="12" class="text-center">
            <h2 class="font-weight-bold mb-3">Writing</h2>
          </v-col>
          <v-col cols="12" md="8" class="mx-auto">
            <v-list two-line>
              <v-list-item v-for="(post, index) in posts" :key="index">
                  <router-link :to="post.link" class="post-link">
                    <v-list-item-title>{{ post.title }}</v-list-item-title>
                  </router-link>
                  <v-list-item-subtitle>{{ post.date }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
            <v-btn outlined class="mt-4" color="blue" to="/blog">Read all</v-btn>
          </v-col>
        </v-row>

        <!-- Projects Section -->
        <v-row class="mb-10" justify="center" align="center">
          <v-col cols="12" class="text-center">
            <h2 class="font-weight-bold mb-3">Projects</h2>
          </v-col>
          <v-col v-for="(project, index) in projects" :key="index" cols="12" md="4" class="d-flex justify-center">
            <v-card
              class="project-card"
              :style="{ backgroundImage: `url(${project.image})` }"
              elevation="2"
              @click="goToLink(project.link)"
            >
              <v-card-title class="project-title">{{ project.title }}</v-card-title>
              <v-card-subtitle class="project-subtitle">{{ project.description }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="center" class="mb-10">
          <v-col cols="auto" class="text-center">
            <v-btn color="blue" to="/projects" class="view-all-btn">View All</v-btn>
          </v-col>
        </v-row>

        <!-- Connect Section -->
        <v-row class="mb-10" justify="center" align="center">
          <v-col cols="12" class="text-center">
            <h2 class="font-weight-bold mb-3">Connect</h2>
            <p class="subtitle-1 mb-4">
              <a class="email-link" href="mailto:michaeljs.leong@gmail.com" target="_self">michaeljs.leong@gmail.com</a>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { title: "Database essentials", date: "Sep 22, 2024", link: "/blog/post1" },
        { title: "test post", date: "Jun 19, 2022", link: "/blog/post2" },
      ],
      projects: [
        {
          title: "Software Engineering Course",
          description: "Vue3 + ElementPlus + Go + MongoDB",
          image: "src/assets/img/ntnu.png",
          link: "",
        },
        {
          title: "Multidimensional Dental Image Segmentation and Processing",
          description: "YOLO + SAM",
          image: "",
          link: "",
        },
      ],
    };
  },
  methods: {
    goToLink(link) {
      if (link) {
        window.open(link, "_blank"); // Opens the link in a new tab if it exists
      } else {
        console.warn("No link provided for this project."); // Warns if no link is set
      }
    },
  },
};
</script>

<style scoped>
/* Styling for the profile and project sections */
.project-card {
  background-size: cover;
  background-position: center;
  color: white;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
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

.email-link {
  color: inherit;
  text-decoration: none;
}

.post-link {
  color: inherit;
  text-decoration: none;
}
</style>
