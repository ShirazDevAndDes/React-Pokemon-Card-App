import { useContext, useEffect, useRef, useState } from "react";
import PokemonCards from "./components/pokemonCards";
import { PokemonContext } from "./context/PokemonContext";
import usePokemon from "./hooks/usePokemon";

export default function Home() {
  const { pokemon } = useContext(PokemonContext);

  const [page, setPage] = useState(1);

  const [setName, isLoading] = usePokemon();

  const searchValue = useRef("");

  function getPokemon(name) {
    setName(name);
  }

  useEffect(() => {
    setName("loadMore", { page, clear: false });

    //eslint-disable-next-line
  }, [page]);

  return (
    <div className="container">
      <div className="row my-5">
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <div className="row gx-2">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control w-100"
                  ref={searchValue}
                />
              </div>
              <div className="col-2">
                <button
                  className="btn btn-success w-100"
                  onClick={() => getPokemon(searchValue.current.value)}
                >
                  Search
                </button>
              </div>
              <div className="col-2">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => getPokemon("all")}
                >
                  All
                </button>
              </div>
              <div className="col-2">
                <button
                  className="btn btn-danger w-100"
                  onClick={() => getPokemon("random")}
                >
                  Random
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isLoading && pokemon.length === 1 && (
        <PokemonCards pokemonDeck={pokemon} />
      )}
      {!isLoading && pokemon.length > 1 && (
        <>
          <PokemonCards pokemonDeck={pokemon} />
          <button
            className="btn btn-outline-primary w-100 mb-3"
            disabled={isLoading}
            onClick={() => setPage(page + 1)}
          >
            Load More
          </button>
        </>
      )}
      {isLoading && (
        <>
          {console.log("loading")}
          <div className="card">
            <div className="card-body">
              <h2 className="display-5">...Loading</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
