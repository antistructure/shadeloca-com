import createClient from 'svql'

const client = createClient({
  url: process.env.GRAPHQL_ENDPOINT,
  headers: {
    'authorization': process.env.DB_AUTH_HEADERS
  }
})

export default client
