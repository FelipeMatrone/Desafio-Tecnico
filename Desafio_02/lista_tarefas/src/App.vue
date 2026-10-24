<script setup lang="ts">
import { ref } from 'vue'

const newTask = ref('')
const tasks = ref<string[]>([])

function addTask() {
  const taskTitle = newTask.value.trim()

  if (!taskTitle) return

  tasks.value.push(taskTitle)
  newTask.value = ''
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

      <p v-if="tasks.length === 0" class="empty-state">Nenhuma tarefa adicionada.</p>

      <ul v-else class="task-list" aria-label="Tarefas adicionadas">
        <li v-for="task in tasks" :key="task">{{ task }}</li>
      </ul>
    </section>
  </main>
</template>
