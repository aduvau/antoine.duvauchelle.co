<div class="container">
	<slot />
</div>

<style>
	.container {
		margin: 0 auto;
		width: 90%;
	}

	@media (min-width: 720px) {
		.container {
			width: 60%;
		}
	}
</style>
