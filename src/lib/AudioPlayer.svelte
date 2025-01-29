<script lang="ts">
	let {
		src,
		className,
		hasControls = true,
		wrapperClassName = undefined,
		buttonText = undefined
	} = $props();
</script>

{#snippet player()}
	<audio {src} class={className} controls={hasControls}></audio>
{/snippet}

{#if wrapperClassName}
	<div class={wrapperClassName}>
		<button>
			<img src="/svgs/play.svg" alt={buttonText} />
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
