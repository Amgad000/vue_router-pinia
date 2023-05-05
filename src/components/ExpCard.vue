<template>
  <div class="card">
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p class="card__text">{{ experience.name }}</p>
  </div>
</template>

<script>
export default {
  name: "ExpCard",
  props: {
    experience: {
      type: Object,
    },
  },
};
</script>
