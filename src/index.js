/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import './styles.scss';
import React from 'react';
import { render } from 'react-dom';
import pokemon from './pokemon.json';

// array to store pokemons
const pokedex = [];

// store 20 pokemons
let count = 0;
for (const pokemonName in pokemon) {
  count += 1;
  console.log(`${pokemonName}: ${pokemon[pokemonName]}`);
  console.log(pokemon[pokemonName]);
  pokedex.push(pokemon[pokemonName]);
  if (count > 20) {
    break;
  }
}

console.log('pokedex', pokedex);

// component for pokedex entries of a pokemon
function PokedexEntries({ pokedexEntries }) {
  console.log('pokedexEntries', pokedexEntries);

  const pokedexEntriesJsx = Object.keys(pokedexEntries).map((key) => (
    <p>
      { key }
      {': '}
      { pokedexEntries[key].en }
    </p>
  ));

  return pokedexEntriesJsx;
}

// component for a pokemon types
function PokemonTypes({ types }) {
  const typesEl = types.map((type) => {
    const lowerCaseType = type.toLowerCase();

    return (
      <span>
        <div className={`icon ${lowerCaseType}`}>
          <img src={`/icons/${lowerCaseType}.svg`} />
        </div>
      </span>
    );
  });

  return typesEl;
}

// component for a pokemon
function Pokemon({ pokemonData }) {
  const myEL = (
    <li key={pokemonData.national_id}>
      {pokemonData.names.en}
      {' types: '}
      <PokemonTypes types={pokemonData.types} />
      <div>
        <h6>entries</h6>
        <PokedexEntries pokedexEntries={pokemonData.pokedex_entries} />
      </div>
    </li>
  );

  return myEL;
}

// array of jsx list elements that contain pokemon names in english
const pokemonsJsx = pokedex.map((pokemonData) => <Pokemon pokemonData={pokemonData} />);

const pokemonsContainer = (
  <div>
    <ul>
      {pokemonsJsx}
    </ul>
  </div>
);

// Create root element to render other elements into, add root element to DOM.
const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

// Render the myEl JSX element into the root element with React.
// render(<Pokemon />, rootElement);
render(pokemonsContainer, rootElement);
