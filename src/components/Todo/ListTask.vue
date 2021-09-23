<template>
  <v-list flat>
    <task v-for="task in $store.getters.tasksFiltered" :key="task.id" :task="task"></task>
  </v-list>
</template>

<script>
export default {
  components: {
    task: require("@/components/Todo/Task.vue").default,
  },
};
</script>
