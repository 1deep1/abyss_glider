import fetch from 'cross-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://api-eu-central-1.graphcms.com/v2/cl41kn5pd3bu601xjhoka1y52/master', fetch }),
    cache: new InMemoryCache()
});

export default client;