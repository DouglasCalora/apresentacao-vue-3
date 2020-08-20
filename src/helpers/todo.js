import { reactive, computed } from 'vue'

const data = reactive({
  todoDescription: '',
  todos: [
    { description: 'Pagar fatura do cartão 1', isDone: false },
    { description: 'Pagar fatura do cartão 2', isDone: false },
    { description: 'Pagar fatura do cartão 3', isDone: false }
  ],
  todoQuantity: computed(() => data.todos.length)
})

function addTodo () {
  data.todoDescription && data.todos.push({ description: data.todoDescription, isDone: false })
  data.todoDescription = ''
}

function deleteTodo (index) {
  data.todos.splice(index, 1)
}

function doneTodo (index) {
  data.todos[index].isDone = !data.todos[index].isDone
}

export {
  data,
  addTodo,
  deleteTodo,
  doneTodo
}
