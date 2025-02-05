<script lang="ts">
	import Cube from '../../lib/Cube.svelte';

	let { length, visibleEls } = $props();
</script>

<div class="cubes">
	{#each Array.from({ length }) as _, i}
		{@const id = length - 1 - i}
		<Cube
			id={id.toString()}
			aria="show-biography"
			turned={visibleEls.indexOf(id) !== -1}
			style={`--duration: ${1 - i * 0.1}s; --delay: ${i - i * 0.2}s; --bottom: ${2 + i * 2}rem; --end-delay:
		${length - 1 + i * 0.015}s;`}
			onclick={() => {
				const index = visibleEls.indexOf(id);

				if (index === -1) {
					visibleEls.push(id);
				} else {
					visibleEls.splice(index, 1);
				}
			}}
		/>
	{/each}
</div>

<style>
	.cubes {
		display: flex;
		align-items: flex-start;
		flex-direction: column-reverse;
		position: relative;
		width: 20%;
	}

	@media (max-width: 720px) {
		.cubes {
			display: none;
		}
	}
</style>
