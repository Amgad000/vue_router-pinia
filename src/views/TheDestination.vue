<template>
  <div>
    <GoBack />
    <section class="destination">
      <h1>{{ destInAction.name }}</h1>
      <div class="destination-details">
        <img :src="`/images/${destInAction.image}`" :alt="destInAction.name" />
        <p>{{ destInAction.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top experiences in {{ destInAction.name }}</h2>
      <div class="cards">
        <router-link
          v-for="experience in experiences"
          :key="experience.slug"
          :to="{name: 'exp.show', params: {exp: experience.slug}}">
          <ExpCard :experience="experience" />
        </router-link>
      </div>
      <router-view :key="$route.path"></router-view>
    </section>
  </div>
</template>

<script>
import destinationsData from "@/data.json";

import ExpCard from "../components/ExpCard.vue";
import GoBack from "../components/GoBack.vue";
export default {
  props: {
    id: {type: String, required: true},
  },
  components: {ExpCard, GoBack},
  computed: {
    // destId() {
    //   return parseInt(this.$route.params.id);
    // },
    destInAction() {
      return destinationsData.destinations.find(
        (dest) => dest.id === parseInt(this.id)
      );
    },
    experiences() {
      return this.destInAction.experiences;
    },
  },
};
</script>

<style lang="css" scoped>
.fade-two-enter-active,
.fade-two-leave-active {
  transition: opacity 0.3s;
}

.fade-two-enter-from,
.fade-two-leave-to {
  opacity: 0;
}
</style>
