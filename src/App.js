import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { Col } from "antd";
import "./App.css";
import logo from "./statics/pokeball.png";
import { useEffect, useState } from "react";
import { getPokemons } from "./api";
import { connect } from "react-redux";
import { setPokemons as setPokemonsAction } from "./actions";

function App({ pokemons, setPokemons }) {
  useEffect(() => {
    getPokemons()
      .then((pokemons) => setPokemons(pokemons))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <Col>
        <div className="title-container">
          <h1>Pokedux</h1>
          <img src={logo} alt="logo" />
        </div>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
