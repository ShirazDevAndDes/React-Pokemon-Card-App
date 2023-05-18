import axios from "axios";
import { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

async function getPokemon(url) {
  return await axios.get(url).then(async (response) => {
    const res = response.data;

    const color = await axios.get(res.species.url).then((response) => {
      const res = response.data;

      return res.color;
    });

    return { ...res, color };
  });
}

export default function usePokemon() {
  const { dispatch } = useContext(PokemonContext);

  //   const [pokeDeck, setPokeDeck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  let url = "";
  let pokemon = [];

  async function setName(
    name,
    options = {
      page: 1,
      clear: true,
      loading: true,
    }
  ) {
    const { page, clear, loading } = options;

    const offset = 8 * page;

    if (loading) setIsLoading(true);

    if (clear) {
      dispatch({ type: "" });
    }

    switch (name) {
      case "all":
        url = "https://pokeapi.co/api/v2/pokemon?limit=905";
        // url = "https://pokeapi.co/api/v2/pokemon?limit=6";
        pokemon = await axios.get(url).then((response) => {
          const res = response.data;
          return Promise.all(
            res.results.map(async (data) => {
              const pokemonData = await getPokemon(data.url);
              return pokemonData;
              // setTimeout(() => {
              //   console.log(pokemonData);
              //   dispatch({ type: "ALL", payload: pokemonData });
              // }, 2000);
            })
          );
        });
        dispatch({ type: "ALL", payload: pokemon });
        break;

      case "loadMore":
        url = "https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=8";
        // url = "https://pokeapi.co/api/v2/pokemon?limit=6";
        console.log("url: ", url);
        pokemon = await axios.get(url).then((response) => {
          const res = response.data;
          // console.log(res.results);
          return Promise.all(
            res.results.map(async (data) => {
              const pokemonData = await getPokemon(data.url);
              return pokemonData;
              // setTimeout(() => {
              //   console.log(pokemonData);
              //   dispatch({ type: "ALL", payload: pokemonData });
              // }, 2000);
            })
          );
        });
        dispatch({ type: "LOAD_MORE", payload: pokemon });
        break;

      case "random":
        const id = Math.floor(Math.random() * 905);
        url = "https://pokeapi.co/api/v2/pokemon/" + id;
        pokemon = await getPokemon(url);
        dispatch({ type: "SINGLE", payload: pokemon });
        break;

      default:
        url = "https://pokeapi.co/api/v2/pokemon/" + name.toLowerCase();
        pokemon = await getPokemon(url);
        dispatch({ type: "SINGLE", payload: pokemon });
        break;
    }

    if (loading) setIsLoading(false);
  }

  return [setName, isLoading];
}
