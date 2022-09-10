import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { Col, Spin } from "antd";
import "./App.css";
import logo from "./statics/pokeball.png";
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchPokemonWithDetails } from "./slices/dataSlice";

function App() {
  const { pokemons } = useSelector((state) => state.data, shallowEqual);
  const { loading } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonWithDetails());
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
