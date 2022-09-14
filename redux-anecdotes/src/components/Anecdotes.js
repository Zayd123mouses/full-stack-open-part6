import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const Anecdote = ({anecdote, handleVote})=>{
    return(
        <div>
          {anecdote.content}
             <div>
                has {anecdote.votes}
              <button onClick={() => handleVote(anecdote.id)}>vote</button>
            </div>
        </div>
    )
}

const Anecdotes = ()=>{
    const anecdotes = useSelector(state => state).sort((a,b) => b.votes - a.votes)
    const dispatch = useDispatch()

    const handleVote = (id) => {
        dispatch(vote(id))
        console.log(anecdotes)
      }

return (
 <div>
   <h2>Anecdotes</h2>
     {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
       <Anecdote  anecdote={anecdote} handleVote={handleVote}/>  
      </div>
        )}
    </div>
    )
}


export default Anecdotes