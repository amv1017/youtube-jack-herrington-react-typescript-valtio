import { proxy } from 'valtio'

// Standard interface and functions
export interface Todo {
  id: number
  text: string
  done: boolean
}

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }))

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }))

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id)

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
]

// Valtio implementation

export interface Store {
  todos: Todo[]
  newTodo: string
  addTodo: () => void
  toggle: (id: number) => void
  remove: (id: number) => void
  update: (id: number, text: string) => void
}

const store = proxy<Store>({
  todos: [],
  newTodo: '',
  addTodo() {
    store.todos = addTodo(store.todos, store.newTodo)
    store.newTodo = ''
  },
  toggle(id: number) {
    store.todos = toggleTodo(store.todos, id)
  },
  remove(id: number) {
    store.todos = removeTodo(store.todos, id)
  },
  update(id: number, text: string) {
    store.todos = updateTodo(store.todos, id, text)
  },
})

export default store
