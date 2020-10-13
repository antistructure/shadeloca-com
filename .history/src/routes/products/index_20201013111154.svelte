<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch('/products.json')
    const products = await res.json()

    return { products }
  }
</script>