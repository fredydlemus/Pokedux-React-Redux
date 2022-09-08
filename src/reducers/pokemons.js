import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "../actions/types";
import { fromJS, setIn, getIn } from "immutable";

const initialState = fromJS({
  pokemons: [],
  loading: false,
});

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return setIn(state, ["pokemons"], action.payload);

    case SET_FAVORITE:
      const currentPokemonIndex = state.get("pokemons").findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });
      if (currentPokemonIndex < 0) return state;

      const isFavorite = getIn(state, [
        "pokemons",
        currentPokemonIndex,
        "favorite",
      ]);

      return setIn(
        state,
        ["pokemons", currentPokemonIndex, "favorite"],
        !isFavorite
      );

    case SET_LOADING:
      return setIn(state, ["loading"], action.payload);
    default:
      return state;
  }
};
