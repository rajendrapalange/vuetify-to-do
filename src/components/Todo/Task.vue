<template>
  <div>
    <v-list-item
      @click="$store.commit('doneTask', task.id)"
      :class="{ 'blue lighten-5': task.done }"
    >
      <template>
        <v-list-item-action>
          <v-checkbox :input-value="task.done" color="primary"> </v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.done }"
          >
            {{ task.title }}
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text>
            <v-icon small>mdi-calendar</v-icon>
            {{ task.dueDate | niceDate }}
          </v-list-item-action-text>
        </v-list-item-action>

        <v-list-item-action>
          <tasks-menu :task=task />
        </v-list-item-action>
      
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { format } from 'date-fns'
export default {
  props: ["task"],
  data() {
    return {

    }
  },
  filters: {
    niceDate(value) {
      return format(new Date(value), 'MMM d');
    }
  },
  components: {
    'tasks-menu': require('@/components/Todo/TasksMenu.vue').default
  }
};
</script>
