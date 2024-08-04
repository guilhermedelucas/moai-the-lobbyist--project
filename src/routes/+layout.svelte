<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import Nav from '../components/nav.svelte';
	import Footer from '../components/footer.svelte';
	import Banner from '../components/banner.svelte';

	let currentPage = 'home';
	let bannerTitle = 'Welcome to Law Consulting';
	let bannerDescription = null;
	let bannerImgSrc = `${base}/business.jpg`;
	let bannerLink = null;
	let bannerLinkText = null;

	$: {
		const path = $page.url.pathname;

		if (path === `${base}/`) {
			currentPage = 'home';
			bannerTitle = 'Welcome to Law Consulting';
			bannerImgSrc = `${base}/business.jpg`;
			bannerDescription = 'Law Consulting is a law firm that offers legal services to its clients.';
			bannerLink = `${base}/about`;
			bannerLinkText = 'Saiba mais...';
		} else if (path.startsWith(`${base}/about`)) {
			currentPage = 'about';
			bannerTitle = 'About Us';
			bannerImgSrc = `${base}/business.jpg`;
			bannerLink = null;
		} else if (path.startsWith(`${base}/services`)) {
			currentPage = 'services';
			bannerTitle = 'Our Services';
			bannerImgSrc = `${base}/business.jpg`;
			bannerLink = null;
		} else if (path.startsWith(`${base}/contact`)) {
			currentPage = 'contact';
			bannerTitle = 'Contact Us';
			bannerImgSrc = `${base}/business.jpg`;
			bannerLink = null;
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

<div class="flex flex-col min-h-screen font-merriweather text-gray-800">
	<Nav {currentPage} />
	<Banner
		description={bannerDescription}
		title={bannerTitle}
		imgSrc={bannerImgSrc}
		linkText={bannerLinkText}
		link={bannerLink}
	/>

	<main class="flex-grow py-6 sm:py-8 md:py-12 lg:py-16">
		<slot />
	</main>

	<Footer />
</div>
