<script lang="ts">
	import { formattedDate } from '../../lib/format-date';

	let { data } = $props();
</script>

<div class="posts">
	{#each data.posts as post}
		<a href={`/posts/${post.slug}`}>
			<card>
				<h3>{post.title}</h3>
				<p>
					{post.subtitle} -
					<span class="published-at">{formattedDate(post.date)}</span>
				</p>
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

	card {
		display: block;
		overflow: hidden;
		padding: 1.6rem;
		position: relative;
		transition: all 0.2s ease-in-out;
	}

	card:hover {
		background-color: #ffde21;
		color: #181818;
		transform: translateY(10%);
		transition: all 0.2s ease-in-out;
	}

	card:hover h3 {
		color: #181818;
	}

	h3 {
		color: #ffde21;
		font-size: 3.2rem;
		font-weight: 400;
	}

	.published-at {
		font-weight: 400;
	}
</style>
