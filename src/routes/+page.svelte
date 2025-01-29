<script lang="ts">
	import Cube from '$lib/Cube.svelte';

	let visibleBio: number = $state(-1);

	const bios = [
		'My favorite (for professional use): Svelte!',
		'A few techs I use: Ruby on Rails, React, Next, Python, Node...',
		"I'm mostly a front-end dev.",
		"I've been working for start-ups and scale-ups for > 10 y. I have one obsession: make my users' journey cooler.",
		"I'm a web dev.",
		'He / him.',
		"Hey, I'm Antoine !"
	];

	let numberOfBios = $derived(bios.length);
	let topNum = $derived(numberOfBios - 1);
</script>

<svelte:head>
	<title>Accueil - Antoine Duvauchelle</title>
	<meta property="og:type" content="page" />
	<meta property="og:title" content="Accueil - Antoine Duvauchelle" />
</svelte:head>

<div class="container">
	{#each Array.from({ length: numberOfBios }) as _, i}
		{@const id = topNum - i}
		<Cube
			id={id.toString()}
			aria="show-biography"
			className={`button ${id == visibleBio ? 'blinking' : 'static'}`}
			style={`--duration: ${1 - i * 0.1}s; --delay: ${i - i * 0.2}s; --bottom: ${2 + i * 2}rem; --end-delay:
		${numberOfBios - 1 + i * 0.01}s;`}
			onclick={() => {
				visibleBio = id;
			}}
		/>
	{/each}

	<div class="biographies">
		{#each bios as bio, i}
			{@const id = topNum - i}
			<p id={id.toString()} class={`bio ${id <= visibleBio ? 'visible' : 'hidden'}`}>
				{bio}
			</p>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		height: calc(100vh - 55px);
	}

	.biographies {
		display: flex;
		flex-direction: column-reverse;
		gap: 0.4rem;
		width: 60%;
	}

	@media (max-width: 720px) {
		.biogaphies {
			position: relative;
		}

		.bio {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.bio {
		border: 1px dashed var(--brand);
		padding: 0.8rem 1.6rem;
		border-radius: 0.4rem;
		font-size: 2rem;
		opacity: 0;
	}

	.bio.visible {
		transition: all 0.3s ease-in-out;
		opacity: 1;
	}
</style>
