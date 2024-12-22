import type { FavoritePokemon } from '@/interfaces/favorite-pokemon';
import { Show, createSignal } from 'solid-js';

interface Props {
  pokemon: FavoritePokemon;
}

export default function FavoritePokemonCard({ pokemon }: Props) {
  const [isVisible, setIsVisible] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  /* En este caso como en el anterior usamos una isla, por dos razones, una que
  este componente se usara como hijo de otra isla y no se puede usar un componente de
  astro como hijo de una isla. Y segundo porque manipulamos la información que esta
  guardada en el localstorage, y dicha información no se puede manipular directamente
  desde un componente de astro */
  const deleteFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem('favorites') ?? '[]'
    ) as FavoritePokemon[];

    const newFavorites = favorites.filter((p) => p.id !== pokemon.id);

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsVisible(false);
  };

  return (
    <Show when={isVisible()}>
      <div class='flex flex-col justify-center items-center'>
        <a href={`/pokemons/${pokemon.name}`}>
          <img
            src={imageSrc}
            alt={pokemon.name}
            width='96'
            height='96'
            style={`view-transition-name: ${pokemon.name}-image`}
          />

          <p class='capitalize'>
            #{pokemon.id} {pokemon.name}
          </p>
        </a>

        <button onClick={deleteFavorite} class='text-red-400'>
          Borrar
        </button>
      </div>
    </Show>
  );
};
