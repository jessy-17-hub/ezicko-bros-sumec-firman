//mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');

const closeMenu = document.querySelector('.closemenu-btn');

//show mobile menu
menuBtn.addEventListener('click', ()=>{
    menuBtn.style.display = 'none';
    document.getElementById('nav-links').style.display = 'flex';
})

//close mobile menu
closeMenu.addEventListener('click', ()=>{
    menuBtn.style.display = 'block';
    document.getElementById('nav-links').style.display = 'none';
})

//also close mobile menu when i click on a link

 document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
         document.getElementById('nav-links').style.display = 'none';
       menuBtn.style.display = 'block';
    })
 })

function ShopNow() {
    alert("Redirecting to product section...");
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

function addToCart(product) {
    alert(product + " has been added to cart!");

  let  cartNumber = document.getElementById('cart-total');

  cartNum = Number(cartNumber.innerText);
  cartNum += 1;

cartNumber.innerText = cartNum;


}

// WhatsApp sending logic
document.querySelector("#contact form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const product = document.getElementById("product").value.trim();
    const message = document.getElementById("message").value.trim();

    const fullMessage = `Hello, my name is ${name}. I want to order: ${product}. Phone number: ${phone}. Message: ${message}`;

    const whatsappURL = `https://wa.me/2347089227283?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappURL, "_blank");
    // return false; 
});

document.getElementById("menu-toggle").addEventListener("click", ()=> {
    document.getElementById("nav-links").classList.toggle("active");
});
