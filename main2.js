ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.showcase-logo', { delay: 500});
ScrollReveal().reveal('.bosquimano', { delay: 500});
ScrollReveal().reveal('.cuchillos', { delay: 500});
ScrollReveal().reveal('.header', { delay: 1000});
ScrollReveal().reveal('.txt1', { delay: 500});
ScrollReveal().reveal('.product1', { delay: 500});
ScrollReveal().reveal('.product2', { delay: 500});
ScrollReveal().reveal('.product3', { delay: 500});
ScrollReveal().reveal('.txt2', { delay: 500});
ScrollReveal().reveal('.social', { delay: 500});
ScrollReveal().reveal('.map', { delay: 500});
ScrollReveal().reveal('.fotter-form', { delay: 500});
ScrollReveal().reveal('.form', { delay: 500});

const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        //Toggle Nav    
        nav.classList.toggle('nav-active');
   
        //Animate Links
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;        
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
        
    });
}

navSlide(); 