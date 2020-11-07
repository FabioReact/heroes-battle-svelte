<script>
	import { heroes } from "./heroes";

</script>

<section>
	<h1 class="text-center text-4xl font-semibold text-blue-600 my-4">Liste des héros</h1>
	<ul class="flex flex-wrap">
		{#each heroes as hero (hero.id)}
			<li class="w-1/4"><span class="inline-block w-6 mr-4 text-right">{hero.id}</span>{hero.name}</li>
		{/each}
	</ul>
</section>