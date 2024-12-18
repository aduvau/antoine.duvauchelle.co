import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function load({ params }) {
	const { slug } = params;

	const filePath = path.resolve('static/posts', `${slug}.md`);
	const fileContent = fs.readFileSync(filePath, 'utf-8');

	const { data, content } = matter(fileContent);

	const htmlContent = await remark().use(html).process(content);

	return {
		htmlContent: htmlContent.toString(),
		metadata: data
	};
}
