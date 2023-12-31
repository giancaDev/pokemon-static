import { FC } from 'react';
import { SmallPokemon } from '@/interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

type PokemonCardProps = {
  pokemon: SmallPokemon;
};

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const { id, name, img } = pokemon;
  const router = useRouter();

  const onClick = (): void => {
    router.push(`/name/${name}`);
  };

  return (
    <Grid xs={6} sm={3} xl={1} key={id} onClick={onClick}>
      <Card hoverable clickable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width='100%' height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
