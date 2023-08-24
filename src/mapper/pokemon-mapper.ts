import { Pokemon, PokemonResponse } from '@/interfaces';

export const getPokemonMapper = (response: PokemonResponse): Pokemon => {
  const { id, name, sprites } = response;

  return {
    id,
    name,
    sprites,
  };
};
