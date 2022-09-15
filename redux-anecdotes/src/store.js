import { configureStore } from '@reduxjs/toolkit'
import Anereducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import FilterReducer from './reducers/FilterReducer'
export default configureStore({
    reducer: {
        anecdote: Anereducer,
        notification: notificationReducer,
        filter: FilterReducer
    }
  })