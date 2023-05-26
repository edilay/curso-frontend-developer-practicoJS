
/*Aparece y desaparece el menú al hacer clic en el email.---------------------*/
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

/*Aparece y desaparece el menú al hacer clic en el botón hamburgesa.---------------------*/
const btnMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


/*Aparece y desaparece el menú al hacer clic en el email.---------------------*/
menuEmail.addEventListener('click',toggleDesktopMenu);

/*Aparece y desaparece el menú al hacer clic en el botón hamburgesa.---------------------*/
btnMobileMenu.addEventListener('click',toggleMobileMenu);

/*Aparece y desaparece el menú al hacer clic en el email.---------------------*/
function toggleDesktopMenu(){
    console.log('Click Desktop Menú');
    desktopMenu.classList.toggle('inactive');
}

/*Aparece y desaparece el menú al hacer clic en el botón hamburgesa.---------------------*/
function toggleMobileMenu(){
    console.log('Click Mobile Menú');
    mobileMenu.classList.toggle('inactive');
}
