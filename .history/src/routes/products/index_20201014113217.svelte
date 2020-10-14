<script context="module">
  import { client } from '../../server/graphql/client'
  import { PRODUCTS_QUERY } from '../../server/graphql/queries/Products'

  export async function preload() {
    return {
      cache: await client.query({ query: PRODUCTS_QUERY })
    }
  }
  </script>

  <script>
    import { restore, query } from 'svelte-apollo'

    export let cache
    restore(client, PRODUCTS_QUERY, cache.data)

    const products = query(client, { query: PRODUCTS_QUERY })
    console.log(products)
  </script>

<style></style>

<h2>All Current Products</h2>
