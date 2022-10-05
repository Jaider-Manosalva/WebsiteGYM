/*=============== MUESTRAME EL MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENÚ MOSTRAR =====*/
/* Validar si existe constante */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENÚ HIDDEN =====*/
/* Validar si existe constante */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== ELIMINAR MENÚ MÓVIL ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
   // Cuando hacemos clic en cada nav__link, eliminamos la clase show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CAMBIAR TÍTULO DE FONDO ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    /* Cuando el desplazamiento es mayor que 50 de altura de ventana gráfica, agregue
     la clase de encabezado de desplazamiento a la etiqueta del encabezado*/
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/


/*=============== EMAIL JS ===============*/
