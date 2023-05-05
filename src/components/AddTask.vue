<template>
  <form @submit.prevent="handleAddTask">
    <input type="text" placeholder="add your new task" v-model="content" />
    <button>Add</button>
  </form>
</template>

<script>
import {useTaskStore} from "../stores/TaskStore.js";

export default {
  data() {
    return {
      content: "",
    };
  },
  setup() {
    const store = useTaskStore();
    return {store};
  },
  methods: {
    handleAddTask() {
      if (this.content.length > 0) {
        this.store.addTask({
          id: this.store.tasks.length + 1,
          content: this.content,
          isFav: false,
        });
        this.content = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 10px 0 30px;

  input,
  button {
    display: inline-block;
    border: none;
    outline: none;
    padding: 5px 12px;
    font-size: 1.2rem;
    background-color: #e0e0e0;
  }
  input {
  }
  button {
    cursor: pointer;
  }
}
</style>
