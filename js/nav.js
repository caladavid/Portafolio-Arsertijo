(function () {
    const body = document.querySelector('body');
    const navbar = document.querySelector('.nav-list');
    const navItems = document.querySelectorAll('.nav-item');
    const logoLink = document.querySelector('.logo a');
    const containerDiv = document.querySelector('.container');
    const menu = document.querySelector('.wrapper');
    const menuBtn = document.querySelector('.menu-btn');
    const cancelBtn = document.querySelector('.cancel-btn');
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    
      menuBtn.addEventListener('click', () => {
    
        // Al clickear en el botón del menu, se abre
        menu.classList.add('active');
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
          containerDiv.classList.remove('fix'); 
    
          if(mediaQuery.matches) { 
            logoLink.style.color = '#fff5e6';
            menuBtn.style.display = 'block';
          }
    
        } else{
          
          navItems.forEach( item => {
            item.style.display = 'none';
    
            if(mediaQuery.matches) {
              item.style.display = 'none';  
            }
          })
    
          containerDiv.classList.add('fix');
          menuBtn.style.display = 'block';
    
          if(mediaQuery.matches) { 
            logoLink.style.color = '#fff5e6';

          }
        } 
      })

      // Desactiva el click derecho en las imagenes
  let allImages = document.querySelectorAll("img");
  allImages.forEach((value)=>{
      value.oncontextmenu = e => {
          e.preventDefault();
      }
  });
})();
