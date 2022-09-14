import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [],
  pokemonSearcherList: [],
};

export const fetchPokemonWithDetails = createAsyncThunk(
  "data/fetchPokemonWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonsRes = await getPokemons();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // -- data/setPokemons is the action type
    setPokemons: (state, { payload }) => {
      state.pokemons = payload;
    },
    setFavorite: (state, { payload }) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.id === payload.pokemonId
      );

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;

        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },

    setPokemonSearcherList: (state, { payload }) => {
      const pokemonsCoincidence = state.pokemons.filter((pokemon) => {
        return pokemon.name.includes(payload);
      });

      state.pokemonSearcherList = pokemonsCoincidence;
    },
  },
});

export const { setPokemons, setFavorite, setPokemonSearcherList } =
  dataSlice.actions;
export default dataSlice.reducer;
