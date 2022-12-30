<script>
	import DraftHeader from '../components/DraftHeader.svelte';
	import PageHeader from '../components/PageHeader.svelte';
	import SelectionForm from '../components/SelectionForm.svelte';
</script>

<svelte:head>
	<title>Instrument Fingering Charts</title>
</svelte:head>

<DraftHeader />
<PageHeader />
<SelectionForm />

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
