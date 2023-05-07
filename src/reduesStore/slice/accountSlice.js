import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserByIdAccount = createAsyncThunk(
  'account/getUser  ',
  async (userId) => {
    const {data} = await await axios.get(`http://localhost:3030/account/${userId}`)
    return data.amount || data.message
  }
)



const accountSlice =createSlice({
    name:'account',
    initialState:{amount:10},
    reducers:{
        increment: (state) => {
          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the Immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
          state.amount += 1
        },
        decrement: (state) => {
          state.amount -= 1
        },
        incrementByAmount: (state, action) => {
          state.amount += action.payload
        },
      },
      extraReducers:(builder)=>{
        builder.addCase(fetchUserByIdAccount.fulfilled,(state,action)=>{
          state.pending = false
          state.amount =action.payload
        }).addCase(fetchUserByIdAccount.pending,(state)=>{
          state.pending = true
        }).addCase(fetchUserByIdAccount.rejected,(state,action)=>{
          state.rejected = action.payload
        })
      }

})

export const {increment,decrement,incrementByAmount} = accountSlice.actions

export default accountSlice.reducer