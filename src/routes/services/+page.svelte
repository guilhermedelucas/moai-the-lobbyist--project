<!-- <script>
	// Define an array of services
	import { base } from '$app/paths';

	const services = [
		{
			imgSrc: `${base}/indicator-svgrepo-com.svg`,
			title: 'Regulatory Compliance',
			description:
				'Ensure your business meets all regulatory requirements with our comprehensive compliance services.'
		},
		{
			imgSrc: `${base}/order-svgrepo-com.svg`,
			title: 'Legal Consultation',
			description:
				'Get expert advice on legal matters to make informed decisions and protect your interests.'
		},
		{
			imgSrc: `${base}/office-svgrepo-com.svg`,
			title: 'Contract Review',
			description:
				'Review and manage contracts effectively to avoid potential legal issues and ensure compliance.'
		},
		{
			imgSrc: `${base}/database-svgrepo-com.svg`,
			title: 'Risk Management',
			description:
				'Identify and mitigate risks to protect your business from potential legal and financial issues.'
		},
		{
			imgSrc: `${base}/indicator-svgrepo-com.svg`,
			title: 'Litigation Support',
			description:
				'Receive professional support throughout the litigation process to navigate complex legal challenges.'
		}
	];
</script>

<section class="py-12 bg-gray-100">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl font-bold mb-8 text-center">Our Services</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each services as { imgSrc, title, description }}
				<div
					class="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center border-t-4 border-teal-700"
				>
					<img src={imgSrc} alt={title} class="w-12 h-12 mb-4" />
					<h3 class="text-xl font-semibold mb-2">{title}</h3>
					<p>{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section> -->
<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores'; // SvelteKit store for reactive page data
	import { derived } from 'svelte/store';
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import ArrowIcon from '../../components/sections/arrow-icon.svelte';

	const topics = [
		{ key: 'compliance', label: 'Compliance Regulatório' },
		{ key: 'carbonMarket', label: 'Mercado de Carbono' },
		{ key: 'foreignTrade', label: 'Comércio Exterior' },
		{ key: 'governmentRelations', label: 'Relações Governamentais' }
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
			console.debug(selectedTopicIndex);
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

	// onDestroy(() => {
	// 	window.removeEventListener('hashchange', updateSelectedTopic);
	// });

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
							console.debug(index);
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
			<h2 class="text-4xl font-bold text-gray-700 mb-4">Compliance Regulatório</h2>
			<p class="text-gray-700 leading-relaxed">
				Prestamos consultoria e assessoria em temas e processos regulatórios que impactam
				diretamente o seu negócio, produto ou serviço. Nossa atuação abrange:
			</p>
			<ul class="list-disc list-inside text-gray-700 leading-relaxed mt-4">
				<li>
					Interação com Agências Reguladoras e Órgãos Governamentais: INMETRO, IBAMA, ANEEL, ANATEL,
					ANP, MAPA, entre outros.
				</li>
				<li>
					Análise Regulatória: Identificação e interpretação de normas e regulamentos aplicáveis.
				</li>
				<li>
					Assessoria em Processos de Conformidade: Apoio no cumprimento de requisitos regulatórios.
				</li>
				<li>
					Gerenciamento de Riscos Regulatórios: Análise e mitigação de riscos associados à
					regulação.
				</li>
			</ul>
		{/if}

		{#if selectedTopicIndex === 1}
			<h2 class="text-4xl font-bold text-gray-700 mb-4">Mercado de Carbono</h2>
			<p class="text-gray-700 leading-relaxed">
				Oferecemos suporte completo para empresas interessadas em atuar no mercado de carbono:
			</p>
			<ul class="list-disc list-inside text-gray-700 leading-relaxed mt-4">
				<li>
					Avaliação de Viabilidade: Realização de análises técnicas e econômicas para verificar a
					viabilidade de projetos de carbono.
				</li>
				<li>
					Desenvolvimento de Projetos: Assistência na elaboração de projetos de carbono, incluindo a
					preparação da documentação necessária.
				</li>
				<li>
					Certificação: Apoio na certificação de créditos de carbono junto a organismos acreditados,
					assegurando conformidade com padrões nacionais e internacionais.
				</li>
			</ul>
		{/if}

		{#if selectedTopicIndex === 2}
			<h2 class="text-4xl font-bold text-gray-700 mb-4">Comércio Exterior</h2>
			<p class="text-gray-700 leading-relaxed">
				Nossos serviços de comércio exterior são orientados para os resultados de seu negócio
				viabilizando o acesso a insumos, bens e produtos importados a custos mais competitivos por
				meio de processos tarifários, e protegendo sua produção nacional pela via dos instrumentos
				de defesa comercial:
			</p>
			<ul class="list-disc list-inside text-gray-700 leading-relaxed mt-4">
				<li>
					Processos de Alteração Tarifária:
					<ul class="list-disc list-inside ml-4">
						<li>LETEC (Lista de Exceções à Tarifa Externa Comum)</li>
						<li>LEBIT (Lista Brasileira de Exceções Tarifárias)</li>
						<li>LEBK (Lista Brasileira de Exceções ao Imposto de Importação)</li>
						<li>Desabastecimento (GMC 49/19)</li>
						<li>Lista de Desequilíbrio</li>
						<li>Alteração Definitiva via CT-1</li>
					</ul>
				</li>
				<li>
					Defesa Comercial:
					<ul class="list-disc list-inside ml-4">
						<li>Antidumping e Interesse Público</li>
						<li>Medidas Compensatórias</li>
						<li>Anticircunvenção</li>
						<li>Medidas de Salvaguarda</li>
					</ul>
				</li>
			</ul>
		{/if}

		{#if selectedTopicIndex === 3}
			<h2 class="text-4xl font-bold text-gray-700 mb-4">Relações Governamentais</h2>
			<p class="text-gray-700 leading-relaxed">
				Oferecemos consultoria em relações governamentais em todos os níveis de governo:
			</p>
			<ul class="list-disc list-inside text-gray-700 leading-relaxed mt-4">
				<li>Federal: Interação com ministérios, secretarias e agências federais.</li>
				<li>Estadual: Assessoria junto a governos estaduais e suas respectivas agências.</li>
				<li>Municipal: Apoio na interface com prefeituras e órgãos municipais.</li>
				<li>
					Advocacy: Desenvolvimento de estratégias de advocacia para influenciar políticas públicas
					e regulatórias em favor dos interesses de nossos clientes.
				</li>
				<li>
					Monitoramento Legislativo: Acompanhamento de projetos de lei e regulamentos que possam
					impactar os negócios de nossos clientes.
				</li>
			</ul>
		{/if}
	</div>
</div>
