<script>
	export let active;
	export let setActivePage;
</script>

<nav class="flex">
	<h2 class="mt-4 ml-4 mr-auto text-4xl transform -rotate-6">Heroes Arena</h2>
	<ul class="flex">
		<li on:click={() => setActivePage("list")}>Liste</li>
		<li on:click={() => setActivePage("battle")}>Battle</li>
	</ul>
</nav>
