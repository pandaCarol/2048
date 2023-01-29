import { createSlice } from "@reduxjs/toolkit"
import { randomId, randomValue } from "../../function/randomPosiValue"

const initialState = [
    {id: 0, row: 0, column: 0, value: 0},
    {id: 1, row: 0, column: 1, value: 2},
    {id: 2, row: 0, column: 2, value: 4},
    {id: 3, row: 0, column: 3, value: 8},
    {id: 4, row: 1, column: 0, value: 16},
    {id: 5, row: 1, column: 1, value: 32},
    {id: 6, row: 1, column: 2, value: 64},
    {id: 7, row: 1, column: 3, value: 128},
    {id: 8, row: 2, column: 0, value: 256},
    {id: 9, row: 2, column: 1, value: 512},
    {id: 10, row: 2, column: 2, value: 1024},
    {id: 11, row: 2, column: 3, value: 2048},
    {id: 12, row: 3, column: 0, value: 4096},
    {id: 13, row: 3, column: 1, value: 8192},
    {id: 14, row: 3, column: 2, value: 16384},
    {id: 15, row: 3, column: 3, value: 0}
]

const squaresSlice = createSlice({
    name: 'squares',
    initialState,
    reducers: {
        updatePosiValue(state, action) {
            const { id, value } = action.payload
            const existingPosi = state.find(squares =>  squares.id === id);
            if (existingPosi) {
                existingPosi.value = value;
            }
        }
    }
})

export const { updatePosiValue } = squaresSlice.actions
export default squaresSlice.reducer