<script>
	export let size = '2rem'; // Default size
	export let rotate = 0; // Rotation angle in degrees
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	style="width: {size}; height: {size};  transform: rotate({rotate}deg);"
>
	<path d="M5 12l7-7 7 7" />
</svg>

<style>
	svg {
		stroke: currentColor; /* Ensures stroke uses the color prop */
	}
</style>
