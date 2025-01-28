<script lang="ts">
	// const container = document.querySelector('container');

	// const w: number = container?.clientWidth ?? 0;
	// const nW: number = w / 40;

	// const h: number = container?.clientHeight ?? 0;
	// const nH: number = h / 40;

	// const elements: number = nW * nH;

	// const moves = ['U', 'D', 'L', 'R'];
	// const antonyms: { [key: string]: string } = {
	// 	U: 'D',
	// 	D: 'U',
	// 	L: 'R',
	// 	R: 'L'
	// };
	// const directions: { [key: string]: [number, number] } = {
	// 	U: [0, -1],
	// 	D: [0, 1],
	// 	L: [-1, 0],
	// 	R: [+1, 0]
	// };

	// // Function to generate the style and track the path
	// const getStyle = () => {
	// 	console.log('here');

	// 	// Can't go back
	// 	let usableArray = moves.filter((v) => v !== antonyms[lastMove]);

	// 	// Restrict moves based on grid edges
	// 	if (prevY === 0) {
	// 		usableArray = usableArray.filter((v) => v !== 'D');
	// 	}

	// 	const direction = usableArray[Math.floor(Math.random() * usableArray.length)];

	// 	const [xFactor, yFactor] = directions[direction];
	// };
</script>

<div class="container">
	<!-- {#each $elements as index}
		{#if index === 0}
			<div class="square" onmouseenter={() => handleMouseEnter()}>
				{index + 1}
			</div>
		{:else}
			{@const items = getStyle()}
			{#each items as item}
				<div
					style={`transform: translate(${item[0]}%, ${item[1]}%)`}
					class="square"
					onmouseenter={() => handleMouseEnter()}
				>
					{item[0]}: {item[1]}, {item[2]}
				</div>
			{/each}
		{/if}
	{/each} -->
</div>

<style>
	.container {
		color: red;
		width: 100vw;
		height: 100vh;
	}

	.square {
		aspect-ratio: 1;
		background-color: #e0e0e0;
		border-radius: 1px;
		height: 4rem;
		overflow: hidden;
		position: absolute;
	}

	.square {
		left: 50%;
		position: absolute;
		top: 90%;
	}
</style>
