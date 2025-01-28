<svelte:head>
	<title>Accueil - Antoine Duvauchelle</title>
	<meta property="og:type" content="page" />
	<meta property="og:title" content="Accueil - Antoine Duvauchelle" />
</svelte:head>

<div class="container">
	<div class="cube" style="--duration: 1s; --delay: 0s; --bottom: 2rem"></div>
	<div class="cube" style="--duration: 0.9s; --delay: 1s; --bottom: 4rem"></div>
	<div class="cube" style="--duration: 0.8s; --delay:1.9s; --bottom: 6rem"></div>
	<div class="cube" style="--duration: 0.7s; --delay:2.7s; --bottom: 8rem"></div>
	<div class="cube" style="--duration: 0.6s; --delay:3.4s; --bottom: 10rem"></div>
	<div class="cube" style="--duration: 0.5s; --delay:4s; --bottom: 12rem"></div>
	<div class="cube" style="--duration: 0.4s; --delay:4.5s; --bottom: 14rem"></div>
	<div class="cube" style="--duration: 0.3s; --delay:4.9s; --bottom: 16rem"></div>
	<div class="cube" style="--duration: 0.2s; --delay:5.2s; --bottom: 18rem"></div>
	<div class="cube" style="--duration: 0.1s; --delay:5.4s; --bottom: 20rem"></div>
	<div class="cube" style="--duration: 0s; --delay:5.5s; --bottom: 22rem"></div>
</div>

<style>
	.container {
		color: red;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		height: calc(100vh - 55px);
	}

	@keyframes hitBottom {
		0% {
			bottom: 100%;
			opacity: 0;
		}

		100% {
			bottom: var(--bottom);
			opacity: 1;
		}
	}

	.cube {
		animation: hitBottom var(--duration) ease-in-out var(--delay);
		animation-fill-mode: forwards;
		aspect-ratio: 1;
		width: 32px;
		background-color: #ffde21;
		position: absolute;
		border: 1px solid #ffde21;
		left: 50%;
		transform: translateX(-50%);
		bottom: var(--bottom);
		margin-bottom: calc(0.2 * var(--bottom));
		opacity: 0;
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
</style>
