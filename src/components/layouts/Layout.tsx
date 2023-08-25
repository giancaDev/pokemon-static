import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Navbar } from '@/components/ui';

type LayoutProps = {
  title?: string;
};

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Giancarlo Herrera' />
        <meta name='description' content='Información sobre el pokemon XXXXXX' />
        <meta name='keywords' content='XXXXXX, pokemon, pokedex' />

        <meta property='og:title' content={`Información sobre ${title}`} />
        <meta property='og:description' content={`Esta es la página sobre ${title}`} />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
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
