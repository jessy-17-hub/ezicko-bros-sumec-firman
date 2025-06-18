function ShopNow() {
    alert("Redirecting to product section...");
    window.scrollTo({
        top: document.querySelector("products").offsetTop,
        behavior:"smooth"
    })
}

function addToCart(product) {
    alert(product+ "has been added to cart!");
}