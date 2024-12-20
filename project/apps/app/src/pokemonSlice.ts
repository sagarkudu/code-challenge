import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async () => {
  const response = await fetch(api);
  if (!response.ok) throw new Error("Failed to fetch Pokémon data");
  const data = await response.json();
  return data.results;
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    list: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    removePokemon: (state, action) => {
      state.list = state.list.filter((pokemon) => pokemon.name !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
  