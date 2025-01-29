<script lang="ts">
	import 'prismjs';
	import 'prismjs/themes/prism-tomorrow.css';
	import { formattedDate } from '../../../lib/format-date';
	import Container from '../../../components/Container.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{`${data.meta.surtitle} : ${data.meta.title} - Antoine Duvauchelle`}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={`${data.meta.title} - Antoine Duvauchelle`} />
</svelte:head>

<Container>
	<article>
		<hgroup>
			<h4>{data.meta.surtitle}</h4>
			<h1>{data.meta.title}</h1>
			<h3>{data.meta.subtitle}</h3>
			<p>Publié le {formattedDate(data.meta.date)}</p>
		</hgroup>

		{#if data.meta.categories}
			<div class="tags">
				{#each data.meta.categories as category}
					<span class="tag">{category}</span>
				{/each}
			</div>
		{/if}

		<div class="content">
			<data.content />
		</div>
	</article>
</Container>

<style>
	hgroup {
		margin-bottom: 2rem;
	}

	hgroup p {
		margin-top: 0.5rem;
	}

	hgroup h4 {
		text-transform: uppercase;
		font-weight: 200;
	}

	.tags {
		display: flex;
		gap: 0.4rem;
		margin: 2rem 0;
	}

	.tag {
		background-color: var(--lighter);
		color: var(--dark);
		margin: 0.5rem 0;
		padding: 0 0.2rem;
	}

	.tag:hover {
		background-color: var(--brand);
	}

	.content :global(h2) {
		color: var(--brand);
		font-size: 1.4rem;
		font-style: normal;
		margin-bottom: 0.8rem;
	}

	.content :global(blockquote) {
		border: 1px dashed var(--brand);
		border-radius: 0.4rem;
		padding: 0.4rem 0.8rem;
		margin: 2rem 0;
	}

	.content :global(p) {
		margin-bottom: 0.5rem;
	}

	.content :global(audio) {
		margin: 1rem 0;
		width: 100%;
		border: 1px solid var(--lighter);
	}

	.content :global(pre) {
		margin: 2rem 0;
	}
</style>
