<template>
  <div class="task">
    <p>{{ task.content }}</p>
    <div class="icons">
      <i class="material-icons" @click="store.deleteTask(task.id)">delete</i>
      <i
        :class="{active: task.isFav}"
        class="material-icons"
        @click="store.toggleFav(task.id)"
        >favorite</i
      >
    </div>
  </div>
</template>

<script>
import {useTaskStore} from "../stores/TaskStore.js";

export default {
  props: ["task"],
  setup() {
    const store = useTaskStore();
    return {store};
  },
};
</script>

<style lang="scss" scoped>
.task {
  background-color: #e0e0e0;
  margin-bottom: 5px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  color: black;
  .icons {
    display: flex;
    gap: 15px;
    color: #757575;
    i {
      cursor: pointer;
    }
    i.active {
      color: red;
    }
  }
}
</style>
