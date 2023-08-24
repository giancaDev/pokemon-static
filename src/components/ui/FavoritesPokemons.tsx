import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from '@/components/ui/FavoriteCardPokemon';

type FavoritesPokemonsProps = {
  pokemons: number[];
};

export const FavoritesPokemons: FC<FavoritesPokemonsProps> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {pokemons.map((pokemonId) => (
        <FavoriteCardPokemon key={pokemonId} pokemonId={pokemonId} />
      ))}
    </Grid.Container>
  );
};
