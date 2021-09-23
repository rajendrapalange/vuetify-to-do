<template>
  <v-row justify="center">
    <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Edit Task
        </v-card-title>
        <v-card-text>
          Edit Task Title
          <v-text-field
            v-model="taskTitle"
            @keyup.enter="updateTask"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="$emit('close')"
          >
            Cancel
          </v-btn>
          <v-btn
            @click="updateTask"
            :disabled="taskTitleInvalid"
            color="primary darken-1"
            text
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    props: ['task'],
    data () {
      return {
        taskTitle: null
      }
    },
    computed: {
      taskTitleInvalid() {
        return !this.taskTitle || this.taskTitle === this.task.title
      }
    },
    methods: {
      updateTask() {
        if(!this.taskTitleInvalid) {
          let payload = {
            id: this.task.id,
            title: this.taskTitle
          };
          this.$store.dispatch('updateTask', payload)
          this.$emit('close');
        }
        
      }
    },
    mounted() {
      this.taskTitle = this.task.title;
    }
}
</script>

<style>

</style>