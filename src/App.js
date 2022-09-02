import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { Col, Spin } from "antd";
import "./App.css";
import logo from "./statics/pokeball.png";
import { useEffect } from "react";
import { getPokemons } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { pokemons, loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    getPokemons()
      .then((pokemons) => dispatch(getPokemonsWithDetails(pokemons)))
      .finally(() => dispatch(setLoading(false)))
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
      {loading ? (
        <Col span={12} offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
