import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    //three status: start, break, stop
    status: 'start'
}]

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        statusUpdated (state, action) {
            console.log('start dispatch')
            const { status } = action.payload
            state[0].status = status
        }
    }
})

export default statusSlice.reducer
export const { statusUpdated } = statusSlice.actions