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

function sendWhatsApp() {
    const name = document.getElementById("name").Value.trim();
    const phone = document.getElementById("phone").value.trim();
    const product = document.getElementById("product").value.trim();
    const message = document.getElementById("message").value.trim();

    const fullMessage = 'Hello, my name is ${name}. I want to order: ${product}. Phone number: ${phone}. Message: ${message}';

    const whatsappURL = 'https://wa.me/2347089227283?text=${encodeURIComponent(fullMessage)}';

    window.open(whatsappURL, "_blank");
    return false; 
}
document.getElementById("menu-toggle").addEventListener("click", ()=> {
    document.getElementById("nav-links").classList.toggle("active");
});