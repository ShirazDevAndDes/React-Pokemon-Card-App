document.getElementById("search").addEventListener("input", function () {
  getPokemon(this.value);
});
document.getElementById("btn-all").addEventListener("click", function () {
  getPokemon("all");
});
document.getElementById("btn-random").addEventListener("click", function () {
  getPokemon("random");
});

function firstUppercase(word) {
  const firstLetter = word.charAt(0).toUpperCase();
  const otherLetters = word.slice(1);

  const fullWord = firstLetter.concat(otherLetters);

  return fullWord;
}

async function setPokemon(pokemon, clear = false) {
  const pokeDeck = document.getElementById("pokeDeck");

  let pokeColor = "orange";
  let shapeColor1 = "#F87537";
  let shapeColor2 = "#FBA81F";

  await fetch("https://pokeapi.co/api/v2/pokemon-species/" + pokemon.id)
    .then((res) => res.json())
    .then((pokemonColor) => (pokeColor = pokemonColor.color.name));

  const shapeColors = [
    { name: "black", color1: "#000000", color2: "#FFFFFF" },
    { name: "blue", color1: "#37D4F8", color2: "#1F87FB" },
    { name: "brown", color1: "#952C2C", color2: "#FF0000" },
    { name: "gray", color1: "#434343", color2: "#BEBEBE" },
    { name: "green", color1: "#ADF837", color2: "#1FFB62" },
    { name: "pink", color1: "#D437F8", color2: "#FB1F9E" },
    { name: "purple", color1: "#7237F8", color2: "#D91FFB" },
    { name: "red", color1: "#F837A7", color2: "#FB1F1F" },
    { name: "white", color1: "#AEAEAE", color2: "#FFFFFF" },
    { name: "yellow", color1: "#F8A037", color2: "#FBDA1F" },
  ];

  shapeColors.map((colors) => {
    if (colors.name == pokeColor) {
      shapeColor1 = colors.color1;
      shapeColor2 = colors.color2;
    }
  });

  const shapes = [
    `<svg
    class=""
    style="z-index: 0"
    id="sw-js-blob-svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sw-gradient-${pokemon.id}" x1="0" x2="1" y1="1" y2="0">
        <stop
          id="stop1"
          stop-color="${shapeColor1}"
          offset="0%"
        ></stop>
        <stop 
          id="stop2"
          stop-color="${shapeColor2}"
          offset="100%"
        ></stop>
      </linearGradient>
    </defs>
    <path
      fill="url(#sw-gradient-${pokemon.id})"
      d="M16.6,-17.6C21.7,-15.4,26.3,-10.4,27.6,-4.6C29,1.2,27.1,7.9,24.7,16.4C22.3,24.9,19.5,35.3,13.1,38.8C6.8,42.3,-3,38.8,-10.1,33.7C-17.2,28.6,-21.5,21.8,-24.8,14.9C-28.1,8.1,-30.3,1.2,-29.6,-5.6C-28.8,-12.3,-25.1,-19,-19.7,-21.1C-14.3,-23.3,-7.2,-20.9,-0.7,-20.1C5.7,-19.2,11.4,-19.8,16.6,-17.6Z"
      width="100%"
      height="100%"
      transform="translate(50 50)"
      stroke-width="0"
      style="transition: all 0.3s ease 0s"
    ></path>
  </svg>`,
    `<svg
    id="sw-js-blob-svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sw-gradient-${pokemon.id}" x1="0" x2="1" y1="1" y2="0">
      <stop
      id="stop1"
      stop-color="${shapeColor1}"
      offset="0%"
    ></stop>
    <stop 
      id="stop2"
      stop-color="${shapeColor2}"
      offset="100%"
    ></stop>
      </linearGradient>
    </defs>
    <path
      fill="url(#sw-gradient-${pokemon.id})"
      d="M25.3,-25.8C32,-18.6,36,-9.3,33.8,-2.1C31.7,5.1,23.5,10.1,16.8,16.7C10.1,23.2,5.1,31.2,-0.4,31.5C-5.8,31.9,-11.6,24.7,-17.3,18.1C-23.1,11.6,-28.7,5.8,-30.5,-1.7C-32.2,-9.3,-30,-18.6,-24.3,-25.8C-18.6,-33,-9.3,-38.1,0,-38.2C9.3,-38.2,18.6,-33.1,25.3,-25.8Z"
      width="100%"
      height="100%"
      transform="translate(50 50)"
      stroke-width="0"
      style="transition: all 0.3s ease 0s"
    ></path>
  </svg>`,
    `<svg
    id="sw-js-blob-svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sw-gradient-${pokemon.id}" x1="0" x2="1" y1="1" y2="0">
      <stop
      id="stop1"
      stop-color="${shapeColor1}"
      offset="0%"
    ></stop>
    <stop 
      id="stop2"
      stop-color="${shapeColor2}"
      offset="100%"
    ></stop>
      </linearGradient>
    </defs>
    <path
      fill="url(#sw-gradient-${pokemon.id})"
      d="M18,-17.3C23.9,-12.1,29.8,-6,30.2,0.4C30.7,6.9,25.7,13.8,19.7,20.1C13.8,26.3,6.9,32,1.4,30.6C-4.1,29.3,-8.3,20.8,-15.8,14.6C-23.3,8.3,-34.2,4.1,-36.8,-2.7C-39.5,-9.5,-34,-19,-26.5,-24.2C-19,-29.5,-9.5,-30.6,-1.7,-28.9C6,-27.1,12.1,-22.6,18,-17.3Z"
      width="100%"
      height="100%"
      transform="translate(50 50)"
      stroke-width="0"
      style="transition: all 0.3s ease 0s"
    ></path>
  </svg>`,
    `<svg
    id="sw-js-blob-svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sw-gradient-${pokemon.id}" x1="0" x2="1" y1="1" y2="0">
      <stop
      id="stop1"
      stop-color="${shapeColor1}"
      offset="0%"
    ></stop>
    <stop 
      id="stop2"
      stop-color="${shapeColor2}"
      offset="100%"
    ></stop>
      </linearGradient>
    </defs>
    <path
      fill="url(#sw-gradient-${pokemon.id})"
      d="M21.2,-31.6C26.6,-25.2,29.6,-17.9,32.9,-10.1C36.3,-2.3,40.1,6,38.3,12.8C36.6,19.6,29.3,25,22,26.6C14.7,28.3,7.3,26.4,1.9,23.7C-3.5,21.1,-7,17.8,-9.4,14.5C-11.9,11.2,-13.2,8,-17.4,3.6C-21.6,-0.7,-28.7,-6.2,-27.5,-8.6C-26.3,-11.1,-16.8,-10.6,-10.8,-16.8C-4.9,-23,-2.4,-35.9,2.7,-39.6C7.9,-43.4,15.8,-38,21.2,-31.6Z"
      width="100%"
      height="100%"
      transform="translate(50 50)"
      stroke-width="0"
      style="transition: all 0.3s ease 0s"
    ></path>
  </svg>`,
    `<svg
    id="sw-js-blob-svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sw-gradient-${pokemon.id}" x1="0" x2="1" y1="1" y2="0">
      <stop
      id="stop1"
      stop-color="${shapeColor1}"
      offset="0%"
    ></stop>
    <stop 
      id="stop2"
      stop-color="${shapeColor2}"
      offset="100%"
    ></stop>
      </linearGradient>
    </defs>
    <path
      fill="url(#sw-gradient-${pokemon.id})"
      d="M13.1,-17.4C17.6,-11.7,22.4,-8.3,24.6,-3.3C26.7,1.7,26.2,8.3,24.1,15.9C22.1,23.5,18.5,32.1,12.7,33.7C7,35.3,-0.9,29.8,-10.4,27C-19.8,24.2,-30.8,24.2,-34.1,19.3C-37.5,14.4,-33.1,4.7,-30.7,-4.7C-28.2,-14.1,-27.6,-23.1,-22.8,-28.7C-18,-34.3,-9,-36.6,-2.4,-33.7C4.3,-30.9,8.5,-23.1,13.1,-17.4Z"
      width="100%"
      height="100%"
      transform="translate(50 50)"
      stroke-width="0"
      style="transition: all 0.3s ease 0s"
    ></path>
  </svg>`,
  ];

  const selectShape = Math.floor(Math.random() * 5);

  pokeDeck.insertAdjacentHTML(
    "beforeend",
    `<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
    <div class="card shadow">
    <div class="position-relative">
    ${shapes[selectShape]}
    <img class="card-img-top p-2 pb-0 position-absolute top-0 start-0 bottom-0 end-0" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      pokemon.id
    }.png" alt="${pokemon.name}" style="z-index: 1;" />
    </div>
    
    <div class="card-body text-center pt-0 pb-4">
        <h4 class="card-title mb-3">${firstUppercase(pokemon.name)}</h4>
        <div class="row">
          <div class="col-4 p-0"><b>Attack</b><br/> ${
            pokemon.stats[1].base_stat
          }</div>
          <div class="col-4 p-0"><b>Defense</b><br/> ${
            pokemon.stats[2].base_stat
          }</div>
          <div class="col-4 p-0"><b>Speed</b><br/> ${
            pokemon.stats[5].base_stat
          }</div>
        </div>
      </div>
    </div>
  </div>`
  );
}
// pikachu
async function getPokemon(name = "pikachu") {
  const pokeDeck = document.getElementById("pokeDeck");

  pokeDeck.innerHTML = "";

  const noPokemon = `<div class="card w-100">
    <div class="card-body text-center">
      <p class="card-text">No Pokemon</p>
    </div>`;

  if (name !== "") {
    switch (name) {
      case "all":
        url = "https://pokeapi.co/api/v2/pokemon?limit=905";
        break;

      case "random":
        const id = Math.floor(Math.random() * 905);
        url = "https://pokeapi.co/api/v2/pokemon/" + id;
        break;

      default:
        url = "https://pokeapi.co/api/v2/pokemon/" + name;
        break;
    }

    await fetch(url)
      .then(async (res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          pokeDeck.insertAdjacentHTML("beforeend", noPokemon);
          return;
        }
      })
      .then((pokemon) => {
        if (pokemon !== undefined) {
          if ("results" in pokemon) {
            pokemon.results.map((poke) => {
              getPokemon(poke.name);
            });
          } else {
            setPokemon(pokemon);
          }
        }
      })
      .catch((error) => console.log(error));
  } else {
    pokeDeck.insertAdjacentHTML("beforeend", noPokemon);
  }
}
