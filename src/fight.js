const stats1 = {
	intelligence: 69,
	strength: 32,
	speed: 50,
	durability: 100,
	power: 100,
	combat: 100,
};

const stats2 = {
	intelligence: 88,
	strength: 52,
	speed: 33,
	durability: 25,
	power: 100,
	combat: 90,
};

// Ceci est un export nommé, je dois importer cette fonction par son nom
// import { fight } from "./fight"
export const fight = (statsHeroOne, statsHeroTwo) => {

	/* Exemple pour comprendre la destructuration:
		Les trois lignes suivantes sont équivalentes à...
	const speed = statsHeroOne.speed;
	const power = statsHeroOne.power;
	const combat = statsHeroOne.combat;
		...cette écriture:
	const { speed, power, combat } = statsHeroOne;
	*/
	const monTableau = ["clé", "valeur"];
	// const key = monTableau[0];
	// const value = monTableau[1];
	const [key, value] = monTableau;

	for (const [key, value] of Object.entries(statsHeroOne)) {
		statsHeroOne[key] = parseInt(value)
	}

	for (const [key, value] of Object.entries(statsHeroTwo)) {
		statsHeroTwo[key] = parseInt(value)
	}

	// points de vie
	const heroOneHP =
		(statsHeroOne.durability +
			statsHeroOne.combat +
			statsHeroOne.intelligence / 2) *
		10;
	console.log(`HP du premier héro: ${heroOneHP}`)

	const heroTwoHP =
		(statsHeroTwo.durability +
			statsHeroTwo.combat +
			statsHeroTwo.intelligence / 2) *
		10;
	console.log(`HP du second héro: ${heroTwoHP}`)

	// valeur d'attaque
	const heroOneAttack =
		(statsHeroOne.strength +
			statsHeroOne.power +
			statsHeroOne.intelligence / 2) *
		(statsHeroOne.speed / 100);
	console.log(`Attaque du premier héro: ${heroOneAttack}`)

	const heroTwoAttack =
		(statsHeroTwo.strength +
			statsHeroTwo.power +
			statsHeroTwo.intelligence / 2) *
		(statsHeroTwo.speed / 100);
	console.log(`Attaque du second héro: ${heroTwoAttack}`)

	const turnsToDefeatHeroOne = heroOneHP / heroTwoAttack;
	const turnsToDefeatHeroTwo = heroTwoHP / heroOneAttack;

	// console.log(`Nombre de tours pour venir à bout du premier héro: ${turnsToDefeatHeroOne}`)
	// console.log(`Nombre de tours pour venir à bout du second héro: ${turnsToDefeatHeroTwo}`)

	const winner = turnsToDefeatHeroOne > turnsToDefeatHeroTwo ? 1 : 2;
	return winner;
};

// Soit exporter une fonction en particulier qui gardera son nom

// Export par défaut, je peux renommer cette fonction comme je le voudrais lors de l'import. J'écrirais l'import de cette façon: 	import maFonctionFight from "./fight"
// export default fight

// Précision: je ne peux faire qu'un seul export par défaut, mais je peux faire autant d'export nommé que je souhaite