<script lang="ts">
	import { formattedDate } from '../../lib/format-date';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog - Antoine Duvauchelle</title>
	<meta property="og:type" content="page" />
	<meta property="og:title" content="Blog - Antoine Duvauchelle" />
</svelte:head>

<div class="posts">
	{#each data.posts as post}
		<a href={`/posts/${post.slug}`}>
			<card>
				<div class="cube"></div>
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
		<p>Sorry, we have nothing to show you.</p>
	{/each}
</div>

<style>
	.posts {
		display: flex;
		flex-direction: column;
	}

	.cube {
		aspect-ratio: 1;
		width: 32px;
		background-color: #ffde21;
		border: 1px solid #ffde21;
		left: 0;
		top: 50%;
		transform: scale(0.5);
		transition: transform 0.2s ease-in-out;
		margin-top: 0.5rem;
	}

	.cube::before {
		content: '';
		height: 13px;
		width: 32px;
		position: absolute;
		border: 1px solid #ffde21;
		transform: rotateX(45deg) skew(-45deg) translate(8px, 1px);
		left: 0;
		bottom: 100%;
	}

	.cube::after {
		content: '';
		height: 32px;
		width: 19px;
		position: absolute;
		border: 1px solid #ffde21;
		transform: rotateY(45deg) skewY(-26deg) translate(-2px, -5px);
		left: 100%;
		bottom: 0;
	}

	card {
		padding: 1.6rem;
		position: relative;
		transition: all 0.2s ease-in-out;
		align-items: flex-start;
		gap: 1rem;
		position: relative;
		display: flex;
	}

	card:hover .cube {
		transition: transform 0.2s ease-in-out;
		transform: rotate(180deg) scale(0.5);
	}

	h3 {
		color: #ffde21;
		font-size: 2rem;
		font-weight: 400;
	}

	.published-at {
		font-weight: 400;
	}
</style>
