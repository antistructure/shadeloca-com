<script lang="ts">
	import { onMount } from 'svelte'

	onMount(() => {
		console.log('this is in the browser')
	})
</script>

<style>
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Shadeloca</h1>