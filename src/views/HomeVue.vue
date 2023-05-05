<template>
  <div class="home container">
    <h1>All Destination</h1>
    <!-- <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination',
          params: {id: destination.id, slug: destination.slug},
        }">
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </router-link>
    </div> -->
    <hr />
    <!-- practicing some pinia -->
    <div class="pinia-tasks">
      <h3 class="pinia-header">{{ store.anotherData }}</h3>
      <AddTask />
      <ul>
        <li :class="{active: filter == 'all'}" @click="filter = 'all'">all</li>
        <li :class="{active: filter == 'favs'}" @click="filter = 'favs'">
          favorite
        </li>
      </ul>
      <p v-if="store.loading">Loading Tasks...</p>
      <p>
        You have
        {{
          filter === "all"
            ? store.totalCount + " tasks"
            : store.favsCount + " favs"
        }}
        to do.
      </p>

      <!-- if all or favorites -->
      <PiniaTask
        v-if="filter == 'all'"
        v-for="task in store.tasks"
        :key="task.id"
        :task="task" />

      <PiniaTask
        v-if="filter == 'favs'"
        v-for="task in store.favs"
        :key="task.id"
        :task="task" />
    </div>
  </div>
</template>

<script>
// import {ref} from "vue";

import destinationData from "../data.json";

import {useTaskStore} from "../stores/TaskStore.js";
import PiniaTask from "../components/PiniaTask.vue";
import AddTask from "../components/AddTask.vue";

export default {
  data() {
    return {
      filter: "all",
    };
  },

  setup() {
    const store = useTaskStore();

    store.getTasks();

    return {store};
  },

  components: {PiniaTask, AddTask},

  computed: {
    destinations() {
      return destinationData.destinations;
    },
  },
};
</script>
