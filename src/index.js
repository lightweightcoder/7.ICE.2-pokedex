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

console.log(pokedex);

function PokedexEntries({ pokedexEntries }) {
  console.log('pokedexEntries', pokedexEntries);
  const pokedexEntriesJsx = Object.keys(pokedexEntries).map((key) => {
    console.log('pokedexEntries[key].en', pokedexEntries[key].en);

    return (
      <li key={key}>
        <p>
          { key }
          :
          { pokedexEntries[key].en }
        </p>
      </li>
    );
  });

  console.log('Object.keys(pokedexEntries)', Object.keys(pokedexEntries));
  console.log('pokedexEntriesJsx', pokedexEntriesJsx);

  return (
    <ul>
      {pokedexEntriesJsx}
    </ul>
  );
}

const pokemonList = pokedex.map((onePokemon) => (
  <li>
    <p>{onePokemon.names.en}</p>
    <PokedexEntries pokedexEntries={onePokemon.pokedex_entries} />
  </li>
));

function Pokemon() {
  const myEL = (
    <div>
      <ul>
        {pokemonList}
      </ul>
    </div>
  );

  return myEL;
}

// Create root element to render other elements into, add root element to DOM.
const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

// Render the myEl JSX element into the root element with React.
render(<Pokemon />, rootElement);
