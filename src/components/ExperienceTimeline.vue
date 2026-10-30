<template>
  <div class="timeline" :class="{ 'timeline--compact': compact }">
    <div v-for="(experience, index) in experiences" :key="index" class="timeline-item">
      <div class="font-mono text-body-2 text-muted mb-1">{{ experience.date }}</div>
      <div class="timeline-role">
        {{ experience.role }}
        <span class="text-muted font-weight-regular">· {{ experience.company }}</span>
      </div>

      <!-- compact: one-line summary + metric; full: every bullet -->
      <template v-if="compact">
        <div class="text-body-2 mt-1">{{ experience.summary }}</div>
        <div v-if="experience.metric" class="timeline-metric font-mono text-accent mt-1">
          {{ experience.metric }}
        </div>
      </template>
      <ul v-else-if="experience.description?.length" class="experience-list text-body-2 mt-3">
        <li v-for="(bullet, bIndex) in experience.description" :key="bIndex" class="mb-2">
          {{ bullet }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  experiences: {
    type: Array,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.timeline {
  border-left: 2px solid rgba(var(--v-theme-primary), 0.3);
  padding-left: 24px;
}

.timeline-item {
  position: relative;
  padding-bottom: 32px;
}

.timeline--compact .timeline-item {
  padding-bottom: 24px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

/* dot sits on the timeline line */
.timeline-item::before {
  content: "";
  position: absolute;
  left: -31px;
  top: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgb(var(--v-theme-accent));
  box-shadow: 0 0 0 4px rgb(var(--v-theme-background));
}

.timeline-role {
  font-size: 1.1rem;
  font-weight: 700;
}

.timeline-metric {
  font-size: 0.85rem;
  font-weight: 700;
}

.experience-list {
  padding-left: 1.2em;
}

.experience-list li {
  line-height: 1.6;
}
</style>
