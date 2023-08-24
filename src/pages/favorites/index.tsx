import { FC, useEffect, useState } from 'react';
import { Layout } from '@/components/layouts';
import { FavoritesPokemons, NoFavorites } from '@/components/ui';
import { favorites } from '@/utils';

const FavoritesPage: FC = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);
  const isThereAnyFavoritePokemon = favoritesPokemons.length > 0;

  useEffect(() => {
    setFavoritesPokemons(favorites.getAll());
  }, []);

  return (
    <Layout title='Pokémons - Favoritos'>
      {isThereAnyFavoritePokemon ? <FavoritesPokemons pokemons={favoritesPokemons} /> : <NoFavorites />}
    </Layout>
  );
};

export default FavoritesPage;
