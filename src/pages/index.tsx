import { Layout } from '@/components/layouts';
import { GetStaticProps } from 'next';
import pokeApi from '@/api/pokeApi';
import { FC } from 'react';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';

type PageProps = {
  pokemons: SmallPokemon[];
};

const Page: FC<PageProps> = ({ pokemons }) => {
  console.log('pokemons:', pokemons);

  return (
    <Layout title='Listado de pokemons'>
      <ul>
        {pokemons.map(({ name, id }) => (
          <li key={id}>{`${id} - ${name}`}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Page;
