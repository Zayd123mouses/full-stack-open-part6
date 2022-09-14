import { useSelector, useDispatch } from 'react-redux'
import { good, bad, ok, rest } from './reducers/reducer'


const App = () => {
    
    const dispatch = useDispatch()
    const value = useSelector(state => state)
    return (
      <div>
        <button onClick={()=>dispatch(good())}>good</button>
        <button onClick={()=>dispatch(ok())}>ok</button>
        <button onClick={()=>dispatch(bad())}>bad</button>
        <button onClick={()=>dispatch(rest())}>reset stats</button>
  
        <div>good {value.good}</div>
        <div>ok {value.ok}</div>
        <div>bad {value.bad}</div>
      </div>
    )
  }

  export default App
