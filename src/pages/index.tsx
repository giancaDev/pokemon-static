import { Layout } from '@/components/layouts';
import { GetStaticProps } from 'next';
import pokeApi from '@/api/pokeApi';
import { FC } from 'react';
import { SmallPokemon } from '@/interfaces';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '@/components/pokemon';

type PageProps = {
  pokemons: SmallPokemon[];
};

const Page: FC<PageProps> = ({ pokemons }) => {
  return (
    <Layout title='Listado de pokemons'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await pokeApi.getPokemonList();

  const pokemons: SmallPokemon[] = results.map((pokemon, index) => ({
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
