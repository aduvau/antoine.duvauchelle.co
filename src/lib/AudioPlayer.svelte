<script lang="ts">
	let {
		src,
		className,
		hasControls = true,
		wrapperClassName = undefined,
		buttonText = undefined
	} = $props();

	let audioPlayer: HTMLAudioElement;

	let imageSrc = $state('/svgs/play.svg');

	const updateImageSrc = () => {
		imageSrc = audioPlayer && !audioPlayer.paused ? '/svgs/pause.svg' : '/svgs/play.svg';
	};

	const handleClick = () => {
		if (audioPlayer) {
			if (audioPlayer.paused) {
				audioPlayer.play();
			} else {
				audioPlayer.pause();
			}
			updateImageSrc();
		}
	};

	$effect(() => {
		if (audioPlayer) {
			audioPlayer.addEventListener('play', updateImageSrc);
			audioPlayer.addEventListener('pause', updateImageSrc);
		}
		return () => {
			if (audioPlayer) {
				audioPlayer.removeEventListener('play', updateImageSrc);
				audioPlayer.removeEventListener('pause', updateImageSrc);
			}
		};
	});
</script>

{#snippet player()}
	<audio {src} class={className} controls={hasControls} bind:this={audioPlayer}></audio>
{/snippet}

{#if wrapperClassName}
	<div class={wrapperClassName}>
		<button onclick={handleClick}>
			<img src={imageSrc} alt={buttonText} />
		</button>
		{@render player()}
	</div>
{:else}
	{@render player()}
{/if}

<style>
	button {
		border: none;
		background: transparent;
	}
</style>
