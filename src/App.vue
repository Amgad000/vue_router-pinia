<template>
  <div>
    <div id="nav">
      <Nav />
    </div>
    <div class="container">
      <!-- :key="$route.params" ==> is used to force rerender any component -->
      <router-view v-slot="{Component}">
        <Transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </Transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/TheNavigation.vue";
export default {
  components: {
    Nav,
  },
};
</script>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
