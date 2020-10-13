<script context="module">
  export async function preload(page, session) {
    const products = await this.fetch('/products.json').then(resp => resp.json());

    return { products }
  }
</script>

<script lang="ts">
  export let products
  console.log(products)
</script>

<style></style>

<h2>All Current Products</h2>
