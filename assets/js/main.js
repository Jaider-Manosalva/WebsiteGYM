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
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // Cuando el desplazamiento es superior a 350 de altura de la ventana gráfica, agregue la clase mostrar desplazamiento a la etiqueta a con la clase desplazamiento hacia arriba
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay:400,
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval:100})
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'})

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
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')

const sendEmail = (e)=>{
    e.preventDefault()

    //comprobar si el campo tiene un valor
    if(contactUser.value == ''){
        //add and remove color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        // Mostrar mensaje
        contactMessage.textContent = 'debes ingresar tu correo electronico'

        //quitar mensaje 3 segundos
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 3000)
    }else{
        //serviceID, templateID, #form, publicKey
        emailjs.sendForm('service_qrovzu7','template_kiwg3ie','#contact-form','dclkD6xJZrg7ytI9g')
            .then(() =>{
                //mostrar mensaje y agregar color
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'Registro exitoso'
                
                // Mensaje de eliminación después de 4 segundos
                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 4000)
            }, (error) =>{
                // error de envío de correo
                alert('¡UPS! ALGO HA FALLADO...', error)
            })

        // to clear the input field
        contactUser.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)