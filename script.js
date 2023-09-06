document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("#trocar-imagem");
    const image = document.querySelector("#imagem");
    const bgcolor = document.querySelector("#bgcolor");
    const texto = document.querySelector("#texto");
    const originalImageUrl = image.src; // Salva a URL original da imagem

    button.addEventListener("mouseover", function () {
      const newImageUrl = "assets/imagens/bg-full-quente.png"; // Substitua com a nova URL da imagem
      image.src = newImageUrl;
      bgcolor.style.backgroundColor = "none";
      bgcolor.style.backgroundImage = "linear-gradient(to right, rgba(227, 155, 22, 0.502), #23284B)";
    });

    button.addEventListener("mouseout", function () {
      image.src = originalImageUrl; // Retorna à imagem original quando o mouse sai do botão
      bgcolor.style.backgroundImage = "none" ;
      bgcolor.style.backgroundColor = "#23284B";
    });

    button.addEventListener("mouseenter", () =>{
      texto.style.transform="translateY(-20px)";
    })

    button.addEventListener("mouseleave", () =>{
      texto.style.transform="translateY(0)";
    })
});

function isElementInViewport(elemento, percentagemVisivel) {
  var rect = elemento.getBoundingClientRect();
  var alturaElemento = rect.height;
  var limiar = (alturaElemento * (percentagemVisivel / 100));

    return (
      rect.top <= (window.innerHeight - limiar) && rect.bottom >= limiar
    );
}

function animateOnScroll() {
  var elementosAnimar = document.querySelectorAll('.animar');

  elementosAnimar.forEach(function (elemento) {
      if (isElementInViewport(elemento, 20)) {
          elemento.style.opacity = '1';
          elemento.style.transform = 'translateY(0px)';
      }
  });
}

// Registra um evento de rolagem para verificar quando a segunda seção está visível
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

function menuShow(){
  let menuMobile = document.querySelector(".mobile-links");

  if(menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open');
    
  }else{
    menuMobile.classList.add('open');
  }
}
