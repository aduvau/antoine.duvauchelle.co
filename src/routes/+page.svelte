<script lang="ts">
	import Cubes from './_components/Cubes.svelte';

	let visibleBios: Array<number> = $state([]);
	let numberOfBios = 7;
</script>

<svelte:head>
	<title>Accueil - Antoine Duvauchelle</title>
	<meta property="og:type" content="page" />
	<meta property="og:title" content="Accueil - Antoine Duvauchelle" />
</svelte:head>

<div class="first-layer">
	<div class="content">
		<Cubes visibleEls={visibleBios} length={numberOfBios} />
		<div class="biographies">
			<p class={`bio bio-0 ${visibleBios.indexOf(0) !== -1 ? 'visible' : 'hidden'}`}>
				Hey, I'm Antoine!
			</p>
			<p class={`bio bio-1 ${visibleBios.indexOf(1) !== -1 ? 'visible' : 'hidden'}`}>He/him</p>
			<p class={`bio bio-2 ${visibleBios.indexOf(2) !== -1 ? 'visible' : 'hidden'}`}>
				I'm a creative developer
			</p>
			<p class={`bio bio-3 ${visibleBios.indexOf(3) !== -1 ? 'visible' : 'hidden'}`}>
				I’ve been working 10+ years with startups and scaleups
			</p>
			<p class={`bio bio-4 ${visibleBios.indexOf(4) !== -1 ? 'visible' : 'hidden'}`}>
				I have one obsession: make my users’ journey cool and easy!
			</p>
			<img
				src="/imgs/antoine.jpeg"
				alt="Antoine Duvauchelle"
				class={`bio-5 ${visibleBios.indexOf(5) !== -1 ? 'visible' : 'hidden'}`}
			/>

			<div class={`bio bio-6 ${visibleBios.indexOf(6) !== -1 ? 'visible' : 'hidden'}`}>
				<div class="thead">
					<span>Front</span><span>Back</span><span>Design</span><span>Tools</span>
				</div>
				<div class="tbody">
					<span>Svelte</span><span>Ruby on Rails</span><span>Figma</span><span>Git</span>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.first-layer {
		align-items: center;
		display: flex;
		justify-content: center;
		margin: 0 auto;
		padding: 2rem 0;
		max-width: 80rem;
		position: relative;
	}

	.content {
		display: flex;
	}

	/* BIOGRAPHIES */
	@media (min-width: 720px) {
		.first-layer {
			height: calc(100vh - 4rem);
		}

		.content {
			align-items: flex-end;
		}

		.biographies {
			display: grid;
			gap: 0.5rem;
			grid-template-columns: repeat(6, 1fr);
			grid-template-rows: 7;
			width: 80%;
		}

		.bio-0 {
			grid-column: 1 / 3;
			grid-row: 1;
		}

		.bio-1 {
			grid-column: 3 / 5;
			grid-row: 1;
		}

		.bio-2 {
			grid-column: 1 / 5;
			grid-row: 2;
		}
		.bio-3 {
			grid-column: 1 / 5;
			grid-row: 3 / 5;
		}
		.bio-4 {
			grid-column: 5 / 7;
			grid-row: 4 / 8;
		}
		.bio-5 {
			grid-column: 5 / 7;
			grid-row: 1 / 4;
		}
		.bio-6 {
			grid-column: 1 / 5;
			grid-row: 5 / 8;
		}

		.hidden {
			opacity: 0;
		}
	}

	@media (max-width: 720px) {
		.content {
			align-items: center;
			flex-direction: column;
		}

		.biographies {
			width: 90vw;
		}

		.biographies > *:not(:first-child) {
			margin-top: 0.5rem;
		}
	}

	.bio {
		border: 1px dashed var(--brand);
		padding: 0.8rem 1.6rem;
		border-radius: 0.4rem;
		font-size: 2rem;
	}

	.bio:not(.bio-6) {
		display: flex;
		align-items: center;
	}

	.bio-6 > div {
		display: flex;
		justify-content: space-between;
	}

	.bio-6 > div > * {
		flex: 1;
	}

	img {
		border-radius: 0.4rem;
		object-fit: cover;
		height: 100%;
		width: 100%;
	}

	.visible {
		transition: all 0.3s ease-in-out;
		opacity: 1;
	}
</style>
