import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState: CounterState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // These are Immer functions, so we can just mutate the state.
    // It will be made immutable under the hood.
    incremented(stateDraft) {
      stateDraft.value++
    },
    amountAdded(stateDraft, action: PayloadAction<number>) {
      stateDraft.value += action.payload
    },
  },
})

export const { incremented, amountAdded } = counterSlice.actions
export default counterSlice.reducer
