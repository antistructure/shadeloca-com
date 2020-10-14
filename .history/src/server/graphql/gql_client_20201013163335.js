import ApolloClient from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { WebSocketLink } from "apollo-link-ws"
import { split } from "apollo-link"
import { HttpLink } from "apollo-link-http"
import { getMainDefinition } from "apollo-utilities"
import ws from 'ws'

const wsLinkUri = `ws://${process.env.GRAPHQL_ENDPOINT}`

const headers = {
  'authorization': process.env.DB_AUTH_HEADERS,
  'content-type': 'application/json'
}
const getHeaders = () => headers

const cache = new InMemoryCache()

const wsLink = new WebSocketLink({
  // uri: "ws://localhost:8080/v1/graphql",
  uri: wsLinkUri,
  options: {
    reconnect: true,
    lazy: true,
    connectionParams: () => {
      return { headers: getHeaders() };
    },
    ws
  },
})

const httpLink = new HttpLink({
  // uri: "http://localhost:8080/v1/graphql",
  uri: process.env.GRAPHQL_ENDPOINT,
  headers: getHeaders()
})

const link = split(({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === "OperationDefinition" && operation === "subscription"
  },
  wsLink,
  httpLink
);

export const gql_client = new ApolloClient({
  link,
  cache
})
