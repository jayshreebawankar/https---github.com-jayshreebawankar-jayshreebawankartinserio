import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from './slices/pokemonSlice'

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
  },
})