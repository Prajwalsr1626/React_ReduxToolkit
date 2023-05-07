import { createAction, createSlice } from "@reduxjs/toolkit"

const incrementByAmount = createAction("account/incrementByAmount")

const bounsSlice =createSlice({
    name:'bouns',
    initialState:{point:10},
    reducers:{
        increment: (state) => {
          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the Immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
          state.point += 1
        }
    },
    extraReducers:(builder)=> {
      builder.addCase(incrementByAmount,(state,action)=>{
        if (action.payload>=100){state.point +=1}
        else {state}
      })

    }

})
export const {increment} = bounsSlice.actions

export default bounsSlice.reducer;