<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  addTask: [title: string]
}>()

const newTask = ref('')

function submitTask() {
  const taskTitle = newTask.value.trim()

  if (!taskTitle) return

  emit('addTask', taskTitle)
  newTask.value = ''
}
</script>

<template>
  <form class="task-form" @submit.prevent="submitTask">
    <label for="new-task">Nova tarefa</label>
    <div class="form-row">
      <input
        id="new-task"
        v-model="newTask"
        type="text"
        placeholder="Ex.: Estudar Vue"
        autocomplete="off"
      />
      <button type="submit">Adicionar</button>
    </div>
  </form>
</template>
