<template>
  <div>
    <div class="noTasks">
      <v-icon
        size="100"
        color="primary">
        mdi-check
        </v-icon>
      No Tasks
    </div>
  </div>
</template>

<style lang="sass">
  .noTasks
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    opacity: 0.5
</style>
