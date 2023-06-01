import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice ({
    name: "root",
    initialState: {
        advice: "advice"
    },
    reducers: {
        chooseAdvice: (state,action) => { state.advice = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseAdvice } = rootSlice.actions