import Shapes from "./shapes";

export default function PokemonCard({ pokemon }) {
  const selectShape = Math.floor(Math.random() * 5);

  // function firstUppercase(word) {
  //   const firstLetter = word.charAt(0).toUpperCase();
  //   const otherLetters = word.slice(1);

  //   const fullWord = firstLetter.concat(otherLetters);

  //   return fullWord;
  // }

  return (
    <div
      className="row justify-content-center align-items-center"
      id="pokeDeck"
    >
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <div className="card shadow">
          <div className="poke-img">
            <Shapes id={pokemon.id} shape={selectShape} />
            <img
              className="card-img-top"
              src={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
                pokemon.id +
                ".png"
              }
              alt={pokemon.name}
            />
          </div>

          <div className="card-body text-center pt-0 pb-4">
            <h4 className="card-title mb-3 text-capitalize">{pokemon.name}</h4>
            <div className="row">
              <div className="col-4 p-0">
                <b>Attack</b>
                <br /> {pokemon.stats[1].base_stat}
              </div>
              <div className="col-4 p-0">
                <b>Defense</b>
                <br /> {pokemon.stats[2].base_stat}
              </div>
              <div className="col-4 p-0">
                <b>Speed</b>
                <br /> {pokemon.stats[5].base_stat}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
