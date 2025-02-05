<script>
	import '../app.css';

	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<header>
	<nav id="menu">
		<ul>
			<li>
				<a href="/">home</a>
			</li>
			<li>
				<a href="/work">work</a>
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
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateY(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateY(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
	main {
		position: relative;
	}

	a {
		color: var(--light);
	}

	header {
		align-items: center;
		box-sizing: border-box;
		display: flex;
		height: 4rem;
		justify-content: flex-end;
		padding: 0 2rem;
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

	/* FOOTER */
	footer {
		opacity: 0.1;
		transition: opacity 0.2s ease-in-out;
	}

	@media (min-width: 720px) {
		footer {
			position: fixed;
		}
	}

	@media (min-width: 1380px) {
		footer {
			bottom: 7rem;
			right: -5rem;
			transform: rotateZ(-90deg);
		}
	}

	@media (min-width: 720px) and (max-width: 1380px) {
		footer {
			bottom: 2rem;
			right: 2rem;
		}
	}

	@media (max-width: 720px) {
		footer {
			padding: 2rem 0;
			text-align: center;
		}
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
