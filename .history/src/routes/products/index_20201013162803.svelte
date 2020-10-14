<script context="module">
  import { gql_client } from '../../server/graphql/gql_client'
  import { PRODUCTS_QUERY } from '../../server/graphql/queries/Product'

  export async function preload() {
    return {
      cache: await gql_client.query({ query: PRODUCTS_QUERY })
    }
  }
  </script>

  <script>
    import { restore, query } from 'svelte-apollo'

    export let cache
    restore(gql_client, PRODUCTS_QUERY, cache.data)

    const products = query(gql_client, { query: PRODUCTS_QUERY })
    console.log(products)
  </script>

<style></style>

<h2>All Current Products</h2>
