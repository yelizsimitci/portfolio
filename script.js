// Reveal images as you scroll (like high-end portfolio sites)
const items = document.querySelectorAll('.masonry-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

items.forEach(item => observer.observe(item));
