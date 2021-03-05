
  $(document).ready(function () {
    $('.menuContainer').load('templates/navbar.html');
    $('.acercaContainer').load('templates/acerca_de_mi.html');
    $('.experienciaContainer').load('templates/experiencia.html');
    $('.portafolioContainer').load('templates/portafolio.html');
    $('.contactoContainer').load('templates/contacto.html');
    $('.footerContainer').load('templates/footer.html');
  });
  
  /*document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });*/

  $(document).ready(function(){
 
    $('.ir-arriba').click(function(){
      $('body, html').animate({
        scrollTop: '0px'
      }, 300);
    });
   
    $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
        $('.ir-arriba').slideDown(300);
      } else {
        $('.ir-arriba').slideUp(300);
      }
    });
   
  });

  ScrollReveal().reveal('.menuContainer', { delay: 700 });
  ScrollReveal().reveal('.acercaContainer', { delay: 700 });
  ScrollReveal().reveal('.experienciaContainer', { delay: 700 });
  ScrollReveal().reveal('.portafolioContainer', { delay: 700 });
  ScrollReveal().reveal('.contactoContainer', { delay: 700 });
  ScrollReveal().reveal('.footerContainer', { delay: 700 });