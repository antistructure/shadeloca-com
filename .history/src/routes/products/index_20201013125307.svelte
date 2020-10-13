<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch('/data.json')
    const employees = await res.json()

    return { employees }
  }
</script>

<script lang="typescript">
  export const employees
</script>

<style></style>

<h2>All Current Products</h2>
