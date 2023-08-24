import { FC, useEffect, useState } from 'react';
import { favorites } from '@/utils';
import confetti from 'canvas-confetti';
import { Layout } from '@/components/layouts';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { Pokemon } from '@/interfaces';

type PokemonPageProps = {
  pokemon: Pokemon;
};

export const PokemonPage: FC<PokemonPageProps> = ({ pokemon }) => {
  const { id, name, sprites } = pokemon;
  const [isAlreadyInFavorites, setIsAlreadyInFavorites] = useState(false);

  const onToggleFavorite = (): void => {
    favorites.toggle(id);
    setIsAlreadyInFavorites(!isAlreadyInFavorites);

    if (!isAlreadyInFavorites) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
  };

  useEffect(() => {
    setIsAlreadyInFavorites(favorites.existsInFavorites(id));
  }, []);

  return (
    <Layout title={name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>
                {pokemon.name}
              </Text>
              <Button color='gradient' onClick={onToggleFavorite} ghost={!isAlreadyInFavorites}>
                {isAlreadyInFavorites ? 'Remover de favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction='row' display='flex' gap={0}>
                <Image src={sprites.front_default} alt={name} width={100} height={100} />
                <Image src={sprites.back_default} alt={name} width={100} height={100} />
                <Image src={sprites.front_shiny} alt={name} width={100} height={100} />
                <Image src={sprites.back_shiny} alt={name} width={100} height={100} />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};
