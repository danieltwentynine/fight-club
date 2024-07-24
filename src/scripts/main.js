document.addEventListener('DOMContentLoaded', function(){

    const heroSection = document.querySelector('.hero');
    const heightHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const scrollPosition = window.scrollY;

        if(scrollPosition < heightHero) {
            hideHeaderElement();
        } else {
            showHeaderElement();
        }
    })

})

function hideHeaderElement() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeaderElement() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}