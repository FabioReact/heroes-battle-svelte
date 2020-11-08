<script>
	// Importation des composants
	import { fade } from 'svelte/transition';
	import HeroCard from "./HeroCard.svelte";
	import { fight } from "./fight";

	// Déclaration des variables
	let superHeroData = null;
	let superHeroId = 247;
	let superHeroData2 = null;
	let superHeroId2 = 729;
	let winner = null;

	// On va créer une fonction (getSuperhero) qui va nous permettre de récupérer les informations d'un superhéro
	const getSuperhero = (id, heroNumber) => {
		// On va utiliser la méthode fetch pour récupérer une donnée présente sur un autre serveur
		// Documentation: https://github.github.io/fetch/
		// fetch("https://www.superheroapi.com/api/10224060538640303/107").then(
		// 	response => {
		// 		response.json().then(data => {
		// 			console.log(data);
		// 		});
		// 	}
		// );
		// Récupère moi la réponse du site ENSUITE convertis moi cette réponse afin d'en obtenir les données ENSUITE affiche moi ces données

		fetch(`https://www.superheroapi.com/api/10224060538640303/${id}`)
			.then(response => response.json())
			.then(function (data) {
				if (heroNumber === 1) {
					superHeroData = data;
				} else if (heroNumber === 2) {
					superHeroData2 = data;
				}
			});
	};

	// Fonction Reset
	const reset = () => {
		superHeroData = null;
		superHeroData2 = null;
		winner = null;
	};

	// Fonction Start fight
	const startFight = () => {
		const result = fight(superHeroData.powerstats, superHeroData2.powerstats);
		winner = result === 1 ? superHeroId : superHeroId2;
		console.log(winner);
	};
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<!-- Challenge: Afficher l'image de notre super héro dans la balise img -->
<!-- Point de cours: Pour vérifier qu'un propriété d'un objet existe avant d'y accéder, pour peut mettre un "?" à la fin de cette propriété. Si celle-ci existe, on peut la lire, sinon, on arrête là le traitement pour éviter une erreur - Optional Chaining -->
<h1>Arène des Super-héros!</h1>
<!-- Je transfère à mon composant HeroCard une propriété nommé "infos" (nom arbitraire) qui contient l'objet "superHeroData" -->
<div>
	{#if superHeroData && superHeroData2}
		<button on:click={startFight}>Fight</button>
		<button on:click={reset}>Reset</button>
	{/if}
</div>
<div class="flex">
	<div>
		{#if !superHeroData}
			<form on:submit|preventDefault={getSuperhero(superHeroId, 1)}>
				<label for="heroOne">Id du héro:</label>
				<input
					type="number"
					min="1"
					max="731"
					id="heroOne"
					bind:value={superHeroId} />
				<button>Rechercher</button>
			</form>
		{:else if winner === null || winner === parseInt(superHeroData.id)}
			<div transition:fade>
				<HeroCard infos={superHeroData} />
			</div>
		{/if}
	</div>
	<div>
		{#if !superHeroData2}
			<form on:submit|preventDefault={getSuperhero(superHeroId2, 2)}>
				<label for="heroTwo">Id du héro:</label>
				<input
					type="number"
					min="1"
					max="731"
					id="heroTwo"
					bind:value={superHeroId2} />
				<button>Rechercher</button>
			</form>
		{:else if winner === null || winner === parseInt(superHeroData2.id)}
			<div transition:fade>
				<HeroCard infos={superHeroData2} />
			</div>
		{/if}
	</div>
</div>
