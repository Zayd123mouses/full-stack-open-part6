import { createSlice } from '@reduxjs/toolkit'

const FilterSlice = createSlice({
    name:"filter",
    initialState: {
        inputValue: ''
    },
    reducers:{
        setFilter(state, action){
            state.inputValue = action.payload
        }
    }
})


export const { setFilter} = FilterSlice.actions
export default FilterSlice.reducer