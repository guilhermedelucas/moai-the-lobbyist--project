import { onMount } from 'svelte';

// Custom hook to handle reveal functionality
export function useReveal() {
	onMount(() => {
		function reveal() {
			const reveals = document.querySelectorAll('.reveal');
			reveals.forEach((node) => {
				const revealTop = node.getBoundingClientRect().top;
				const windowHeight = window.innerHeight;
				const revealPoint = 150;

				if (revealTop < windowHeight - revealPoint) {
					node.classList.add('active-reveal');
				}
			});
		}

		// Call reveal once on mount to reveal elements already in the viewport
		reveal();

		// Create the IntersectionObserver
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('active-reveal');
						observer.unobserve(entry.target); // Stop observing once revealed
					}
				});
			},
			{ threshold: 0.1 }
		);

		// Attach the observer to each element
		const revealElements = document.querySelectorAll('.reveal');
		revealElements.forEach((el) => observer.observe(el));
	});
}
