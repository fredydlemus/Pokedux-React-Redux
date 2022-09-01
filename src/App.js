import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { Col } from "antd";
import "./App.css";
import logo from "./statics/pokeball.png";
import { useEffect } from "react";
import { getPokemons } from "./api";
import { setPokemons } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    getPokemons()
      .then((pokemons) => dispatch(setPokemons(pokemons)))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <Col>
        <div className="title-container">
          <h1>Pokedux</h1>
          <img className="App-logo" src={logo} alt="logo" />
        </div>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
