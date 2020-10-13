<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch('/data.json')
    const employees = await res.json()
  }
</script>

<script lang="ts">
</script>

<style></style>

<h2>All Current Products</h2>
