// ScrollReveal

window.sr = ScrollReveal();

sr.reveal('.nav-item', {
  delay: 500,
  origin: 'bottom',
  distance: '-20px'
});

  sr.reveal('.t1', {
    delay: 100,
    origin: 'bottom',
    distance: '-20px'
  });
   
  sr.reveal('.scroll', {
    duration: 3000,
    origin: 'top',
    distance: '100px'
  });

  sr.reveal('.w-info', {
    delay: 300,
    origin: 'bottom',
    distance: '100px'
  });

  sr.reveal('.works', {
    delay: 300,
    origin: 'bottom',
    distance: '100px'
  });

  sr.reveal('.next', {
    delay: 300,
    origin: 'bottom',
    distance: '1000px'
  });


  sr.reveal('.b-container', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
  });

  sr.reveal('.touch a', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
  });

// Sticky Navegation Bar

const body = document.querySelector('body');
const navbar = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');
const logo = document.querySelector('.logo');
const logoLink = document.querySelector('.logo a');
const scrollDiv = document.querySelector('.scroll-left');
const containerDiv = document.querySelector('.container');
const menu = document.querySelector('.wrapper');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const mediaQuery = window.matchMedia('(max-width: 600px)');

  menuBtn.addEventListener('click', () => {

    // Al clickear en el botón del menu, se abre
    menu.classList.add('active');
/*     menu.classList.toggle('active') */
    menuBtn.classList.add('hide');
    body.classList.add('disabledScroll'); 
  });

  cancelBtn.addEventListener('click', () => {
    
    // Al clickear en el botón del menu, se cierra
    menu.classList.remove('active');
    menuBtn.classList.remove('hide');
    body.classList.remove('disabledScroll');
  })

  window.addEventListener('scroll', () => {

    // Al scrollear hacia abajo se muestra el header
    navbar.classList.toggle('sticky', window.scrollY > 0)

    if (window.scrollY === 0) {
      
      navItems.forEach( item => {
        item.style.display = 'block';
      }) 

      containerDiv.classList.remove('fix'); 
      menuBtn.style.display = 'none';
      logoLink.style.color = '#231f20';

      if(mediaQuery.matches) { 
        logoLink.style.color = '#ebfcff';
        menuBtn.style.display = 'block';
      }

    } else{
      
      navItems.forEach( item => {
        item.style.display = 'none';
      })

      containerDiv.classList.add('fix');
      menuBtn.style.display = 'block';
      logoLink.style.color = '#ebfcff';

      if(mediaQuery.matches) { 
        logoLink.style.color = '#ebfcff';
      }
    } 
  })

  // Cursor
document.addEventListener('DOMContentLoaded', () =>{
  
  const cursor = document.querySelector('.cursor');
  const touchLink = document.querySelector('.touch a');
  document.addEventListener('mousemove',mouseCursor)
  
  function mouseCursor(e){
    let x = e.clientX - 25;
    let y = e.clientY - 20;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
  }

  touchLink.addEventListener('mouseenter', () => {
    cursor.classList.remove('unactive-touch');
    cursor.classList.add('active-touch');
  });

  touchLink.addEventListener('mouseleave', () => {
    cursor.classList.remove('active-touch');
    cursor.classList.add('unaactive-touch');
  });

   // Fecha actualizada en el footer
  const year = document.querySelector("#year")
  const currentYear = new Date().getFullYear();
  year.textContent = currentYear;
});

// Desactiva el click derecho en las imagenes
let allImages = document.querySelectorAll("img");
allImages.forEach((value)=>{
    value.oncontextmenu = e => {
        e.preventDefault();
    }

});






