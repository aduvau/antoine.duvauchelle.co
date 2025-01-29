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
			<p>Published on {formattedDate(data.meta.date)}</p>
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

	hgroup h3 {
		font-weight: 500;
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

	.content {
		padding-bottom: 2rem;
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

	.content :global(strong) {
		font-weight: 700;
	}

	.content :global(pre) {
		margin: 2rem 0;
	}

	.content :global(code) {
		background-color: var(--brand);
		color: var(--dark);
	}

	.content :global(pre code) {
		all: unset;
	}

	.content :global(.content-li) {
		position: relative;
		transform: scale(0.3) translateY(-50%);
	}

	.content :global(img) {
		border-radius: 0.4rem;
		width: 100%;
	}

	/* This is for content purpose only. */
	/* Todo: let's find a better way than having all the CSS of blog posts content here */
	.content :global(audio.content-audio-1) {
		margin: 1rem 0;
		width: 100%;
		border: 1px solid var(--lighter);
	}

	.content :global(.audio-wrapper-2) {
		background: var(--unicorn);
		margin: 1rem 0;
		width: 100%;
	}

	.content :global(.wrapper-1) {
		aspect-ratio: 3/2;
		background: var(--unicorn);
		border: none;
		border-radius: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 1rem 0;
		transition:
			transform 0.2s ease-in-out,
			box-shadow 0.3s ease-in-out;
		width: 200px;
	}

	.content :global(.wrapper-1:hover) {
		box-shadow:
			10px 10px 15px rgba(255, 154, 158, 0.4),
			20px 20px 25px rgba(168, 140, 209, 0.3),
			30px 30px 35px rgba(142, 197, 252, 0.2);
		transform: rotate3d(1, -1, 0, 25deg) scale(1.05);
		transition:
			transform 0.2s ease-in-out,
			box-shadow 0.3s ease-in-out;
	}
	.content :global(.wrapper-1 button) {
		cursor: pointer;
		transition: transform 0.2s ease-in-out;
	}

	.content :global(.wrapper-1:hover button) {
		transition: transform 0.2s ease-in-out;
		transform: scale(1.25);
	}
</style>
