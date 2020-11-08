<script>
	// Je cherche à récupérer les données passées à mon composant
	// Dans ce cas précis, je veux récupérer "infos"
	export let infos

	// let superHeroData = {};
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg">
	<img class="w-full" src={infos?.image?.url} alt="Sunset in the mountains">
	<div class="px-6 py-4">
		<div class="font-bold text-xl mb-2">{infos?.["name"]}</div>
		<div class="text-lg mb-2">{infos?.biography?.["full-name"]}</div>
		<p class="text-gray-700 text-base">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			Voluptatibus quia, nulla! Maiores et perferendis eaque,
			exercitationem praesentium nihil.
		</p>
	</div>
	<div class="px-6 pt-4 pb-2">
		<span
			class="inline-block {infos?.powerstats?.intelligence > 50 ? "bg-blue-200 text-blue-700" : "bg-blue-100 text-blue-500"} rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">intelligence: {infos?.powerstats?.intelligence}</span>
		<span
			class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">strength: {infos?.powerstats?.strength}</span>
		<span
			class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">speed: {infos?.powerstats?.speed}</span>
		<span
			class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 mr-2 mb-2">durability: {infos?.powerstats?.durability}</span>
		<span
			class="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-700 mr-2 mb-2">power: {infos?.powerstats?.power}</span>
		<span
			class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 mr-2 mb-2">combat: {infos?.powerstats?.combat}</span>
	</div>
</div>