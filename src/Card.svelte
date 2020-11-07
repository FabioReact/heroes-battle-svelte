<script>
	export let infoDuHero
	// const {intelligence, strength, speed, durability, power, combat} = infoDuHero.powerstats
</script>

<div class="max-w-xs rounded-md overflow-hidden shadow-lg mx-auto">
	<img class="w-full" src={infoDuHero.image.url} alt="Batman">
	<div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{infoDuHero.name}</div>
    <div class="text-lg">{infoDuHero.biography["full-name"]}</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
		</p>
	</div>
	<div class="px-6 py-2">
    <span class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">intelligence: {infoDuHero.powerstats.intelligence}</span>
    <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">strength: {infoDuHero.powerstats.strength}</span>
    <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">speed: {infoDuHero.powerstats.speed}</span>
    <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 mr-2 mb-2">durability: {infoDuHero.powerstats.durability}</span>
    <span class="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-700 mr-2 mb-2">power: {infoDuHero.powerstats.power}</span>
    <span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 mr-2 mb-2">combat: {infoDuHero.powerstats.combat}</span>
  </div>
</div>