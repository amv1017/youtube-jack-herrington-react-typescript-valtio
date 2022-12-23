import * as React from 'react'
import { Button, Grid } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import store, { Todo } from '../store'

const URL =
  'https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json'

function TopBar() {
  const onLoad = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data: Todo[]) => (store.todos = data))
  }
  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button onClick={onLoad}>Load</Button>
    </Grid>
  )
}

export default TopBar
