import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './pokemonSlice.tsx'

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
})
