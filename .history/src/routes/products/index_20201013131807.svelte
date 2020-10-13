<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch('/products.json')
    const products = await res.json()

    return { products }
  }
</script>

<script lang="ts">
  export let products
  console.log(products)
</script>

<style></style>

<h2>All Current Products</h2>
