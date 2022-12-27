<script>
	import PageHeader from '../components/PageHeader.svelte';
	let name = 'world';
</script>

<svelte:head>
	<title>Instrument Fingering Charts</title>
</svelte:head>

<PageHeader />

<h1>Hello {name}!</h1>

<style>
	:global(*) {
		box-sizing: border-box;
	}
	:global(body) {
		font-size: 0.75rem;
		margin: 0 auto;
	}

	@media only screen and (min-width: 768px) {
		:global(body) {
			font-size: 2rem;
		}
	}
</style>
