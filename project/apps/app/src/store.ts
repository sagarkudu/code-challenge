import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './pokemonSlice.ts'

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
})
