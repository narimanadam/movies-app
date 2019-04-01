import React from 'react'
import App, { Container } from 'next/app'
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import fetch from 'node-fetch';

import Page from '../components/Page';

const client = new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
        uri: 'http://localhost:4000/',
        fetch,
    }),
    cache: new InMemoryCache(),
});

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <ApolloProvider client={client}>
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </ApolloProvider>
            </Container>
        )
    }
}

export default MyApp