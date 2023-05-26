
/*Aparece y desaparece el men� al hacer clic en el email.---------------------*/
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

/*Aparece y desaparece el men� al hacer clic en el bot�n hamburgesa.---------------------*/
const btnMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


/*Aparece y desaparece el men� al hacer clic en el email.---------------------*/
menuEmail.addEventListener('click',toggleDesktopMenu);

/*Aparece y desaparece el men� al hacer clic en el bot�n hamburgesa.---------------------*/
btnMobileMenu.addEventListener('click',toggleMobileMenu);

/*Aparece y desaparece el men� al hacer clic en el email.---------------------*/
function toggleDesktopMenu(){
    console.log('Click Desktop Men�');
    desktopMenu.classList.toggle('inactive');
}

/*Aparece y desaparece el men� al hacer clic en el bot�n hamburgesa.---------------------*/
function toggleMobileMenu(){
    console.log('Click Mobile Men�');
    mobileMenu.classList.toggle('inactive');
}
