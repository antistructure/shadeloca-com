<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch('/data.json')
    const employees = await res.json()

    return { employees }
  }
</script>

<script lang="ts">
  export let employees
</script>

<style></style>

<h2>All Current Products</h2>
