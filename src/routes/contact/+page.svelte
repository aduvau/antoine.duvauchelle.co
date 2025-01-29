<script>
	import Container from '../../components/Container.svelte';
</script>

<svelte:head>
	<title>Contact - Antoine Duvauchelle</title>
	<meta property="og:type" content="page" />
	<meta property="og:title" content="À propos - Antoine Duvauchelle" />
</svelte:head>

<Container>
	<h1>Check me there</h1>
	<ul>
		<li>
			<a href="https://tooter.social/@ntnuu" aria-label="mastodon" target="_blank"
				><img src="/svgs/mastodon.svg" alt="mastodon" /></a
			>
		</li>
		<li>
			<a
				href="https://www.linkedin.com/in/antoine-duvauchelle/"
				aria-label="linkedin"
				target="_blank"><img src="/svgs/linkedin.svg" alt="linkedin" /></a
			>
		</li>
		<li>
			<a href="https://github.com/aduvau" aria-label="github" target="_blank"
				><img src="/svgs/github.svg" alt="github" /></a
			>
		</li>
	</ul>
	<h2>Or drop me an email</h2>
	<form action="?/sendMail" method="POST">
		<label>
			Your email
			<input type="email" name="email" />
		</label>
		<label>
			Your name:
			<input type="text" name="name" />
		</label>
		<label>
			Your message:
			<textarea name="message"></textarea>
		</label>
		<button type="submit">Send</button>
	</form>
</Container>

<style>
	h2 {
		color: var(--brand);
		font-size: 1.6rem;
		font-style: normal;
		text-align: center;
		text-transform: uppercase;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin: 2rem 0;
	}

	label {
		display: flex;
		flex-direction: column;
		text-transform: uppercase;
		font-weight: 200;
	}

	input,
	textarea {
		margin-top: 0.5rem;
		border-radius: 0.4rem;
	}

	input {
		height: 2rem;
	}

	textarea {
		height: 10rem;
	}

	button {
		background-color: var(--brand);
		border: none;
		border-radius: 0.4rem;
		color: var(--dark);
		font-size: 1.2rem;
		font-weight: 200;
		padding: 0.4rem 0.8rem;
		transition: transform 0.2s ease-out;
		width: max-content;
	}

	button:hover {
		transform: translateY(10%);
		transition: transform 0.2s ease-out;
	}

	ul {
		align-items: center;
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin: 3rem 0;
	}

	li a img {
		background-color: var(--light);
		border-radius: 50%;
		padding: 0.4rem;
		transition: all 0.3s ease-in-out;
	}

	li a:hover img {
		display: inline-block;
		background-color: var(--brand);
		transform: translateY(10%);
		transition: all 0.3s ease-in-out;
	}

	li:before {
		content: '';
	}
</style>
