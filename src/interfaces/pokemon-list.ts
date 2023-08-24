import { Sprites } from '@/interfaces/pokemon-full';

export interface SmallPokemon {
  name: string;
  url: string;
  id: number;
  img: string;
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites;
}

export interface PokemonListResponse {
  count: number;
  next: string;
  previous?: string;
  results: SmallPokemon[];
}
