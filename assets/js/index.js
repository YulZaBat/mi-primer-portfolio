

const btnOpen = document.querySelector('.btn--open')

const btnClose = document.querySelector('.btn--close')


const navMenu = document.querySelector('.nav__menu')

/* Agregar evento por propiedad */

btnOpen.onclick = function () {
    /* navMenu.classList.add ('show--menu') */
    navMenu.classList.toggle('show--menu')
}

btnClose.onclick = function () {
    navMenu.classList.remove('show--menu')
}

// Metodo para manejar eventos
// addEventListener
// querySelectorAll

const links = document.querySelectorAll('.nav__link')

for (let i = 0; i < links.length; i++){
    links[i].addEventListener('click',function (){
        navMenu.classList.remove('show--menu')
    })
}

/* Usando la libreria typing.js */

var typed = new Typed('#typing', {
    strings: ['Frontend', 'Backend', 'FullStack'],
    typeSpeed: 65,
    loop: true,
  });