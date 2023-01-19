import { configureStore } from "@reduxjs/toolkit"
import squaresReducer from "../features/games/SquaresesSlice"

export default configureStore({
    reducer: {
        squares: squaresReducer,
    },
})