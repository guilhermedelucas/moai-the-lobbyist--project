<script>
  let isOpen = false;
  export let currentPage = '';
  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeMenu() {
	isOpen = false;
  }
</script>

<nav class="absolute p-8 text-white w-full z-10">
  <div class="container mx-auto flex justify-between items-start">
    <a href="/" class="text-2xl font-bold">
		<img src="moai-logo.png" alt="Law Consulting" style="height:96px;" />
	</a>

    <!-- Desktop Menu -->
    <div class="hidden lg:flex space-x-6 items-center">
      <a href="/" class="{currentPage === 'home' ? 'font-bold' : ''} hover:underline">Home</a>
      <a href="/about" class="{currentPage === 'about' ? 'font-bold' : ''} hover:underline">About Us</a>
      <a href="/services" class="{currentPage === 'services' ? 'font-bold' : ''} hover:underline">Services</a>
      <a href="/contact" class="{currentPage === 'contact' ? 'font-bold' : ''} hover:underline bg-teal-700 text-white p-2 px-4 rounded">Contact</a>
    </div>

    <!-- Burger Menu Icon -->
    <button on:click={toggleMenu} class="lg:hidden flex items-center">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div class={`fixed inset-0 bg-gray-900 bg-opacity-90 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
    <div class="flex justify-end p-4">
      <button on:click={toggleMenu} class="text-white text-2xl">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <ul class="flex flex-col items-center space-y-6 mt-12">
      <li><a href="/" on:click={closeMenu} class="text-white text-xl {currentPage === 'home' ? 'font-bold' : ''} hover:underline">Home</a></li>
      <li><a href="/about" on:click={closeMenu} class="text-white text-xl {currentPage === 'about' ? 'font-bold' : ''} hover:underline">About Us</a></li>
      <li><a href="/services" on:click={closeMenu} class="text-white text-xl {currentPage === 'services' ? 'font-bold' : ''} hover:underline">Services</a></li>
      <li><a href="/contact" on:click={closeMenu} class="text-white text-xl {currentPage === 'contact' ? 'font-bold' : ''} hover:underline">Contact</a></li>
    </ul>
  </div>
</nav>
