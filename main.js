
/*Aparece y desaparece el menú al hacer clic en el email.---------------------*/
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

/*Aparece y desaparece el menú al hacer clic en el botón hamburgesa.---------------------*/
const btnMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


/*Aparece y desaparece contenido del carrito de compras*/
const btnCarrito = document.querySelector('.navbar-shopping-cart');
const myorder = document.querySelector('.product-detail');


/*Aparece y desaparece el menú al hacer clic en el email.---------------------*/
menuEmail.addEventListener('click',toggleDesktopMenu);

/*Aparece y desaparece el menú al hacer clic en el botón hamburgesa.---------------------*/
btnMobileMenu.addEventListener('click',toggleMobileMenu);

/*Aparece y desaparece contenido del carrito de compras*/
btnCarrito.addEventListener('click',toggleCarrito);

/*Aparece y desaparece el menú al hacer clic en el email.---------------------*/
function hideOrdenMenu()
{
    const ismyOrdenClosed = myorder.classList.contains('inactive');
    if (!ismyOrdenClosed){//si está abierto el menú de la orden lo cierra
        myorder.classList.add('inactive');
    }   
}

function hideMobileMenu()
{
    const ismobileMenuclosed = mobileMenu.classList.contains('inactive');
    if (!ismobileMenuclosed){//si está abierto el menú móvil lo cierra
        mobileMenu.classList.add('inactive');
    }
}

function hideDesktopMenu()
{
    const isDesktopMenuclosed = desktopMenu.classList.contains('inactive');
    if (!isDesktopMenuclosed){//si está abierto el menú desktop lo cierra
        desktopMenu.classList.add('inactive');
    }
}

function toggleDesktopMenu(){
    console.log('Click Desktop Menú');
    hideOrdenMenu()
    desktopMenu.classList.toggle('inactive');

}

/*Aparece y desaparece el menú al hacer clic en el botón hamburgesa.---------------------*/
function toggleMobileMenu(){
    console.log('Click Mobile Menú');
    const ismyOrdenClosed = myorder.classList.contains('inactive');
    hideOrdenMenu();
    mobileMenu.classList.toggle('inactive');//muestra / oculta el menú móvil.
}


/*Aparece y desaparece contenido del carrito de compras*/
function toggleCarrito(){
    console.log('Click muestra carrito');
    hideMobileMenu();
    hideDesktopMenu();
    myorder.classList.toggle('inactive');//muestr/oculta el menú con la orden
   

}
