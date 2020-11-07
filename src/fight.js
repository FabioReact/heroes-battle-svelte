export const fight = (heroOne, heroTwo) => {
	for (const [key, value] of Object.entries(heroOne)) {
		heroOne[key] = parseInt(value)
	}

	for (const [key, value] of Object.entries(heroTwo)) {
		heroTwo[key] = parseInt(value)
	}

	heroOne.health = (heroOne.durability + heroOne.combat + (heroOne.intelligence / 2)) * 10
	heroOne.attack = (heroOne.strength + heroOne.power + (heroOne.intelligence / 2)) * (heroOne.speed / 100)

	heroTwo.health = (heroTwo.durability + heroTwo.combat + (heroTwo.intelligence / 2)) * 10
	heroTwo.attack = (heroTwo.strength + heroTwo.power + (heroTwo.intelligence / 2)) * (heroTwo.speed / 100)

	console.log(`Hero 1: health: ${heroOne.health} - attack ${heroOne.attack}`)
	console.log(`Hero 2: health: ${heroTwo.health} - attack ${heroTwo.attack}`)

	const turnsToDefeatHeroOne = heroOne.health / heroTwo.attack
	const turnsToDefeatHeroTwo = heroTwo.health / heroOne.attack

	console.log(turnsToDefeatHeroOne, turnsToDefeatHeroTwo)
	return turnsToDefeatHeroOne > turnsToDefeatHeroTwo ? 1 : 2;
}