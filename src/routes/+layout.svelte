<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import Nav from '../components/nav.svelte';
	import Footer from '../components/footer.svelte';
	import Banner from '../components/banner.svelte';

	function reveal() {
		const reveals = document.querySelectorAll('.reveal');
		reveals.forEach((node) => {
			const revealTop = node.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;
			const revealPoint = 150;

			if (revealTop < windowHeight - revealPoint) {
				node.classList.add('active-reveal');
			}
		});
	}

	onMount(() => {
		document.documentElement.lang = 'pt-br';
		const revealElements = document.querySelectorAll('.reveal');

		// Create the IntersectionObserver
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('active-reveal');
						observer.unobserve(entry.target); // Stop observing once revealed
					}
				});
			},
			{ threshold: 0.1 }
		);

		// Attach the observer to each element
		revealElements.forEach((el) => observer.observe(el));

		// Call reveal once on mount to reveal elements already in the viewport
		reveal();
	});

	let currentPage = 'home';
	let bannerTitle = 'Welcome to Law Consulting';
	let bannerImgSrc = `${base}/business.jpg`;

	$: {
		const path = $page.url.pathname;

		if (path === `${base}/`) {
			currentPage = 'home';
			bannerTitle = 'Welcome to Law Consulting';
			bannerImgSrc = `${base}/business.jpg`;
		} else if (path.startsWith(`${base}/about`)) {
			currentPage = 'about';
			bannerTitle = 'About Us';
			bannerImgSrc = `${base}/business.jpg`;
		} else if (path.startsWith(`${base}/services`)) {
			currentPage = 'services';
			bannerTitle = 'Our Services';
			bannerImgSrc = `${base}/business.jpg`;
		} else if (path.startsWith(`${base}/contact`)) {
			currentPage = 'contact';
			bannerTitle = 'Contact Us';
			bannerImgSrc = `${base}/business.jpg`;
		}
	}
</script>

<svelte:head>
	<title>Law Consulting Services - Regulatory Compliance, Legal Consultation</title>
	<meta
		name="description"
		content="Moai Expert law consulting services including regulatory compliance, legal consultation, contract review, risk management, and litigation support."
	/>
	<meta
		name="keywords"
		content="law consulting, regulatory compliance, legal consultation, contract review, risk management, litigation support"
	/>
</svelte:head>

<div class="flex flex-col min-h-screen text-gray-800">
	<Nav {currentPage} />
	<Banner title={bannerTitle} imgSrc={bannerImgSrc} />

	<main class="flex-grow py-6 sm:py-8 md:py-12 lg:py-16">
		<slot />
	</main>

	<Footer />
</div>
