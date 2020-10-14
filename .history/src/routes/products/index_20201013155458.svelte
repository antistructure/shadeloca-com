<script context="module">
  import gql from 'graphql-tag'
  import graphqlClient from '../../server/graphql/GraphQLClient'
  import { PRODUCTS_QUERY } from '../../server/graphql/queries/Product'

  export async function preload() {
    return {
      cache: await graphqlClient.query({ query: PRODUCTS_QUERY })
    }
  }
</script>

<script>
  import { restore, query } from 'svelte-apollo'

  export let cache

  restore(graphqlClient, PRODUCTS_QUERY, cache.data)

  const products = query(graphqlClient, { query: PRODUCTS_QUERY })

  console.log(products)
</script>

<!-- <script context="module">
  export async function preload(page, session) {
    const products = await this.fetch('/products.json').then(resp => resp.json());

    return { products }
  }
</script>

<script lang="ts">
  export let products
  console.log(products)
</script> -->

<style></style>

<h2>All Current Products</h2>
