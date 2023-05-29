
/*Aparece y desaparece el menú al hacer clic en el email.---------------------*/
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

/*Aparece y desaparece el menú al hacer clic en el botón hamburgesa.---------------------*/
const btnMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


/*Aparece y desaparece contenido del carrito de compras*/
const btnCarrito = document.querySelector('.navbar-shopping-cart');
//En el ejemplo este se llama shoppingCartContainer
const myorder = document.querySelector('#shoppingCartContainer');

//constante tipo array para la liste de productos
const productLis = [];

//Constante para la grilla que despliega los productos
const cardsContainer = document.querySelector('.cards-container');

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
// INGRESA PRODUCTOS DE EJEMPLO EN EL ARRAY
productLis.push({
  name: 'Cicla',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productLis.push({
    name: 'Cicla 2',
    price: 140,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    
  });

  productLis.push({
    name: 'Cicla 3',
    price: 160,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    
  });
  productLis.push({
    name: 'Cicla 4',
    price: 180,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    
  });  
//Función que crea por cada producto el elemento en pantalla
function renderProducts(Productos){
    for(product of Productos) {
    /*así ec como se verá cada elemento creado
        <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
            </div>
        </div>
    */

    console.log(product.name);
        //Crea un producto para visualizar en la grilla
    const productCard=  document.createElement('div');//crea el div
    productCard.classList.add('product-card');//le adiciona la clase

    const productImg = document.createElement('img');//Crea la imagen del producto
    productImg.setAttribute('src',product.image);//en lugar de la url se usa la propiedad image del array
    //Crea el div interno con la  información del producto
        const productinfo = document.createElement('div');//crea el div
        productinfo.classList.add('product-info');//le adiciona la case
        //Crea el div para presentar el precio y nombre
            const productinfodiv = document.createElement('div');//crea el div de la información
                const productPrice = document.createElement('P')// crea etiqueta P para el precio
                productPrice.innerText = '$ ' + product.price;
                const productName = document.createElement('P')// crea etiqueta P para el nombre
                productName.innerText = product.name;
            //adiciona el precio y el nombre al div de información del producto    
            productinfodiv.appendChild(productPrice);
            productinfodiv.appendChild(productName);
    
            const productinfoFigure = document.createElement('figure');//crea el contenedor para la imagen    
            const productImgCart  = document.createElement('img');//crea el contenedor para la imagen de adicionar al carrito   
            productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');//se usa la url para todos los elemento ya que no cambia  
            productinfoFigure.appendChild(productImgCart);//adiciona la imagen al contenedor
        //adiciona al productinto el div de información del producto y la figura del adicionar
        productinfo.appendChild(productinfodiv);
        productinfo.appendChild(productinfoFigure);
    //adiciona al div con la clase product-card la imagen y la información del dibujo
    productCard.appendChild(productImg);
    productCard.appendChild(productinfo);

    //adiciona a la grilla el productos el div del producto creado
    cardsContainer.appendChild(productCard);

    }
}

renderProducts(productLis);
