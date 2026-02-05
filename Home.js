  const animatedItems = document.querySelectorAll(
    '.animate-line, .animate-fade'
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.3 }
  );

  animatedItems.forEach(item => observer.observe(item));

  
  