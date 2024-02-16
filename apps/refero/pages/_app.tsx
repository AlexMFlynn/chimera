import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Welcome to refero!</title>
      </Head>
      <main className="app">
        <ChakraProvider>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ChakraProvider>
      </main>
    </>
  );
}

export default App;
