import { GetStaticPaths, GetStaticProps } from 'next';
import pokeApi from '@/api/pokeApi';
import { PokemonPage } from '@/components/ui';

const PokemonPageByName = PokemonPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await pokeApi.getPokemonList();
  const pokemonNames: string[] = results.map(({ name }) => name);

  return {
    paths: pokemonNames.map((name) => ({
      params: { name },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params as { [key: string]: string };
  const pokemon = await pokeApi.getPokemonByName(name);

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonPageByName;
