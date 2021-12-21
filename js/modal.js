// Modal gallery
const body = document.querySelector('body');
const oculted = document.querySelector('.oculted');
const sd = document.querySelector('.sd');

const lightboxBg = document.createElement('div');
lightboxBg.id = 'lightboxBg';
document.body.appendChild(lightboxBg)

const images = document.querySelectorAll('.gallery img');
images.forEach(img => {
    img.addEventListener('click', () => {
        lightboxBg.classList.add('active');
        body.classList.add('disabledScroll'); 

        const lightboxImg = document.createElement('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxImg.id = 'lightboxImg';

        while (lightboxBg.firstChild) {
            lightboxBg.removeChild(lightboxBg.firstChild)
        }

        lightboxBg.appendChild(lightboxImg);
        if(img === sd) {
            arrayImg = [
                'works/RediseñoWeb/Ridery/r1.png',
                'works/RediseñoWeb/Ridery/r2.png',
                'works/RediseñoWeb/Ridery/r3.png',
                'works/RediseñoWeb/Ridery/r4.png',
                'works/RediseñoWeb/Ridery/r5.png',
                'works/RediseñoWeb/Ridery/r6.png',
                'works/RediseñoWeb/Ridery/r7.png',
                'works/RediseñoWeb/Ridery/r8.png',
                'works/RediseñoWeb/Ridery/r9.png',
                'works/RediseñoWeb/Ridery/r10.png',
                'works/RediseñoWeb/Ridery/r11.png',]

            arrayImg.forEach( image => {
                const img = document.createElement('img');
                img.src = image;
                lightboxBg.appendChild(img);
            })
        }


    })
})

lightboxBg.addEventListener('click', () => {
    lightboxBg.classList.remove('active');
    body.classList.remove('disabledScroll'); 
})
