import { FC } from 'react';
import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';

export const Navbar: FC = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
        backgroundColor: theme?.colors.gray900.value,
      }}>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='icono de la aplicación'
        width={70}
        height={70}
      />
      <Text color='white' h2>
        P
      </Text>
      <Text color='white' h3>
        okémon
      </Text>

      <Spacer css={{ flex: 1 }} />

      <Text color='white'>Favorites</Text>
    </div>
  );
};
