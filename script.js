// Optional: fade-in effect as user scrolls
const photos = document.querySelectorAll('.photo');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.3 });

photos.forEach(photo => {
  photo.style.opacity = 0;
  photo.style.transform = 'translateY(50px)';
  observer.observe(photo);
});
