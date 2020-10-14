<script context="module">
  import { get } from 'svelte/store'
  import client from '../../server/graphql/client'
  import { PRODUCTS_QUERY } from '../../server/graphql/queries/Product'

  export async function preload(page, session) {
    const products = await client.query(PRODUCTS_QUERY)

    return { products }
  }
</script>

<script>
  export let products
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
