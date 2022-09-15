import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'


const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const cretaeAnecdote = async (content)=> {
    const  newAnecdote = {content, votes:0}
    const response = await axios.post(baseUrl, newAnecdote)
    return response.data
}

const update = async (newObject)=>{
  const toUpdate = {...newObject, votes: newObject.votes + 1}
   const id = newObject.id
  const response = await axios.put(`${baseUrl}/${id}`, toUpdate)
  return response.data
}

export default { getAll, cretaeAnecdote, update }