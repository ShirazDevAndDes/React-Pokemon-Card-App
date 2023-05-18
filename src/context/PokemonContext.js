import { createContext, useReducer } from "react";

export const PokemonContext = createContext();

const initialValue = {
  pokemon: [],
};

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "ALL":
      return { pokemon: action.payload };

    case "LOAD_MORE":
      return { pokemon: [...state.pokemon, ...action.payload] };

    case "SINGLE":
      return { pokemon: [action.payload] };

    default:
      return { pokemon: [] };
  }
};

export function PokemonContextProvider({ children }) {
  const [state, dispatch] = useReducer(pokemonReducer, initialValue);

  // console.log("pokemon: ", state);
  return (
    <PokemonContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
}
