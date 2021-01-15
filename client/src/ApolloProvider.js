import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client'
import App from './App'

const client = new ApolloClient({ uri: process.env.REACT_APP_API_NODE, cache: new InMemoryCache() })

const ApolloProvider = () => (
  <Provider client={client}>
    <App />
  </Provider>
)

export default ApolloProvider
