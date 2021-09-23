import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: null,
    tasks: [
    ],
    snackbar: {
      show: false,
      title: ''
    }
  },
  mutations: {
    setSearch(state, value) {
      state.search = value
    },
    addTask(state, newTaskTitle) {
      if (newTask == "") {
        return false;
      }
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null
      }
      state.tasks.push(newTask);
    },
    doneTask(state, id) {
      let task = state.tasks.filter(task => task.id === id)[0];
      task.done = !task.done;
    },
    updateTask(state, payload) {
      let task = state.tasks.filter(task => task.id === payload.id)[0];
      task.title = payload.title;
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter(task => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    showSnackbar(state, title) {
      let timeout = 0;
      if (state.snackbar.show) {
        timeout = 300;
        state.snackbar.show = false;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.title = title;
      }, timeout);
    }
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle);
      commit('showSnackbar', 'Task Added Successfully.');
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id);
      commit('showSnackbar', 'Task Deleted Successfully.');
    },
    updateTask({ commit }, payload) {
      commit('updateTask', payload);
      commit('showSnackbar', 'Task Updated Successfully.')
    },
    updateTaskDueDate({ commit }, payload) {
      commit('updateTaskDueDate', payload);
      commit('showSnackbar', 'Task Due Date Updated Successfully.')
    }
  },
  getters: {
    tasksFiltered(state) {
      if (!state.search) {
        return state.tasks
      }
      return state.tasks.filter(task =>
        task.title.toLowerCase().includes(state.search.toLowerCase())
      )
    }
  },
  modules: {
  }
})
