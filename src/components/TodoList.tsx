import * as React from 'react'
import { Button, Input, Flex, Checkbox, Heading } from '@chakra-ui/react'
import { useSnapshot } from 'valtio'
import store from '../store'

function TodoListItems() {
  const snap = useSnapshot(store)
  return (
    <>
      {snap.todos.map((todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox checked={todo.done} onClick={() => store.toggle(todo.id)} />
          <Input
            mx={2}
            value={todo.text}
            onChange={(e) => store.update(todo.id, e.target.value)}
          />
          <Button onClick={() => store.remove(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  )
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  )
}

export default TodoList
