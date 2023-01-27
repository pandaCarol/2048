import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: 'SCORE', value: 0 },
    { id: 'BEST', value: 0 }
]

const scoresSlice = createSlice({
    name: 'scores',
    initialState,
    reducers: {
        scoreUpdated (state, action) {
            const { id, value } = action.payload
            const updatedScore = state.find(item => item.id === id)
            if (updatedScore) {
                updatedScore.value = value
            }
        }
    }
})

export default scoresSlice.reducer
export const { scoreUpdated } = scoresSlice.actions