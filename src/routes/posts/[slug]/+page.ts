import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);

		return {
			meta: post.metadata,
			content: post.default
		};
	} catch {
		throw error(404, `Could not find ${params.slug}`);
	}
}
