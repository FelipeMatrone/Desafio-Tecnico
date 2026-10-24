<script setup lang="ts">
import { computed, ref } from 'vue'

interface Task {
  id: number
  title: string
  finalizados: boolean
}

type Filter = 'todos' | 'pendente' | 'finalizados'

const newTask = ref('')
const tasks = ref<Task[]>([])
const isTaskModalOpen = ref(false)
const currentFilter = ref<Filter>('todos')

const filteredTasks = computed(() => {
  if (currentFilter.value === 'pendente') {
    return tasks.value.filter((task) => !task.finalizados)
  }

  if (currentFilter.value === 'finalizados') {
    return tasks.value.filter((task) => task.finalizados)
  }

  return tasks.value
})

function addTask() {
  const taskTitle = newTask.value.trim()

  if (!taskTitle) return

  tasks.value.push({
    id: Date.now(),
    title: taskTitle,
    finalizados: false,
  })
  newTask.value = ''
}

function removeTask(taskId: number) {
  tasks.value = tasks.value.filter((task) => task.id !== taskId)
}
</script>

<template>
  <main class="page">
    <section class="todo" aria-labelledby="page-title">
      <h1 id="page-title">Lista de tarefas</h1>

      <form class="task-form" @submit.prevent="addTask">
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

      <button class="view-tasks-button" type="button" @click="isTaskModalOpen = true">
        Visualizar tarefas
      </button>
    </section>
  </main>

  <div
    v-if="isTaskModalOpen"
    class="modal-overlay"
    role="presentation"
    @click.self="isTaskModalOpen = false"
  >
    <section class="task-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal-header">
        <h2 id="modal-title">Minhas tarefas</h2>
        <button
          class="close-button"
          type="button"
          aria-label="Fechar lista de tarefas"
          @click="isTaskModalOpen = false"
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
          @click="currentFilter = 'todos'"
        >
          Todas
        </button>
        <button
          class="filter-button"
          :class="{ active: currentFilter === 'pendente' }"
          type="button"
          :aria-pressed="currentFilter === 'pendente'"
          @click="currentFilter = 'pendente'"
        >
          Pendentes
        </button>
        <button
          class="filter-button"
          :class="{ active: currentFilter === 'finalizados' }"
          type="button"
          :aria-pressed="currentFilter === 'finalizados'"
          @click="currentFilter = 'finalizados'"
        >
          Concluídas
        </button>
      </div>

      <p v-if="tasks.length === 0" class="empty-state">Nenhuma tarefa adicionada.</p>
      <p v-else-if="filteredTasks.length === 0" class="empty-state">
        Nenhuma tarefa encontrada neste filtro.
      </p>

      <ul v-else class="task-list" aria-label="Tarefas adicionadas">
        <li v-for="task in filteredTasks" :key="task.id" :class="{ finalizados: task.finalizados }">
          <label class="task-label">
            <input v-model="task.finalizados" type="checkbox" />
            <span>{{ task.title }}</span>
          </label>
          <button
            class="delete-button"
            type="button"
            :aria-label="`Excluir tarefa: ${task.title}`"
            @click="removeTask(task.id)"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 7h16M10 11v6m4-6v6M9 7l1-2h4l1 2m-8 0 1 13h8l1-13" />
            </svg>
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>
