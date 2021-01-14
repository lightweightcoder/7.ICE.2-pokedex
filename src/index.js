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
    <p key={key}>
      {`${key}: ${pokedexEntries[key].en}`}
    </p>
  ));

  return pokedexEntriesJsx;
}

// component for a pokemon types
function PokemonTypes({ types }) {
  const typesEl = types.map((type, index) => {
    const lowerCaseType = type.toLowerCase();

    return (
      <span key={`${lowerCaseType}_${index}`}>
        <div className={`icon ${lowerCaseType}`}>
          <img src={`/icons/${lowerCaseType}.svg`} alt={lowerCaseType} />
        </div>
      </span>
    );
  });

  return typesEl;
}

// component for a pokemon
function Pokemon({ pokemonData }) {
  const myEL = (
    <li>
      {`${pokemonData.names.en} types: `}
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
// eslint-disable-next-line max-len
const pokemonsJsx = pokedex.map((pokemonData) => <Pokemon key={pokemonData.names.en} pokemonData={pokemonData} />);

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
render(pokemonsContainer, rootElement);
