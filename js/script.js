// Descargar CV
$("#aboutMe").click(function() {
	const url = "../portfolio/doc/CV.pdf"
	window.open(url, 'Download');
});

// 3D Effect Projects

const contenedorInfo1 = document.querySelector(".contenedorInfo1");
const card1 = document.querySelector(".card1");
const icono1 = document.querySelector(".icono1 img");
const info1 = document.querySelector(".info1 h1");

const contenedorInfo2 = document.querySelector(".contenedorInfo2");
const card2 = document.querySelector(".card2");
const icono2 = document.querySelector(".icono2 img");
const info2 = document.querySelector(".info2 h3");

const contenedorInfo3 = document.querySelector(".contenedorInfo3");
const card3 = document.querySelector(".card3");
const icono3 = document.querySelector(".icono3 img");
const info3 = document.querySelector(".info3 h3");

const contenedorInfo4 = document.querySelector(".contenedorInfo4");
const card4 = document.querySelector(".card4");
const icono4 = document.querySelector(".icono4 img");
const info4 = document.querySelector(".info4 h4");

// ------Evento de animación de movimiento ICONO #1 -------
contenedorInfo1.addEventListener('mousemove', (e) =>{
	let xAxis1 = ((window.innerWidth - e.pageX)/8.5)-40;
	card1.style.transform = `rotateY(${xAxis1}deg)`;
});
//animateIn
contenedorInfo1.addEventListener('mouseenter', (e)=>{
	card1.style.transition = 'none';
})
//animateOut
contenedorInfo1.addEventListener('mouseleave', (e) =>{
	card1.style.transition = 'all 0.5s ease';
	card1.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
// --------Evento de animación de movimiento ICONO #2------
contenedorInfo2.addEventListener('mousemove', (e) =>{
	let xAxis1 = ((window.innerWidth - e.pageX)/8.5)-40;
	card2.style.transform = `rotateY(${xAxis1}deg)`;
});
//animateIn
contenedorInfo2.addEventListener('mouseenter', (e)=>{
	card2.style.transition = 'none';
})
//animateOut
contenedorInfo2.addEventListener('mouseleave', (e) =>{
	card2.style.transition = 'all 0.5s ease';
	card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
// --------Evento de animación de movimiento ICONO #3--------
contenedorInfo3.addEventListener('mousemove', (e) =>{
	let xAxis1 = ((window.innerWidth - e.pageX)/8.5)-40;
	card3.style.transform = `rotateY(${xAxis1}deg)`;
});
//animateIn
contenedorInfo3.addEventListener('mouseenter', (e)=>{
	card3.style.transition = 'none';
})
//animateOut
contenedorInfo3.addEventListener('mouseleave', (e) =>{
	card3.style.transition = 'all 0.5s ease';
	card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
// ------Evento de animación de movimiento ICONO #4-------
contenedorInfo4.addEventListener('mousemove', (e) =>{
	let xAxis1 = ((window.innerWidth - e.pageX)/8.5)-40;
	card4.style.transform = `rotateY(${xAxis1}deg)`;
});
//animateIn
contenedorInfo4.addEventListener('mouseenter', (e)=>{
	card4.style.transition = 'none';
})
//animateOut
contenedorInfo4.addEventListener('mouseleave', (e) =>{
	card4.style.transition = 'all 0.5s ease';
	card4.style.transform = `rotateY(0deg) rotateX(0deg)`;
});


/*=============================================
VALIDAR FORMULARIO
=============================================*/

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

/*=============================================
SCROLL UP
=============================================*/

$.scrollUp({
	scrollText: "",
	scrollSpeed:2000,
	easingType: "easeInOutBack"
});


/*=============================================
AUTO GET DRESS
=============================================*/
let quantityShirt = 10;
let shirt = 4;
setInterval(()=>{
	let avatar = document.querySelector('.rightHome img');

	if(shirt > quantityShirt){
		shirt = 1;
	}
	avatar.setAttribute('style', 'transition: 1s opacity ease-in-out');
	avatar.setAttribute('src', 'img/home'+ shirt +'.png');
	shirt++;
}, 5000);