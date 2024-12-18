import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.resolve('src/posts');

export async function load() {
	const filenames = fs.readdirSync(postsDirectory);

	const posts = filenames.map((filename) => {
		const filePath = path.join(postsDirectory, filename);
		const fileContent = fs.readFileSync(filePath, 'utf-8');
		const { data } = matter(fileContent);

		return {
			slug: filename.replace('.md', ''),
			metadata: data
		};
	});

	const sortedPosts = posts
		.sort((a, b) => {
			const dateA = new Date(a.metadata.date).getTime();
			const dateB = new Date(b.metadata.date).getTime();
			return dateB - dateA;
		})
		.slice(0, 10);
	return {
		posts: sortedPosts
	};
}
