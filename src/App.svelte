<script>
	// Importation des composants
	import Battle from "./Battle.svelte";
	import HeroesList from "./HeroesList.svelte"

	// Déclaration des variables
	let pageActive = "battle"
</script>

<nav>
	<button on:click={() => pageActive = "list"}>Liste des héros</button>
	<button on:click={() => pageActive = "battle"}>Battle</button>
</nav>
<main>
	{#if pageActive === "battle"}
	<Battle />
	{:else if pageActive === "list"}
	<HeroesList />
	{:else}
	<div>
		<p>404 Page not found</p>
	</div>
	{/if}
</main>