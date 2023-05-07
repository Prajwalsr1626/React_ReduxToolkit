import { createAction, createReducer } from "@reduxjs/toolkit";


export const rewardIncrement = createAction("reward/increment")
const initialState ={
    reward:15
}


const rewardReducer=createReducer( initialState ,(builder)=>{
    builder.addCase(rewardIncrement ,(state)=>{
        state.reward++
    })
}  )

export default rewardReducer ;