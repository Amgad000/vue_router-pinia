<template>
  <div class="experience-details">
    <h2>{{ experience.name }}</h2>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </div>
</template>

<script>
import destinationsData from "@/data.json";

export default {
  props: {
    id: {
      type: Number,
    },
    exp: {
      type: String,
    },
  },
  computed: {
    destInAction() {
      return destinationsData.destinations.find((dest) => dest.id === this.id);
    },
    experience() {
      return this.destInAction.experiences.find((exp) => exp.slug == this.exp);
    },
  },
};
</script>
