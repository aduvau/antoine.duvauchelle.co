<script>
	import Container from '../../components/Container.svelte';
</script>

<svelte:head>
	<title>Contact - Antoine Duvauchelle</title>
	<meta property="og:type" content="page" />
	<meta property="og:title" content="À propos - Antoine Duvauchelle" />
</svelte:head>

<Container>
	<h1>Contactez-moi</h1>
	<form action="?/sendMail" method="POST">
		<label>
			Votre email :
			<input type="email" name="email" />
		</label>
		<label>
			Votre nom :
			<input type="text" name="name" />
		</label>
		<label>
			Votre message :
			<textarea name="message"></textarea>
		</label>
		<button type="submit">Envoyer</button>
	</form>
</Container>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	label {
		display: flex;
		flex-direction: column;
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
</style>
