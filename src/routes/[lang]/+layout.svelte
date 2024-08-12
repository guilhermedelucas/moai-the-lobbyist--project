<script>
	import '../../app.css';
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import Nav from '../../components/nav.svelte';
	import Footer from '../../components/footer.svelte';
	import Banner from '../../components/banner.svelte';
	import { t, locale } from '$lib/translations';

	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		let userLang = localStorage.getItem('preferred-lang') || navigator.language || 'en';
		let langCode = userLang.split('-')[0];

		if (!['en', 'pt', 'zh'].includes(langCode)) {
			langCode = 'pt'; // Default to 'pt' if the language is not supported
		}

		const pathname = window.location.pathname;
		if (pathname === '/') {
			goto(`/${langCode}`);
		}
	});

	let currentPage = 'home';
	let bannerTitle = 'Welcome to Law Consulting';
	let bannerDescription = null;
	let bannerImgSrc = `${base}/business.jpg`;
	let bannerLink = null;
	let bannerLinkText = null;

	// Update this reactive block to handle [lang] format
	// TODO: review it
	const currentLocale = $locale;
	$: {
		const path = $page.url.pathname;
		const segments = path.split('/').filter(Boolean); // Filter out empty segments

		let langPrefix = currentLocale; // fallback to 'pt' if the language is not supported

		if (dev && segments.length > 0) {
			langPrefix = segments[0];
		} else if (!dev && segments.length > 1) {
			langPrefix = segments[1];
		}

		if (!langPrefix) {
			langPrefix = 'pt';
		}

		if (['en', 'pt', 'zh'].includes(langPrefix)) {
			// Adjust the path to remove the language prefix
			const localizedPath = segments.slice(dev ? 1 : 2).join('/');

			if (localizedPath === '' || !localizedPath) {
				currentPage = 'home';
				bannerTitle = $t('home.bannerTitle');
				bannerImgSrc = `${base}/business.jpg`;
				bannerDescription = $t('home.bannerDescription');
				bannerLink = `/${langPrefix}/sobre`;
				bannerLinkText = $t('home.bannerLinkText');
			} else if (localizedPath.startsWith('sobre')) {
				currentPage = 'sobre';
				bannerTitle = $t('about.bannerTitle');
				bannerImgSrc = `${base}/business.jpg`;
				bannerLink = null;
				bannerDescription = $t('about.bannerDescription');
			} else if (localizedPath.startsWith('services')) {
				currentPage = 'services';
				bannerTitle = $t('services.bannerTitle');
				bannerImgSrc = `${base}/business.jpg`;
				bannerLink = null;
				bannerDescription = null;
			} else if (localizedPath.startsWith('contact')) {
				currentPage = 'contact';
				bannerTitle = $t('contact.bannerTitle');
				bannerImgSrc = `${base}/business.jpg`;
				bannerLink = null;
				bannerDescription = null;
			}
		} else {
			// Handle paths that do not include a valid language prefix
			// This might be a fallback or an error handling case
			console.error('Invalid or missing language prefix');
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

	<main class="flex-grow">
		<slot />
	</main>

	<Footer />
</div>
