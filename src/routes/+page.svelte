<script>
	import { base } from '$app/paths';
	import MainServices from '../components/sections/main-services.svelte';
</script>

<section class="container mx-auto flex items-center min-h-[50vh]">
	<div class="text-center reveal">
		<div class="px-4 py-12 flex flex-col md:flex-row items-start md:items-center">
			<div class="md:w-1/2 md:mb-0 mb-2">
				<img src="{base}/088_main.jpg" alt="Paper work" class="rounded" />
			</div>
			<div class="md:w-1/2 md:pl-8 text-left flex flex-col justify-center">
				<h1 class="text-4xl mb-4">Regulatory compliance</h1>
				<p class="text-gray-700">
					Navigating the complex world of regulatory compliance can be challenging. With extensive
					experience in handling regulatory paperwork, I have collaborated with numerous companies
					to ensure they meet all necessary legal requirements. My expertise spans a wide range of
					industries, allowing me to provide tailored solutions that align with specific regulatory
					standards. I am confident that my skills and knowledge can help your business stay
					compliant, mitigate risks, and achieve long-term success.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="mt-16">
	<MainServices />
</section>

<section class="container mx-auto">
	<div class="mt-16 reveal">
		<h2 class="text-3xl font-bold">Why Choose Us</h2>
		<p class="mt-4">
			We understand that every business is unique. That's why we offer tailored solutions to meet
			your specific needs. Our approach is client-focused and results-driven, ensuring that you
			receive the highest level of service.
		</p>
	</div>
</section>
