<script>
	import { base } from '$app/paths';
	import { locale, t } from '$lib/translations';

	let currentLang = $locale || 'pt';
	$: {
		// Extract the current language from the URL
		currentLang = $locale; // Default to 'pt' if no language prefix
	}
</script>

<footer class="bg-gray-800 text-white p-4">
	<div class="container mx-auto text-center">
		<p class="mb-4">
			<span class="text-gray-300">{$t('common.exreg.lower')}</span>
			<span class="text-lime-300">•</span>
			{$t('common.consulting')}
			<span class="text-xs">&copy;</span>
		</p>
		<ul class="flex flex-wrap items-center justify-center space-x-4">
			<li>
				<a href="{base}/${currentLang}/" class="hover:underline">{$t('common.navLink.home')}</a>
			</li>
			<li>
				<a href="{base}/${currentLang}/sobre" class="hover:underline"
					>{$t('common.navLink.aboutUs')}</a
				>
			</li>
			<li>
				<a href="{base}/${currentLang}/services" class="hover:underline"
					>{$t('common.navLink.services')}</a
				>
			</li>
			<li>
				<a href="{base}/${currentLang}/contact" class="hover:underline"
					>{$t('common.navLink.contact')}</a
				>
			</li>
		</ul>
	</div>
</footer>
