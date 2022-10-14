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
const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) =>{
    e.preventDefault()
    //comprobar si los campos tienen un valor
    if(calculateCm.value === ''|| calculateKg.value===''){
        //añadir y remover color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        //Mostrar mensaje
        calculateMessage.textContent ='Rellene la altura y el peso 🧑‍💻'
        
        //quitar mensaje tres segundos
        setTimeout(() =>{
            calculateMessage.textContent = ''
        },3000)
    }else{
        //Formula BMI
        const cm = calculateCm.value / 100,
              kg = calculateKg.value,
              bmi = Math.round(kg / (cm * cm))
        
        //muestra tu estado de salud
        if(bmi < 18.5){
            //agregar color y mostrar mensaje
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tu BMI es ${bmi} y eres delgado 😔`
        }else if(bmi < 25){
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tu BMI es ${bmi} y eres saludable 😁`
        }else{
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Tu BMI es ${bmi} y eres gordo 😢`
        }

        //limpiar
        calculateCm.value = ''
        calculateKg.value = ''

        //quitar mensaje 4 seg
        setTimeout(() =>{
            calculateMessage.textContent = ''
        },4000)
    }
}


calculateForm.addEventListener('submit', calculateBmi)

/*=============== EMAIL JS ===============*/
