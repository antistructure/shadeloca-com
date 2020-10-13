<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch('/products.json')
    const employees = await res.json()

    return { employees }
  }
</script>

<script lang="ts">
  export let employees
  console.log(employees)
</script>

<style></style>

<h2>All Current Products</h2>
