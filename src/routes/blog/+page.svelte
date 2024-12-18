<script lang="ts">
	import { formattedDate } from '../../lib/format-date';

	let { data } = $props();
</script>

<div class="posts">
	{#each data.posts as post}
		<a href={`/blog/${post.slug}`}>
			<card>
				<h3>{post.metadata.title}</h3>
				<p>
					{post.metadata.subtitle} -
					<span class="published-at">{formattedDate(post.metadata.date)}</span>
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
		background-color: #c8c8c8;
		color: #181818;
		transform: translateY(10%);
		transition: all 0.2s ease-in-out;
	}

	h3 {
		text-transform: uppercase;
	}

	.published-at {
		font-weight: 400;
	}
</style>
