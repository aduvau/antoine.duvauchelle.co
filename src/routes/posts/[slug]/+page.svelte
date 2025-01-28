<script lang="ts">
	import { formattedDate } from '../../../lib/format-date';

	let { data } = $props();
</script>

<svelte:head>
	<title>{`${data.meta.title} - Antoine Duvauchelle`}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={`${data.meta.title} - Antoine Duvauchelle`} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Publié le {formattedDate(data.meta.date)}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<data.content />
</article>

<style>
	h1 {
		color: #ffde21;
		font-size: 3.2rem;
		font-weight: 400;
	}
</style>
