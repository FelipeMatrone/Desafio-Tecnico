<script setup lang="ts">
import type { Task } from '../tipos/tarefa'

defineProps<{
  task: Task
}>()

const emit = defineEmits<{
  toggleTask: [taskId: number]
  removeTask: [taskId: number]
}>()
</script>

<template>
  <li :class="{ completed: task.finalizados }">
    <label class="task-label">
      <input :checked="task.finalizados" type="checkbox" @change="emit('toggleTask', task.id)" />
      <span>{{ task.title }}</span>
    </label>
    <button
      class="delete-button"
      type="button"
      :aria-label="`Excluir tarefa: ${task.title}`"
      @click="emit('removeTask', task.id)"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16M10 11v6m4-6v6M9 7l1-2h4l1 13h8l1-13" />
      </svg>
    </button>
  </li>
</template>
