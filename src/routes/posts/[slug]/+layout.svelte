<script lang="ts">
	import { onMount } from 'svelte';
	import '../../../app.css';

	let scrollY: number = $state(0);
	let progress: number = $state(0);

	const updateProgress = () => {
		if (typeof document !== 'undefined') {
			const scrollTop = window.scrollY;
			const scrollHeight =
				document.documentElement.scrollHeight - document.documentElement.clientHeight;
			progress = (scrollTop / scrollHeight) * 100;
		}
	};

	onMount(() => {
		updateProgress();

		window.addEventListener('scroll', updateProgress);

		return () => {
			window.removeEventListener('scroll', updateProgress);
		};
	});
</script>

<svelte:window bind:scrollY />

<div class="progress-bar">
	<div class="progress" style={`width:${progress}%`}></div>
</div>

<main>
	<slot />
</main>

<style>
	.progress-bar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 0.3rem;
	}

	.progress {
		position: absolute;
		top: 0;
		left: 0;
		height: 0.3rem;
		background: var(--brand);
		border-radius: 0.3rem;
	}
</style>
