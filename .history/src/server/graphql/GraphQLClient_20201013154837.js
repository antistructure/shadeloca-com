import ApolloClient from 'apollo-boost'
import { setClient } from 'svelte-apollo'

const graphqlClient = new ApolloClient({
  uri: process.env.GRAPHQL_ENDPOINT,
  headers: process.env.DB_AUTH_HEADERS
})

setClient(graphqlClient);