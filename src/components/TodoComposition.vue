<template>
  <span>{{ formattedTitle }}</span>
  <div class="flex items-center border-b border-teal-500 py-2 my-2">
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Adicionar nova tarefa" aria-label="Full name" v-model="todoDescription">
    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" @click="addTodo" :class="disabledClass">
      adicionar
    </button>
  </div>
  <div v-for="(todo, index) in todos" :key="index" class="flex items-center justify-between py-2">
    <div>
      <input type="checkbox" v-model="todo.isDone" />
      <span class="px-2">
        {{ todo.description }}
      </span>
    </div>
    <button class="flex-shrink-0 text-black text-sm  py-1 px-2 rounded-full" type="button" @click="deleteTodo(index)">
      🗑
    </button>
  </div>
  <div>
    Numero de tarefas: {{ todoQuantity }}
  </div>
  <!-- <pre>{{ todos }}</pre> -->
</template>

<script setup>
import { ref, reactive, toRefs, computed } from 'vue'
import { data, addTodo, deleteTodo, doneTodo } from '../helpers/todo'

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },

  setup ({ title }, context) {
    const formattedTitle = computed(() => title.toUpperCase())
    const disabledClass = computed(() => !data.todoDescription && 'cursor-not-allowed opacity-50')

    return {
      ...toRefs(data),
      formattedTitle,
      disabledClass,
      addTodo,
      deleteTodo,
      doneTodo
    }
  }
}
</script>