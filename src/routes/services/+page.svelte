<script>
  // Define an array of services
	import { base } from '$app/paths';

  const services = [
    {
      imgSrc: `${base}/indicator-svgrepo-com.svg`,
      title: 'Regulatory Compliance',
      description: 'Ensure your business meets all regulatory requirements with our comprehensive compliance services.'
    },
    {
      imgSrc: `${base}/order-svgrepo-com.svg`,
      title: 'Legal Consultation',
      description: 'Get expert advice on legal matters to make informed decisions and protect your interests.'
    },
    {
      imgSrc: `${base}/office-svgrepo-com.svg`,
      title: 'Contract Review',
      description: 'Review and manage contracts effectively to avoid potential legal issues and ensure compliance.'
    },
    {
      imgSrc: `${base}/database-svgrepo-com.svg`,
      title: 'Risk Management',
      description: 'Identify and mitigate risks to protect your business from potential legal and financial issues.'
    },
    {
      imgSrc: `${base}/indicator-svgrepo-com.svg`,
      title: 'Litigation Support',
      description: 'Receive professional support throughout the litigation process to navigate complex legal challenges.'
    }
  ];
</script>

<section class="py-12 bg-gray-100">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8 text-center">Our Services</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each services as { imgSrc, title, description }}
        <div class="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center border-t-4 border-teal-700">
          <img src={imgSrc} alt={title} class="w-12 h-12 mb-4" />
          <h3 class="text-xl font-semibold mb-2">{title}</h3>
          <p>{description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
