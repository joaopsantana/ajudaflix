$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

var botao = document.getElementById("botao");
botao.addEventListener("click", event => {
    event.preventDefault();
    alert("Ajude instituições clicando nos cards, este site é apenas informativo e não possui qualquer relação com as instituições abaixo.")
});