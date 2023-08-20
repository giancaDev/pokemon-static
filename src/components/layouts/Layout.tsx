import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Navbar } from '@/components/ui';

type LayoutProps = {
  title?: string;
};

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Giancarlo Herrera' />
        <meta name='description' content='Información sobre el pokemon XXXXXX' />
        <meta name='keywords' content='XXXXXX, pokemon, pokedex' />
      </Head>
      <Navbar />
      <main
        style={{
          padding: '0 20px',
        }}>
        {children}
      </main>
    </>
  );
};
