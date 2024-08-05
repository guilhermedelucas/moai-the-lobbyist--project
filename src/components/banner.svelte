<script>
	export let title = '';
	export let imgSrc = '';
	export let description = '';
	export let link = ''; // This is the link for the anchor tag
	export let linkText = ''; // This is the text for the anchor tag
</script>

<div role="banner" class="relative h-[calc(70vh)]">
	<img src={imgSrc} alt={title} class="w-full h-[calc(70vh)] object-cover" />
	<div
		class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12 lg:px-12 lg:py-16 gap-8"
	>
		<h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
			{title}
		</h1>
		{#if description}
			<p
				class="text-white opacity-70 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center hidden sm:block"
			>
				{description}
			</p>
		{/if}

		{#if link && linkText}
			<a
				href={link}
				class="px-8 py-2 bg-teal-700 text-white rounded shadow hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hidden sm:block"
			>
				{linkText}
			</a>
		{/if}
	</div>
</div>
