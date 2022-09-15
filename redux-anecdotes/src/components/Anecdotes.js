import { useSelector, useDispatch } from 'react-redux'
import { SetNotification } from '../reducers/notificationReducer'
import { UpdatedAnecdote } from '../reducers/anecdoteReducer'

const Anecdote = ({anecdote, handleVote})=>{
    return(
        <div>
          {anecdote.content}
             <div>
                has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
        </div>
    )
}

const Anecdotes = ()=>{
    const anecdotes = useSelector(state => state.anecdote)
    const inputValue = useSelector(state => state.filter.inputValue)

    const votes = [...anecdotes].filter(anecdote=> anecdote.content.toLowerCase().includes(inputValue)).sort((a,b) => b.votes - a.votes)
   
    const dispatch = useDispatch()


    const handleVote = async (anecdote) => {
      dispatch(UpdatedAnecdote(anecdote))
      dispatch(SetNotification(`You have voted for (${anecdote.content})`, 5))
       
      }

return (
 <div>
     {votes.map(anecdote =>
      <div key={anecdote.id}>
       <Anecdote  anecdote={anecdote} handleVote={handleVote}/>  
      </div>
        )}
    </div>
    )
}


export default Anecdotes