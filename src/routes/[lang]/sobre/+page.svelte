<script>
	import { useReveal } from '../../../lib/reveal';
	import { base } from '$app/paths';
	import { t } from '$lib/translations';

	export let testimonials = [
		{
			name: $t('about.testimonialName1'),
			text: $t('about.testimonialText1')
		},
		{
			name: $t('about.testimonialName2'),
			text: $t('about.testimonialText2')
		}
	];
	useReveal();
</script>

<section class="bg-white pt-12 leading-7">
	<div
		class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:my-12 mb-12 md:mb-24"
	>
		<div>
			<h2 class="text-6xl md:text-8xl font-semibold text-gray-700 mb-4">
				{$t('about.aboutTitle')}<span class="text-lime-300">•</span>
			</h2>
			<p class="text-gray-600">
				{$t('about.aboutDescription')}
			</p>
		</div>
		<div>
			<h2 class="text-6xl md:text-8xl font-semibold text-gray-700 mb-4">
				{$t('about.ourMissionTitle')}<span class="text-lime-300">•</span>
			</h2>
			<p class="text-gray-600">
				{$t('about.ourMissionDescription')}
			</p>
		</div>
	</div>
	<div class="bg-gradient-to-r from-gray-200 to-white w-full py-12 mb-12 md:mb-24">
		<div class="container mx-auto px-8 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-12">
			<div
				class="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center border-t-4 border-lime-300 reveal hover:bg-gray-50 transition-colors px-24 relative overflow-hidden"
			>
				<h3 class="text-2xl font-semibold text-gray-700 z-10">{$t('about.info1')}</h3>
			</div>
			<div
				class="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center border-t-4 border-lime-300 reveal hover:bg-gray-50 transition-colors px-24"
			>
				<h3 class="text-2xl font-semibold text-gray-700">{$t('about.info2')}</h3>
			</div>
			<div
				class="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center border-t-4 border-lime-300 reveal hover:bg-gray-50 transition-colors px-24"
			>
				<h3 class="text-2xl font-semibold text-gray-700">{$t('about.info3')}</h3>
			</div>
			<div
				class="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center border-t-4 border-lime-300 reveal hover:bg-gray-50 transition-colors"
			>
				<h3 class="text-2xl font-semibold text-gray-700">{$t('about.info4')}</h3>
			</div>
			<div
				class="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center border-t-4 border-lime-300 reveal hover:bg-gray-50 transition-colors"
			>
				<h3 class="text-2xl font-semibold text-gray-700">
					{$t('about.info5')}
				</h3>
			</div>
		</div>
	</div>

	<div class="container mx-auto px-6 mb-12 md:mb-20">
		<h2 class="text-4xl font-semibold text-gray-700 mb-4">
			{$t('about.workTitle')} <span class="text-lime-300">•</span>
		</h2>
		<p class="text-gray-600">
			{$t('about.workDescription')}
		</p>
	</div>

	<div class="container mx-auto px-6 mb-12 md:mb-20">
		<h2 class="text-4xl font-semibold text-gray-700 mb-4">
			{$t('about.experienceTitle')}<span class="text-lime-300">•</span>
		</h2>
		<p class="text-gray-600">
			{$t('about.experienceDescription')}
		</p>
	</div>

	<div class="container mx-auto px-6 mb-12 md:mb-20">
		<h2 class="text-4xl font-semibold text-gray-700 mb-4">
			{$t('about.whyTitle')} <span class="text-lime-300">•</span>
		</h2>
		<p class="text-gray-600">
			{$t('about.whyDescription')}
		</p>
	</div>

	{#if testimonials.length > 0}
		<div class="container mx-auto px-6 mb-12 md:mb-20">
			<h2 class="text-3xl font-semibold text-gray-700 mb-4">
				{$t('about.testimonialsTitle')} <span class="text-lime-300">•</span>
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each testimonials as testimonial}
					<div class="bg-gray-100 p-6 rounded-lg shadow-md">
						<p class="text-gray-600 italic">"{testimonial.text}"</p>
						<p class="text-gray-800 font-semibold mt-2">- {testimonial.name}</p>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	<div class="container mx-auto px-6 text-center">
		<a
			href="{base}/contact"
			class="inline-block bg-teal-700 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-teal-900 transition-colors"
			>Entre em Contato</a
		>
	</div>
</section>

<style>
	.container {
		max-width: 1200px;
	}
</style>
