import { configureStore } from "@reduxjs/toolkit"
import squaresReducer from "../features/squares/squaresesSlice"
import scoresReducer from "../features/score/scoresSlice"
import statusReducer from "../features/status/statusSlice"


export default configureStore({
    reducer: {
        squares: squaresReducer,
        scores: scoresReducer, 
        status: statusReducer,
    },
})