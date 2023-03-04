document.addEventListener('DOMContentLoaded', () => {
	const lazyloadImages = document.querySelectorAll('.lazy, .lazy source');
	const imageObserver = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					var image = entry.target;
					if (image.hasAttribute('media')) {
						let dataSrc = image.getAttribute('data-src');
						image.setAttribute('srcset', dataSrc);
					} else {
						image.src = image.dataset.src;
					}
					image.classList.remove('lazy');

					imageObserver.unobserve(image);
				}
			});
		},
		{
			rootMargin: '0px 0px 50px 0px'
		}
	);

	lazyloadImages &&
		lazyloadImages.forEach((image) => {
			imageObserver.observe(image);
		});
});
