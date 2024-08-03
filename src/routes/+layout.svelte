<script>
	import '../app.css'
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import Nav from '../components/nav.svelte';
	import Footer from '../components/footer.svelte';
    import Banner from '../components/banner.svelte';

  let currentPage = 'home';
  let bannerTitle = 'Welcome to Law Consulting';
  let bannerImgSrc = `${base}/business.jpg`;

  $: {
    const path = $page.url.pathname;

    if (path === '/') {
      currentPage = 'home';
      bannerTitle = 'Welcome to Law Consulting';
      bannerImgSrc = `${base}/business.jpg`;
    } else if (path.startsWith('/about')) {
      currentPage = 'about';
      bannerTitle = 'About Us';
      bannerImgSrc = `${base}/business.jpg`;
    } else if (path.startsWith('/services')) {
      currentPage = 'services';
      bannerTitle = 'Our Services';
      bannerImgSrc = `${base}/business.jpg`;
    } else if (path.startsWith('/contact')) {
      currentPage = 'contact';
      bannerTitle = 'Contact Us';
      bannerImgSrc = `${base}/business.jpg`;
    }
  }
</script>

<div class="flex flex-col min-h-screen">
  <Nav {currentPage} />
  <Banner title={bannerTitle} imgSrc={bannerImgSrc}/>

  <main class="flex-grow py-6 sm:py-8 md:py-12 lg:py-16">
    <slot />
  </main>

  <Footer />
</div>

