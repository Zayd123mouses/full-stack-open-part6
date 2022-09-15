import { createSlice } from '@reduxjs/toolkit'



const NotificationSlice = createSlice({
  name: "notification",
  initialState: {
    message: null
  },
  reducers:{
    renderMessage(state, action){
      state.message = action.payload
    }

   
  }
})

export const { renderMessage} = NotificationSlice.actions
var timeout;

export const SetNotification= (message, time) => {
  return async dispatch => {
    dispatch(renderMessage(message))
    clearTimeout(timeout);
     timeout = setTimeout(()=>{
       
       dispatch(renderMessage(null))  
    }, time * 1000)
  }
}

export default NotificationSlice.reducer

