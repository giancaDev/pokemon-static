export interface SmallPokemon {
  name: string;
  url: string;
  id: number;
  img: string;
}

export interface PokemonListResponse {
  count: number;
  next: string;
  previous?: string;
  results: SmallPokemon[];
}
