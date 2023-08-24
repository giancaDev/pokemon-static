import { GetStaticPaths, GetStaticProps } from 'next';
import pokeApi from '@/api/pokeApi';
import { PokemonPage } from '@/components/ui';
import { Pokemon } from '@/interfaces';

const PokemonPageById = PokemonPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { [key: string]: string };
  const pokemon: Pokemon = await pokeApi.getPokemonById(id);

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonPageById;
