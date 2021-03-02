
  $(document).ready(function () {
    $('.menuContainer').load('templates/navbar.html');
    $('.acercaContainer').load('templates/acerca_de_mi.html');
    $('.experienciaContainer').load('templates/experiencia.html');
    $('.portafolioContainer').load('templates/portafolio.html');
    $('.footerContainer').load('templates/footer.html');
  });
  
  document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });

  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.news-cards', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-two', { delay: 500 });