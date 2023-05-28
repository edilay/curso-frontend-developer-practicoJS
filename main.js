
/*Aparece y desaparece el men� al hacer clic en el email.---------------------*/
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

/*Aparece y desaparece el men� al hacer clic en el bot�n hamburgesa.---------------------*/
const btnMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


/*Aparece y desaparece contenido del carrito de compras*/
const btnCarrito = document.querySelector('.navbar-shopping-cart');
const myorder = document.querySelector('.product-detail');


/*Aparece y desaparece el men� al hacer clic en el email.---------------------*/
menuEmail.addEventListener('click',toggleDesktopMenu);

/*Aparece y desaparece el men� al hacer clic en el bot�n hamburgesa.---------------------*/
btnMobileMenu.addEventListener('click',toggleMobileMenu);

/*Aparece y desaparece contenido del carrito de compras*/
btnCarrito.addEventListener('click',toggleCarrito);

/*Aparece y desaparece el men� al hacer clic en el email.---------------------*/
function hideOrdenMenu()
{
    const ismyOrdenClosed = myorder.classList.contains('inactive');
    if (!ismyOrdenClosed){//si est� abierto el men� de la orden lo cierra
        myorder.classList.add('inactive');
    }   
}

function hideMobileMenu()
{
    const ismobileMenuclosed = mobileMenu.classList.contains('inactive');
    if (!ismobileMenuclosed){//si est� abierto el men� m�vil lo cierra
        mobileMenu.classList.add('inactive');
    }
}

function hideDesktopMenu()
{
    const isDesktopMenuclosed = desktopMenu.classList.contains('inactive');
    if (!isDesktopMenuclosed){//si est� abierto el men� desktop lo cierra
        desktopMenu.classList.add('inactive');
    }
}

function toggleDesktopMenu(){
    console.log('Click Desktop Men�');
    hideOrdenMenu()
    desktopMenu.classList.toggle('inactive');

}

/*Aparece y desaparece el men� al hacer clic en el bot�n hamburgesa.---------------------*/
function toggleMobileMenu(){
    console.log('Click Mobile Men�');
    const ismyOrdenClosed = myorder.classList.contains('inactive');
    hideOrdenMenu();
    mobileMenu.classList.toggle('inactive');//muestra / oculta el men� m�vil.
}


/*Aparece y desaparece contenido del carrito de compras*/
function toggleCarrito(){
    console.log('Click muestra carrito');
    hideMobileMenu();
    hideDesktopMenu();
    myorder.classList.toggle('inactive');//muestr/oculta el men� con la orden
   

}
