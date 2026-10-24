<script setup lang="ts">
import ItemTarefa from './ItemTarefa.vue'
import type { Filter, Task } from '../tipos/tarefa'

defineProps<{
  tasks: Task[]
  filteredTasks: Task[]
  currentFilter: Filter
}>()

const emit = defineEmits<{
  close: []
  updateFilter: [filter: Filter]
  toggleTask: [taskId: number]
  removeTask: [taskId: number]
}>()
</script>

<template>
  <div class="modal-overlay" role="presentation" @click.self="emit('close')">
    <section class="task-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal-header">
        <h2 id="modal-title">Minhas tarefas</h2>
        <button
          class="close-button"
          type="button"
          aria-label="Fechar lista de tarefas"
          @click="emit('close')"
        >
          ×
        </button>
      </div>

      <div class="filters" aria-label="Filtrar tarefas">
        <button
          class="filter-button"
          :class="{ active: currentFilter === 'todos' }"
          type="button"
          :aria-pressed="currentFilter === 'todos'"
          @click="emit('updateFilter', 'todos')"
        >
          Todas
        </button>
        <button
          class="filter-button"
          :class="{ active: currentFilter === 'pendente' }"
          type="button"
          :aria-pressed="currentFilter === 'pendente'"
          @click="emit('updateFilter', 'pendente')"
        >
          Pendentes
        </button>
        <button
          class="filter-button"
          :class="{ active: currentFilter === 'finalizados' }"
          type="button"
          :aria-pressed="currentFilter === 'finalizados'"
          @click="emit('updateFilter', 'finalizados')"
        >
          Concluídas
        </button>
      </div>

      <p v-if="tasks.length === 0" class="empty-state">Nenhuma tarefa adicionada.</p>
      <p v-else-if="filteredTasks.length === 0" class="empty-state">
        Nenhuma tarefa encontrada neste filtro.
      </p>

      <ul v-else class="task-list" aria-label="Tarefas adicionadas">
        <ItemTarefa
          v-for="task in filteredTasks"
          :key="task.id"
          :task="task"
          @toggle-task="emit('toggleTask', $event)"
          @remove-task="emit('removeTask', $event)"
        />
      </ul>
    </section>
  </div>
</template>
