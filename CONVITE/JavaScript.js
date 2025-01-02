let currentSlide = 12;

function updateSlide() {
    document.querySelector('#galeria .fotos').style.width = `${document.querySelectorAll('#galeria .fotos img').length * 10}%`;
  const slideshow = document.querySelector('#galeria .fotos');
  const slideWidth = document.querySelector('#galeria').offsetWidth; // Largura do container
  slideshow.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
  const slideshow = document.querySelector('#galeria .fotos');
  const totalSlides = slideshow.children.length;

  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  const slideshow = document.querySelector('#galeria .fotos');
  const totalSlides = slideshow.children.length;

  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlide();
}

// Ajuste ao redimensionar a janela
window.addEventListener('resize', updateSlide);

// Transição automática
setInterval(nextSlide, 5000); // Altere 5000ms para o tempo desejado
