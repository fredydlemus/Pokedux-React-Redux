import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {

    return <div className="pokemonList">
        {pokemons.map((pokemon) => {
            return <PokemonCard name={pokemon.name} key={pokemon.name} image={pokemon.sprites.front_default} />
        })}
    </div>
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}

export default PokemonList;