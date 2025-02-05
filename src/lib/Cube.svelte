<script lang="ts">
	import CubeSVG from './CubeSVG.svelte';
	import CubeSvgTurned from './CubeSVGTurned.svelte';

	type Props = {
		onclick: (() => void) | null | undefined;
		aria: string | null | undefined;
		id: string | null | undefined;
		style: string | null | undefined;
		turned: boolean | undefined;
	};
	let { onclick, aria, id, style, turned = false }: Props = $props();
</script>

<button {id} class="cube" {style} {onclick} aria-label={aria}
	>{#if !turned}<CubeSVG />{:else}<CubeSvgTurned />{/if}</button
>

<style>
	@keyframes hitBottom {
		0% {
			transform: translatex(30vw) translateY(-100vh);
			opacity: 0;
		}

		100% {
			transform: translateX(30vw) translateY(0);
			opacity: 1;
		}
	}

	@keyframes moveLeft {
		0% {
			transform: translateX(30vw);
		}

		100% {
			transform: translateX(0);
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

	button {
		background: none;
		border: none;
	}

	.cube {
		animation-fill-mode: forwards;
		cursor: pointer;
	}

	@media (min-width: 720px) {
		.cube {
			animation:
				hitBottom var(--duration) ease-in-out var(--delay),
				moveLeft 1s ease-in var(--end-delay);
			opacity: 0;
		}
	}
</style>
