import { FORMSPREE_ENDPOINT } from '$env/static/private';
import { error, redirect } from '@sveltejs/kit';

export const actions = {
	sendMail: async ({ request, fetch }) => {
		const data = await request.formData();

		const res = await fetch(FORMSPREE_ENDPOINT, {
			method: 'POST',
			headers: {
				Accept: 'application/json'
			},
			body: data
		});

		if (!res.ok) {
			error(400, "Un problème a eu lieu avec l'envoi de votre message");
		} else {
			redirect(302, '/contact/thanks');
		}
	}
};
