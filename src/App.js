import React from 'react'

import API, { graphqlOperation } from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub'

import { createTodo } from './graphql/mutations'

import awsconfig from './aws-exports'

import TodoForm from './components/todo-form'

import './App.css'

API.configure(awsconfig)
PubSub.configure(awsconfig)

async function createNewTodo (
  todo = { name: 'Use AWS AppSync', description: 'Realtime and Offline' }
) {
  await API.graphql(graphqlOperation(createTodo, { input: todo }))
}

function App () {
  return (
    <div className='App'>
      <TodoForm onSubmit={createNewTodo} />
    </div>
  )
}

export default App
