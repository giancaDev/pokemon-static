import { GetStaticPaths, GetStaticProps } from 'next';
import pokeApi from '@/api/pokeApi';
import { PokemonPage } from '@/components/ui';

const PokemonPageById = PokemonPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { [key: string]: string };
  const pokemon = await pokeApi.getPokemonById(id);

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
    revalidate: 86400,
  };
};

export default PokemonPageById;
