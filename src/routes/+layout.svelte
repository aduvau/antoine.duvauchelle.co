<script>
	import '../app.css';
</script>

<header>
	<nav id="menu">
		<ul>
			<li>
				<a href="/">accueil</a>
			</li>
			<li>
				<a href="/posts">blog</a>
			</li>
			<li>
				<a href="/contact">contact</a>
			</li>
		</ul>
	</nav>
</header>

<main>
	<slot />
</main>

<footer><div><span class="copyleft">©</span> 2025 - Antoine Duvauchelle</div></footer>

<style>
	main {
		position: relative;
	}

	header {
		box-sizing: border-box;
		display: flex;
		justify-content: flex-end;
		padding: 1rem;
		position: relative;
		width: 100%;
	}

	header nav ul {
		display: flex;
		gap: 1rem;
	}

	header nav ul li:hover a {
		color: var(--brand);
	}

	footer {
		bottom: 7rem;
		right: -5rem;
		position: fixed;
		transform: rotateZ(-90deg);
		opacity: 0.1;
		transition: opacity 0.2s ease-in-out;
	}

	footer:hover {
		opacity: 1;
		transition: opacity 0.2s ease-in-out;
	}

	footer span.copyleft {
		display: inline-block;
		font-size: 1.2rem;
		transform: rotateY(180deg);
	}
</style>
