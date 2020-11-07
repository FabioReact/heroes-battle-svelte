<script>
	// Importation des composants
	import Card from "./Card.svelte";
	import { fight } from "./fight";

	// Déclatation des variables
	let firstId = 346;
	let firstHeroData = null;
	let secondId = 70;
	let secondHeroData = null;
	let winner = null

	// Fonction en cas de soumission du formulaire
	const getHero = async (event, formNumber) => {
		event.preventDefault();

		const selectedId = formNumber === 1 ? firstId : secondId;

		const response = await fetch(
			`https://www.superheroapi.com/api/10224060538640303/${selectedId}`
		);
		const data = await response.json();
		if (formNumber === 1) {
			firstHeroData = data;
		} else {
			secondHeroData = data;
		}
	};

	// Start Fight
	const startFight = () => {
		const result = fight(firstHeroData.powerstats, secondHeroData.powerstats)
		winner = result === 1 ? firstId : secondId
		console.log(winner)
	}

	// Reset Function
	const reset = () => {
		firstId = 485;
		firstHeroData = null;
		secondId = 107;
		secondHeroData = null;
		winner = null
	}

</script>

<h1 class="text-center text-4xl font-semibold text-blue-600 my-4">Arène des héros</h1>
{#if firstHeroData && secondHeroData}
	<div class="flex-grow text-center">
		<button on:click={startFight} class="border border-red-500 bg-red-500 text-white rounded-md px-16 py-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">Fight</button>
		<button on:click={reset} class="border border-green-500 bg-green-500 text-white rounded-md px-16 py-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">Reset</button>
	</div>
{/if}
<section class="flex flex-wrap">
	<div class="w-3/6 text-center">
		{#if firstHeroData}
			<Card infoDuHero={firstHeroData} />
		{:else}
			<form on:submit={(event) => getHero(event, 1)}>
				<label for="hero-one">ID du premier super-héro:</label>
				<input
					type="number"
					min="1"
					max="731"
					bind:value={firstId}
					id="hero-one" />
				<button
					class="border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline">Rechercher</button>
			</form>
		{/if}
	</div>
	<div class="w-3/6 text-center">
		{#if secondHeroData}
			<Card infoDuHero={secondHeroData} />
		{:else}
			<form on:submit={(event) => getHero(event, 2)}>
				<label for="hero-two">ID du premier super-héro:</label>
				<input
					type="number"
					min="1"
					max="731"
					bind:value={secondId}
					id="hero-two" />
				<button
					class="border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline">Rechercher</button>
			</form>
		{/if}
	</div>
</section>