<template>
  <v-text-field
    v-model="newTask"
    @keyup.enter="addTask()"
    class="pa-3"
    clearable
    outlined
    label="Add Task"
    hide-details
  >
    <template v-slot:append>
      <v-icon
        color="primary"
        :disabled="newTaskTitleInvalid"
        @click="addTask">
        mdi-plus
      </v-icon>
    </template>
  </v-text-field>

</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  computed: {
    newTaskTitleInvalid() {
      return !this.newTask
    }
  },
  methods: {
    addTask() {
      if(!this.newTaskTitleInvalid) {
        this.$store.dispatch("addTask", this.newTask);
        this.newTask = "";
      }
    },
  },
};
</script>