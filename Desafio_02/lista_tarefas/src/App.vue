<script setup lang="ts">
import { computed, ref } from 'vue'
import FormularioTarefa from './componentes/FormularioTarefa.vue'
import ModalTarefas from './componentes/ModalTarefas.vue'
import type { Filter, Task } from './tipos/tarefa'

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

function addTask(taskTitle: string) {
  tasks.value.push({
    id: Date.now(),
    title: taskTitle,
    finalizados: false,
  })
}

function toggleTask(taskId: number) {
  const task = tasks.value.find((item) => item.id === taskId)

  if (task) task.finalizados = !task.finalizados
}

function removeTask(taskId: number) {
  tasks.value = tasks.value.filter((task) => task.id !== taskId)
}
</script>

<template>
  <main class="page">
    <section class="todo" aria-labelledby="page-title">
      <h1 id="page-title">Lista de tarefas</h1>

      <FormularioTarefa @add-task="addTask" />

      <button class="view-tasks-button" type="button" @click="isTaskModalOpen = true">
        Visualizar tarefas
      </button>
    </section>
  </main>

  <ModalTarefas
    v-if="isTaskModalOpen"
    :tasks="tasks"
    :filtered-tasks="filteredTasks"
    :current-filter="currentFilter"
    @close="isTaskModalOpen = false"
    @update-filter="currentFilter = $event"
    @toggle-task="toggleTask"
    @remove-task="removeTask"
  />
</template>
