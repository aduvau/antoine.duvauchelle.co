<script>
	import '../app.css';
</script>

<main>
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
					<a href="/about">à propos</a>
				</li>
			</ul>
		</nav>
	</header>
	<slot />
</main>

<style>
	main {
		position: relative;
		height: 100vh;
	}

	header {
		box-sizing: border-box;
		display: flex;
		justify-content: flex-end;
		padding: 1rem;
		position: relative;
		width: 100%;
	}

	nav ul {
		display: flex;
		gap: 1rem;
		list-style: none;
		margin: 0;
	}

	li:hover a {
		color: #ffde21;
	}

	/* .menu[aria-hidden='false'] {
		display: block;
	} */
	/* nav {
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
	} */
</style>
