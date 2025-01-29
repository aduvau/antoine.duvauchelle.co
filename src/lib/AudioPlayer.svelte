<script lang="ts">
	let {
		src,
		className,
		hasControls = true,
		wrapperClassName = undefined,
		buttonText = undefined
	} = $props();

	let audioPlayer: HTMLAudioElement;

	let imageSrc = $derived.by(() =>
		audioPlayer && audioPlayer.paused ? '/svgs/pause.svg' : '/svgs/play.svg'
	);

	const handleClick = (e: MouseEvent) => {
		if (audioPlayer) {
			if (audioPlayer.paused) {
				audioPlayer.play();
			} else {
				audioPlayer.pause();
			}
		}
	};

	$inspect(imageSrc);
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
