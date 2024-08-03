<script>
	import '../app.css'
	import { page } from '$app/stores';
import { onMount } from 'svelte';
	import Nav from '../components/nav.svelte';
	import Footer from '../components/footer.svelte';
    import Banner from '../components/banner.svelte';


  let currentPage = 'home';
  let bannerTitle = 'Welcome to Law Consulting';
  let bannerImgSrc = '/path/to/your/default-image.jpg';

  $: {
    const path = $page.url.pathname;

    if (path === '/') {
      currentPage = 'home';
      bannerTitle = 'Welcome to Law Consulting';
      bannerImgSrc = '/business.jpg';
    } else if (path.startsWith('/about')) {
      currentPage = 'about';
      bannerTitle = 'About Us';
      bannerImgSrc = '/business.jpg';
    } else if (path.startsWith('/services')) {
      currentPage = 'services';
      bannerTitle = 'Our Services';
      bannerImgSrc = '/business.jpg';
    } else if (path.startsWith('/contact')) {
      currentPage = 'contact';
      bannerTitle = 'Contact Us';
      bannerImgSrc = '/business.jpg';
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

