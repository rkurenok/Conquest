export function menuBurger() {
    document.querySelector(".menu-burger__btn").addEventListener('click', function(e) {
        document.querySelector(".menu-burger__btn").classList.toggle('active');
        document.querySelector(".header__nav").classList.toggle('active'); 
        document.querySelector(".header__helpers-icon").classList.toggle('active'); 
    })
}