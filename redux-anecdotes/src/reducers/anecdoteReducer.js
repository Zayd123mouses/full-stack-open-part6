import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const AneSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers:{
   
    vote(state, action){
      const id = action.payload
      const theAnecdote = state.find(anecdote=> anecdote.id === id)
      theAnecdote.votes += 1 
    },
    apeendAnecdote(state, action){
      state.push(action.payload)
    },
    setAnecdote(state, action) {
      return action.payload
    },
    updateAnecdote(state, action){
      state.map(anecdote=> anecdote !== action.payload.id ? anecdote : action.payload)
    }


    } 
  })



export const {  vote ,apeendAnecdote, setAnecdote, updateAnecdote  } = AneSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdote(anecdotes))
  }
}

export const createAnecdote= content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.cretaeAnecdote(content)
    dispatch(apeendAnecdote(newAnecdote))
  }
}

export const UpdatedAnecdote= newObject => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.update(newObject)
    dispatch(vote(newAnecdote.id))
  }
}

export default AneSlice.reducer




