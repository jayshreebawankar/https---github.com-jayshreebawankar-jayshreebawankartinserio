import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const pokemonSlice = createSlice({
  name: 'counter',
  initialState : [],
  reducers: {
    getData: (state, action) => {
      debugger;
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getData } = pokemonSlice.actions

export default pokemonSlice.reducer