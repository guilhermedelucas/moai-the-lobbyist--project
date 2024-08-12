<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { setLocale } from '$lib/translations';
	import { page } from '$app/stores';

	onMount(async () => {
		const validLocales = ['en', 'pt', 'zh']; // Define your supported locales
		const pathname = window.location.pathname;

		// If the user is on the root path, handle locale redirection
		if (pathname === '/') {
			let userLang = localStorage.getItem('preferred-lang') || navigator.language || 'en';
			let langCode = userLang.split('-')[0];

			if (!validLocales.includes(langCode)) {
				langCode = 'pt'; // Default to 'pt' if the language is not supported
			}

			goto(`${base}/${langCode}`);
			return;
		}

		// Check if the pathname starts with a valid locale
		const pathSegments = pathname.split('/').filter(Boolean);
		const pathLocale = pathSegments[0];

		if (!validLocales.includes(pathLocale)) {
			let userLang = localStorage.getItem('preferred-lang') || navigator.language || 'pt';
			let langCode = userLang.split('-')[0];

			if (!validLocales.includes(langCode)) {
				langCode = 'pt'; // Default to 'pt' if the language is not supported
			}

			const newPath = `${base}/${langCode}`;
			goto(newPath);
		}

		const lang = $page.params.lang || 'pt'; // Default to 'pt' if no language is set
		await setLocale(lang); // Set the current language
	});
</script>

<slot />
