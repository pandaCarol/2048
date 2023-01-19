import { configureStore } from "@reduxjs/toolkit"
import squaresReducer from "../features/squares/squaresesSlice"

export default configureStore({
    reducer: {
        squares: squaresReducer,
    },
})