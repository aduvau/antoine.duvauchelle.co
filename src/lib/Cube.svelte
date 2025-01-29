<script lang="ts">
	type Props = {
		onclick: (() => void) | null | undefined;
		aria: string | null | undefined;
		className: string | null | undefined;
		id: string | null | undefined;
		style: string | null | undefined;
	};
	let { onclick, aria, className, id, style }: Props = $props();
</script>

<button {id} class={`cube ${className}`} {style} {onclick} aria-label={aria}></button>

<style>
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
		aspect-ratio: 1;
		background-color: var(--brand);
		border: 1px solid var(--brand);
		width: 32px;
	}

	.cube.button {
		animation:
			hitBottom var(--duration) ease-in-out var(--delay),
			moveLeft 1s ease-in var(--end-delay);
		animation-fill-mode: forwards;
		bottom: var(--bottom);
		cursor: pointer;
		left: 2rem;
		margin-bottom: calc(0.2 * var(--bottom));
		opacity: 0;
		position: absolute;
		transform: translateX(-50%);
	}

	.cube.button:hover {
		transform: translate(-50%) scale(1.05);
	}

	.cube.no-button {
		transform: scale(0.5);
		position: relative;
		transition: transform 0.2s ease-in-out;
		margin-top: 0.5rem;
	}

	.cube::before {
		content: '';
		height: 13px;
		width: 30px;
		position: absolute;
		border: 1px solid var(--brand);
		transform: rotateX(45deg) skew(-45deg) translate(8px, 1px);
		left: 0;
		bottom: 100%;
	}

	.cube::after {
		content: '';
		height: 30px;
		width: 19px;
		position: absolute;
		border: 1px solid var(--brand);
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
</style>
