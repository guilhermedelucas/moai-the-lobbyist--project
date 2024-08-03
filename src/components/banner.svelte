<script>
  export let title = '';
  export let imgSrc = '';
</script>

<div role="banner" class="relative h-[calc(70vh)]">
	<img src={imgSrc} alt={title} class="w-full h-[calc(70vh)] object-cover">
	<div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
    	<h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
			{title}
	</div>
</div>