import axios from 'axios';
import { Pokemon, PokemonListResponse, PokemonResponse } from '@/interfaces';
import { getPokemonMapper } from '@/mapper';

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

const getPokemonInformation = async (pokemonId: string): Promise<Pokemon> => {
  const { data } = await pokeApi.get<PokemonResponse>(`/pokemon/${pokemonId}`);
  return getPokemonMapper(data);
};

const getPokemonByName = (name: string): Promise<Pokemon> => {
  return getPokemonInformation(name);
};

const getPokemonById = (id: string): Promise<Pokemon> => {
  return getPokemonInformation(id);
};

const getPokemonList = async (): Promise<PokemonListResponse> => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  return data;
};

export default { getPokemonByName, getPokemonById, getPokemonList };
