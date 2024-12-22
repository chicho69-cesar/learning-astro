import type { FavoritePokemon } from '@/interfaces/favorite-pokemon';
import { createSignal, For } from 'solid-js';
import FavoritePokemonCard from './FavoritePokemonCard';

/* Usamos una isla para mostrar los pokemons debido a que como esta información
se esta guardando en el localstorage, una pagina que se genera del lado del 
servidor no tendra acceso a dicha información */
const getLocalStoragePokemons = (): FavoritePokemon[] => {
  const favoritePokemons = JSON.parse(
    localStorage.getItem('favorites') ?? '[]'
  );

  return favoritePokemons;
};

export default function FavoritePokemons() {
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      <For each={pokemons()}>
        {(pokemon) => (
          <FavoritePokemonCard pokemon={pokemon} />
        )}
      </For>
    </div>
  );
}
