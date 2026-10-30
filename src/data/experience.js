// summary: one-line takeaway shown in the compact home page timeline
// metric: optional headline number, highlighted next to the summary
// description: full bullet points shown on the About page
export const experiences = [
  {
    date: "2025.01.01 - Present",
    role: "Full-stack Engineer",
    company: "Wisdom Garden Taiwan",
    summary: "Moved Jetty 12 request handling to Java virtual threads",
    metric: "+15% throughput · peak-load errors 7.3% → 0%",
    description: [
      "Built and maintained backend services using the Java Ninja Framework, providing RESTful APIs for a Vue 2 frontend",
      "Designed event-driven microservices with Spring Boot and RabbitMQ for asynchronous communication",
      "Built an in-house RabbitMQ channel pool, since the Ninja Framework has no built-in channel caching like Spring AMQP",
      "Migrated Jetty 12 request handling to Java virtual threads (Project Loom); k6 load tests showed 15% higher successful throughput and peak-load errors cut from 7.3% to 0%",
    ],
  },
  {
    date: "2023.07.01 - 2023.08.31",
    role: "DevOps Intern",
    company: "Wisdom Garden Taiwan",
    summary: "Ran Ansible deployments with Docker Compose and Kubernetes",
    description: [
      "Deployed application releases to school servers and tested new features",
      "Updated GitLab deployment configs and ran Ansible deployments with Docker Compose and Kubernetes",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Science and Information Engineering",
  school: "National Taiwan Normal University",
};
