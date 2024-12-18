<script lang="ts">
	import { formattedDate } from '../../../lib/format-date.js';

	let { data } = $props();
</script>

<article>
	<h1>{data.metadata.title}</h1>
	<h2>{data.metadata.subtitle}</h2>
	<p>{formattedDate(data.metadata.date)}</p>

	<div class="content">
		{@html data.htmlContent}
	</div>
</article>
