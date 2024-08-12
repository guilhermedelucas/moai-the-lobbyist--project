<script>
	import { page } from '$app/stores'; // SvelteKit store for reactive page data
	import { derived } from 'svelte/store';
	import { browser } from '$app/environment';
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';
	import ArrowIcon from '../../../components/sections/arrow-icon.svelte';

	const topics = [
		{ key: 'compliance', label: $t('services.complianceTitle') },
		{ key: 'carbonMarket', label: $t('services.carbonMarketTitle') },
		{ key: 'foreignTrade', label: $t('services.foreignTradeTitle') },
		{ key: 'governmentRelations', label: $t('services.foreignTradeTitle') }
	];

	let selectedTopicIndex = 0;

	// Derive the selected topic from the URL hash
	const selectedTopic = derived(page, ($page) => {
		const hash = $page.url.hash.substring(1);
		const index = topics.findIndex((topic) => topic.key === hash);
		return index !== -1 ? index : 0; // Default to the first topic if hash is not found
	});

	// Subscribe to the selected topic
	selectedTopic.subscribe((index) => {
		selectedTopicIndex = index;
	});

	function setTopic(index) {
		if (index >= 0 && index < topics.length) {
			selectedTopicIndex = index;
			if (browser) {
				window.location.hash = topics[index].key;
			}
		}
	}

	function previousTopic() {
		const newIndex = (selectedTopicIndex - 1 + topics.length) % topics.length;
		setTopic(newIndex);
	}

	function nextTopic() {
		const newIndex = (selectedTopicIndex + 1) % topics.length;
		setTopic(newIndex);
	}

	onMount(() => {
		// Set up hash change listener
		window.addEventListener('hashchange', updateSelectedTopic);
	});

	function updateSelectedTopic() {
		if (browser) {
			const hash = window?.location?.hash.substring(1);
			const index = topics.findIndex((topic) => topic.key === hash);
			if (index !== -1) {
				selectedTopicIndex = index;
			}
		}
	}
</script>

<div class="flex flex-col md:flex-row relative">
	<!-- Right Side Menu (Mobile & Desktop) -->
	<div class="w-full md:w-1/4 bg-gray-600 text-white p-4 md:min-h-[550px] sticky top-0">
		<!-- Mobile Navigation -->
		<div class="md:hidden flex items-center justify-between">
			<button class="p-2 text-lime-300" on:click={previousTopic}>
				<ArrowIcon size="2rem" rotate="270" />
			</button>
			<span class="text-lg">{topics[selectedTopicIndex].label}</span>
			<button class="p-2 text-lime-300" on:click={nextTopic}>
				<ArrowIcon size="2rem" rotate="90" />
			</button>
		</div>

		<!-- Desktop Navigation -->
		<ul class="hidden md:block space-y-4 mt-12">
			{#each topics as topic, index}
				<li>
					<button
						class="text-lg w-full text-left p-2 hover:text-lime-300"
						class:text-lime-300={selectedTopicIndex === index}
						on:click={() => {
							selectedTopicIndex = index;
							window.location.hash = topics[index].key;
						}}
					>
						{topic.label}
					</button>
				</li>
			{/each}
		</ul>
	</div>

	<!-- Content Display -->
	<div class="w-full md:w-3/4 p-8 md:mt-12 md:ml-12 md:mr-48">
		{#if selectedTopicIndex === 0}
			<h2 class="text-4xl font-bold text-gray-700 mb-4">
				{$t('services.complianceTitle')}
			</h2>
			<p class="text-gray-700 leading-relaxed">
				{$t('services.complianceText')}
			</p>
			<ul class="list-disc list-inside text-gray-700 leading-relaxed mt-4">
				<li>
					{$t('services.complianceList1')}
				</li>
				<li>
					{$t('services.complianceList2')}
				</li>
				<li>
					{$t('services.complianceList3')}
				</li>
				<li>
					{$t('services.complianceList4')}
				</li>
			</ul>
		{/if}

		{#if selectedTopicIndex === 1}
			<h2 class="text-4xl font-bold text-gray-700 mb-4">
				{$t('services.carbonMarketTitle')}
			</h2>
			<p class="text-gray-700 leading-relaxed">
				{$t('services.carbonMarketText')}
			</p>
			<ul class="list-disc list-inside text-gray-700 leading-relaxed mt-4">
				<li>
					{$t('services.carbonMarketList1')}
				</li>
				<li>
					{$t('services.carbonMarketList2')}
				</li>
				<li>
					{$t('services.carbonMarketList3')}
				</li>
			</ul>
		{/if}

		{#if selectedTopicIndex === 2}
			<h2 class="text-4xl font-bold text-gray-700 mb-4">
				{$t('services.foreignTradeTitle')}
			</h2>
			<p class="text-gray-700 leading-relaxed">
				{$t('services.foreignTradeText')}
			</p>
			<ul class="list-disc list-inside text-gray-700 leading-relaxed mt-4">
				<li>
					{$t('services.foreignTradeListTitle')}
					<ul class="list-disc list-inside ml-4">
						<li>{$t('services.foreignTradeList1')}</li>
						<li>{$t('services.foreignTradeList2')}</li>
						<li>{$t('services.foreignTradeList3')}</li>
						<li>{$t('services.foreignTradeList4')}</li>
						<li>{$t('services.foreignTradeList5')}</li>
					</ul>
				</li>
				<li>
					{$t('services.foreignTradeListTitle2')}
					<ul class="list-disc list-inside ml-4">
						<li>{$t('services.foreignTradeList6')}</li>
						<li>{$t('services.foreignTradeList7')}</li>
						<li>{$t('sservices.foreignTradeList8')}</li>
						<li>{$t('services.foreignTradeList9')}</li>
					</ul>
				</li>
			</ul>
		{/if}

		{#if selectedTopicIndex === 3}
			<h2 class="text-4xl font-bold text-gray-700 mb-4">
				{$t('services.governmentRelationsTitle')}
			</h2>
			<p class="text-gray-700 leading-relaxed">
				{$t('services.governmentRelationsText')}
			</p>
			<ul class="list-disc list-inside text-gray-700 leading-relaxed mt-4">
				<li>{$t('services.governmentRelationsList1')}</li>
				<li>{$t('services.governmentRelationsList2')}</li>
				<li>{$t('services.governmentRelationsList3')}</li>
				<li>{$t('services.governmentRelationsList4')}</li>
				<li>{$t('services.governmentRelationsList5')}</li>
			</ul>
		{/if}
	</div>
</div>
