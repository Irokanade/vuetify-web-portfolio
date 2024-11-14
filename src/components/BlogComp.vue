<template>
  <v-container fluid class="pa-10">
    <!-- Blog Title -->
    <h1 class="blog-title">Blog</h1>

    <!-- Blog Entries by Year -->
    <div v-for="(entries, year) in groupedPosts" :key="year" class="year-section">
      <h2 class="year-title">{{ year }}</h2>

      <div v-for="(post, index) in entries" :key="index" class="blog-post">
        <span class="post-date">{{ post.date }}</span>
        <router-link :to="post.link" class="post-link">
          {{ post.title }}
        </router-link>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { title: "10 tips to get started with open source", date: "Sep 22", year: 2024, link: "/blog/post1" },
        { title: "8 SECRETS to write Winning proposal", date: "Jun 19", year: 2024, link: "/blog/" },
        { title: "Mastering Vue.js", date: "Mar 10", year: 2023, link: "/blog/vue-master" },
        // Add more blog posts as needed
      ],
    };
  },
  computed: {
    groupedPosts() {
      // Group posts by year using reduce
      return this.posts.reduce((acc, post) => {
        const year = post.year;
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(post);
        return acc;
      }, {});
    },

    
  },
};
</script>

<style scoped>
.blog-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.year-section {
  margin-top: 2rem;
}

.year-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.blog-post {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
}

.post-date {
  color: #b0b0b0;
  margin-right: 1rem;
  font-size: 0.9rem;
  width: 3rem;
  text-align: right;
}

.post-link {
  font-size: 1.1rem;
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.post-link:hover {
  text-decoration: underline;
  color: #1a73e8; /* Optional: Color change on hover */
}
</style>
