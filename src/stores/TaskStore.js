import {defineStore} from "pinia";

import axios from "axios";
const tasksUrl = "http://localhost:3000/tasks";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [],
    loading: false,
    anotherData: "pinia tasks",
  }),

  // getters get something from the state
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
    favsCount() {
      return this.tasks.reduce((a, c) => {
        return c.isFav ? a + 1 : a;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },

  // actions
  actions: {
    async getTasks() {
      this.loading = true;

      let result = await axios({
        method: "get",
        url: tasksUrl,
        timeout: 500,
      });
      this.tasks = result.data;

      this.loading = false;
    },
    async addTask(task) {
      this.tasks.push(task);

      await axios
        .post(tasksUrl, JSON.stringify(task), {
          headers: {"Content-Type": "application/json"},
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter((t) => t.id != id);

      await axios.delete(`${tasksUrl}/${id}`);
    },
    async toggleFav(id) {
      const task = this.tasks.find((t) => t.id == id);
      task.isFav = !task.isFav;

      await axios
        .put(`${tasksUrl}/${id}`, JSON.stringify(task), {
          headers: {"Content-Type": "application/json"},
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    },
  },
});
