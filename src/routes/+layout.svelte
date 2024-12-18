<script>
	import '../app.css';
</script>

<main>
	<nav>
		<a href="/">home</a>
		<a href="/blog">blog</a>
		<a href="/about">about</a>
	</nav>
	<slot />
</main>

<style>
	nav {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 1rem 0;
		gap: 1.2rem;
	}
	a {
		transition: transform 0.1s ease-out;
	}

	a:hover {
		transform: rotate(-10deg);
		transition: transform 0.1s ease-out;
	}
</style>
