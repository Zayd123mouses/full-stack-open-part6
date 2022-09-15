import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'


const AnecdotesForm = ()=>{
  const dispatch = useDispatch()

const handleSubmit = async (event)=>{
    event.preventDefault()
    const content = event.target.ancdote.value
    dispatch(createAnecdote(content))
    event.target.ancdote.value = ''
}

    return(

    <div>
    <h2>create new</h2>
    <form onSubmit={handleSubmit}>
      <div><input name='ancdote'/></div>
      <button type="submit">create</button>
    </form>
  </div>
  
  )
}

export default AnecdotesForm