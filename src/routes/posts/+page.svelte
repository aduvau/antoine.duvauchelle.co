<script lang="ts">
	import Container from '../../components/Container.svelte';
	import Cube from '../../components/Cube.svelte';
	import { formattedDate } from '../../lib/format-date';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog - Antoine Duvauchelle</title>
	<meta property="og:type" content="page" />
	<meta property="og:title" content="Blog - Antoine Duvauchelle" />
</svelte:head>

<Container>
	<div class="posts">
		{#each data.posts as post, i}
			<a href={`/posts/${post.slug}`}>
				<card>
					<div class="cube-container">
						<Cube id={null} aria={null} onclick={null} className="no-button" style={null} />
					</div>
					<div class="content">
						<h3>
							{post.title}
						</h3>
						<p>
							{post.subtitle} -
							<span class="published-at">{formattedDate(post.date)}</span>
						</p>
					</div>
				</card>
			</a>
		{:else}
			<p>Désolé, il n'y a rien par ici.</p>
		{/each}
	</div>
</Container>

<style>
	.posts {
		display: flex;
		flex-direction: column;
		margin-top: 1.2rem;
	}

	card {
		position: relative;
		transition: all 0.2s ease-in-out;
		align-items: flex-start;
		gap: 1rem;
		position: relative;
		display: flex;
	}

	.cube-container {
		flex: 1;
	}

	card:hover :global(.cube.no-button) {
		transition: transform 0.2s ease-in-out;
		transform: rotate(180deg) scale(0.5);
	}

	h3 {
		color: var(--brand);
		font-size: 2rem;
		font-weight: 400;
	}

	.published-at {
		font-weight: 400;
	}
</style>
