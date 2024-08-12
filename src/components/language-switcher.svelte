<script>
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import { writable } from 'svelte/store';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { setLocale } from '$lib/translations';

	let languages = {
		pt: { name: 'Português', flag: `${base}/flags/br.svg` },
		en: { name: 'English', flag: `${base}/flags/us.svg` },
		zh: { name: '中文', flag: `${base}/flags/cn.svg` }
	};

	let selectedLanguage = writable('pt'); // Default language is Portuguese
	let isOpen = writable(false); // Dropdown visibility

	// Function to get the user's browser language or stored language
	const getInitialLanguage = () => {
		const storedLanguage = localStorage.getItem('language');
		if (storedLanguage) {
			return storedLanguage;
		}

		const browserLanguage = navigator.language.toLowerCase();

		if (languages[browserLanguage]) {
			return browserLanguage;
		}

		// If user's browser language is not in the supported list, default to Portuguese
		return 'pt';
	};

	// Function to change the language and store it in localStorage
	const changeLanguage = async (lang) => {
		// Set the selected language in your store and localStorage
		selectedLanguage.set(lang);
		localStorage.setItem('language', lang);
		localStorage.setItem('preferred-lang', lang);
		document.documentElement.lang = lang;
		await setLocale(lang);

		// Close the dropdown after selection
		isOpen.set(false);

		// Get the current path excluding the language prefix
		const currentPath = dev
			? $page.url.pathname.split('/').slice(2).join('/')
			: $page.url.pathname.split('/').slice(3).join('/');
		// Redirect to the same path but with the new language
		goto(`${base}/${lang}/${currentPath}`);
	};

	onMount(() => {
		selectedLanguage.set(getInitialLanguage());
		document.documentElement.lang = getInitialLanguage();
	});

	function toggleDropdown() {
		isOpen.update((value) => !value);
	}
</script>

<!-- Dropdown Container -->
<div class="relative w-full">
	<!-- Selected Language Display (Flag with Arrow) -->
	<button
		on:click={toggleDropdown}
		class="flex items-center bg-transparent text-white text-2xl focus:outline-none cursor-pointer"
	>
		<!-- Display the flag image -->
		{#each Object.keys(languages) as lang}
			{#if $selectedLanguage === lang}
				<img src={languages[$selectedLanguage].flag} alt="Flag" class="w-8 h-5" />
			{/if}
		{/each}
		<!-- Add arrow next to the flag -->
		<span class="ml-2 text-base">▼</span>
	</button>

	<!-- Dropdown Menu -->
	{#if $isOpen}
		<ul
			class="absolute right-0 mt-2 bg-transparent text-white rounded shadow-lg max-h-60 overflow-auto"
			class:mobile-fullscreen={$isOpen && window.innerWidth < 640}
		>
			{#each Object.keys(languages) as lang}
				<li
					on:click={() => changeLanguage(lang)}
					class="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
				>
					<img src={languages[lang].flag} alt="Flag" class="w-8 h-5 mr-2 max-w-none" />
					<span>{languages[lang].name}</span>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.relative {
		display: inline-block;
		position: relative;
	}

	/* Full-screen dropdown for mobile */
	.mobile-fullscreen {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 50;
		overflow-y: auto;
		background-color: rgba(31, 41, 55, 0.95); /* bg-gray-800 with opacity */
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.mobile-fullscreen li {
		width: 100%;
		text-align: center;
	}
</style>
