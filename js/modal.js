// Modal gallery
const body = document.querySelector('body');
const oculted = document.querySelector('.oculted');
const sd = document.querySelector('.sd');
const redZend = document.querySelector('.redZen');

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

        if(img === redZend) {
            arrayImg = [
                'works/RediseñoWeb/ZenGaku/1.png',
                'works/RediseñoWeb/ZenGaku/2.png',
                'works/RediseñoWeb/ZenGaku/3.png',
                'works/RediseñoWeb/ZenGaku/4.png',
                'works/RediseñoWeb/ZenGaku/4.1.png',
                'works/RediseñoWeb/ZenGaku/5.png',
                'works/RediseñoWeb/ZenGaku/6.png',
                'works/RediseñoWeb/ZenGaku/7.png',
                'works/RediseñoWeb/ZenGaku/8.png',
                'works/RediseñoWeb/ZenGaku/9.png',
                'works/RediseñoWeb/ZenGaku/10.png',
                'works/RediseñoWeb/ZenGaku/11.png',
                'works/RediseñoWeb/ZenGaku/12.png',
                'works/RediseñoWeb/ZenGaku/13.png'
]

            arrayImg.forEach( image => {
                const img = document.createElement('img');
                img.src = image;
                lightboxBg.appendChild(img);
            })
            
        }


    })
});

lightboxBg.addEventListener('click', () => {
    lightboxBg.classList.remove('active');
    body.classList.remove('disabledScroll'); 
});

// Desactiva el click derecho en las imagenes

let allImages = document.querySelectorAll("img");
allImages.forEach((value)=>{
    value.oncontextmenu = e => {
        e.preventDefault();
    }
});
