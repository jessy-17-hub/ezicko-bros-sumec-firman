let cart=[];
let total=0;

 addEventListener('click', function (addToCart) {
    const cartItems =document.getElementById('cart-items');
    const cartTotal =document.getElementById('cart-total');
    cartItems.innerHTML='';
    cart.forEach((item,index)) => {
        const li=document.createElement('li');
        li.textContent = ${item.name}- ${item.price.tolocalstring()};
        cartItems.appendChild(li);
 }
    cartTotal.textContent=total.toLocaleString();
}