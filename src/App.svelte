<script>
	// Importation des composants
	import Navbar from "./Navbar.svelte";
	import Battle from "./Battle.svelte";
	import HeroesList from "./HeroesList.svelte";

	// Déclatation des variables
	let activePage = "list";

	// Set active page
	const setActivePage = page => {
		activePage = page;
	};
</script>

<Navbar active={activePage} {setActivePage} />
<main class="max-w-6xl mx-auto">
{#if activePage === 'battle'}
	<Battle />
{:else if activePage === 'list'}
	<HeroesList />
{/if}
	</main>
