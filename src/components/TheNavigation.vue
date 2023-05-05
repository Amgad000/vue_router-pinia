<template>
  <router-link to="/">Home</router-link>
  <router-link
    v-for="destination in destinations"
    :key="destination.id"
    :to="{
      name: 'destination',
      params: {id: destination.id, slug: destination.slug},
    }">
    {{ destination.name }}
  </router-link>
</template>

<script>
import destinationData from "../data.json";
export default {
  computed: {
    destinations() {
      return destinationData.destinations;
    },
  },
};
</script>
