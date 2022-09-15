import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/FilterReducer'

const Filter = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
      // input-field value is in variable event.target.value
      dispatch(setFilter(event.target.value.toLowerCase()))
      console.log(event.target.value)
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        <b>Filter</b> <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter