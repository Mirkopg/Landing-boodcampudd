let variable = 'variable 1'

const constante = 3.1416;

let bool = true

let persona = {
    Nombre: 'Mirko',
    edad: 25,
    mayorDeEdad: true
}

// console.log(persona.Nombre);

// if (persona.edad >= 18) {
//    console.log('Es mayor de edad')
// } else {
//    console.log('No es mayor de edad')
// }

let lista =[ 'Lunes','Martes','Miercoles','Jueves','Viernes' ];

// for (let index= 0; index < lista.length; index++) {
//  console.log(lista[index])
// }

function saludo(Nombre) {
    console.log('Hola: ' + Nombre)
}

// saludo('Mirko'); 


// console.log ('Hello World');

/* 
Comentarios para recordar la variable 
*/


// let elemento = document.querySelector('.container')

// console.log(elemento);


// Function of carousel

const delay = 3000

const slides = document.querySelector('.slides')
console.log('slides', slides);

const slidesCount = slides.childElementCount 

console.log('slidesCount', slidesCount);

const maxLeft = (slidesCount - 1) * 100 * -1

let current = 0; 

function changeSlide(next = true) {
    if(next) {
        current += current > maxLeft ? -100 : current * -1; 
    } else {
        current = current < 0 ? current + 100 : maxLeft; 
    }
    slides.style.left = `${current}%`
}

let autoChange = setInterval(changeSlide, delay)

function restart() {
    clearInterval(autoChange);
    autoChange = setInterval(changeSlide, delay);
}

// controls 

document.querySelector(".next-slide").addEventListener("click", function() {
    changeSlide();
    restart();
})
document.querySelector(".prev-slide").addEventListener("click", function() {
    changeSlide(false);
    restart();
})

