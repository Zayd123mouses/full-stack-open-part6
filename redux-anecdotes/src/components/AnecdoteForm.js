import { useDispatch } from 'react-redux'
import { createAncdote } from '../reducers/anecdoteReducer'



const AnecdotesForm = ()=>{
  const dispatch = useDispatch()

const handleSubmit = (event)=>{
    event.preventDefault()
    const content = event.target.ancdote.value
    event.target.ancdote.value = ''
    dispatch(createAncdote(content))
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