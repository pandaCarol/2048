import { createSlice } from "@reduxjs/toolkit"
import { randomId, randomValue } from "../../function/randomPosiValue"

const initialState = [
    {id: 1, row: 0, column: 0, value: 0},
    {id: 2, row: 0, column: 1, value: 0},
    {id: 3, row: 0, column: 2, value: 0},
    {id: 4, row: 0, column: 3, value: 0},
    {id: 5, row: 1, column: 0, value: 0},
    {id: 6, row: 1, column: 1, value: 0},
    {id: 7, row: 1, column: 2, value: 0},
    {id: 8, row: 1, column: 3, value: 0},
    {id: 9, row: 2, column: 0, value: 0},
    {id: 10, row: 2, column: 1, value: 0},
    {id: 11, row: 2, column: 2, value: 0},
    {id: 12, row: 2, column: 3, value: 0},
    {id: 13, row: 3, column: 0, value: 0},
    {id: 14, row: 3, column: 1, value: 0},
    {id: 15, row: 3, column: 2, value: 0},
    {id: 16, row: 3, column: 3, value: 0},
]

const squaresSlice = createSlice({
    name: 'squares',
    initialState,
    reducers: {
        inititalRandomPosiValue: {
            reducer(state, action) {
                const existingPosi = state.find(squares =>  squares.id === action.payload.id);
                if (existingPosi) {
                    existingPosi.value = action.payload.value;
                }
            },
            
            prepare (state) {
                return {
                    payload: {
                        id: randomId(state),
                        value: randomValue(),
                    }
                }      
            }
        }
    }
})

export const { inititalRandomPosiValue } = squaresSlice.actions
export default squaresSlice.reducer