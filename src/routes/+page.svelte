<script lang="ts">
	let visibleBio: number = $state(999);

	const bios = [
		'Mais ma préférée : Svelte !',
		"Quelques technos que j'utilise : Ruby on Rails, React, Next, Python, Node...",
		'Je fais principalement du front.',
		'Je travaille depuis plus de dix ans pour des entreprises innovantes avec une obsession : simplifier la vie des utilisateurs.',
		'Je suis développeur web.',
		"Salut, je m'appelle Antoine !"
	];

	let numberOfBios = $derived(bios.length);
</script>

<svelte:head>
	<title>Accueil - Antoine Duvauchelle</title>
	<meta property="og:type" content="page" />
	<meta property="og:title" content="Accueil - Antoine Duvauchelle" />
</svelte:head>

<div class="container">
	{#each Array.from({ length: numberOfBios }) as _, i}
		<button
			id={i.toString()}
			class={`cube ${i == visibleBio ? 'blinking' : 'static'}`}
			style={`--duration: ${1 - i * 0.1}s; --delay: ${i - i * 0.2}s; --bottom: ${2 + i * 2}rem; --end-delay: ${numberOfBios - 1 + i * 0.01}s;`}
			onclick={() => {
				visibleBio = i;
			}}
			aria-label="show-biography"
		></button>{/each}

	<div class="biographies">
		{#each bios as bio, i}
			<p id={i.toString()} class={`bio ${i === visibleBio ? 'visible' : 'hidden'}`}>{bio}</p>
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

	@keyframes hitBottom {
		0% {
			left: 50%;
			bottom: 100%;
			opacity: 0;
		}

		100% {
			left: 50%;
			bottom: var(--bottom);
			opacity: 1;
		}
	}

	@keyframes moveLeft {
		0% {
			left: 50%;
		}

		100% {
			left: 2rem;
		}
	}

	@keyframes blink {
		0%,
		40% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}

		60%,
		100% {
			opacity: 1;
		}
	}
	.cube {
		animation:
			hitBottom var(--duration) ease-in-out var(--delay),
			moveLeft 1s ease-in var(--end-delay);
		animation-fill-mode: forwards;
		aspect-ratio: 1;
		background-color: #ffde21;
		border: 1px solid #ffde21;
		bottom: var(--bottom);
		cursor: pointer;
		left: 2rem;
		margin-bottom: calc(0.2 * var(--bottom));
		opacity: 0;
		position: absolute;
		transform: translateX(-50%);
		width: 32px;
	}

	.cube:hover {
		transform: translate(-50%) scale(1.05);
	}

	.cube::before {
		content: '';
		height: 13px;
		width: 30px;
		position: absolute;
		border: 1px solid #ffde21;
		transform: rotateX(45deg) skew(-45deg) translate(8px, 1px);
		left: 0;
		bottom: 100%;
	}

	.cube::after {
		content: '';
		height: 30px;
		width: 19px;
		position: absolute;
		border: 1px solid #ffde21;
		transform: rotateY(45deg) skewY(-26deg) translate(-2px, -5px);
		left: 100%;
		bottom: 0;
	}

	.cube.blinking {
		animation:
			hitBottom var(--duration) ease-in-out var(--delay),
			moveLeft 1s ease-in var(--end-delay),
			blink 3s ease-in-out infinite;
	}

	.biographies {
		display: flex;
		flex-direction: column-reverse;
		gap: 0.4rem;
		position: absolute;
		left: 50%;
		top: 0;
		transform: translateX(-50%);
	}

	.bio {
		border: 1px dashed #ffde21;
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
