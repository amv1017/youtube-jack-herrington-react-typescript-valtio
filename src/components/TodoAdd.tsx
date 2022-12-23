import * as React from 'react'
import { Button, Input, Grid } from '@chakra-ui/react'
import { useSnapshot } from 'valtio'
import store from '../store'

function TodoAdd() {
  const snap = useSnapshot(store)
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={snap.newTodo}
        onChange={(e) => (store.newTodo = e.target.value)}
      />
      <Button onClick={() => store.addTodo()}>Add Todo</Button>
    </Grid>
  )
}

export default TodoAdd
