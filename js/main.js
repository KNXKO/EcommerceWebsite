document.addEventListener("DOMContentLoaded", () => {
  let cartIcon = document.querySelector("#cart-icon");
  let cart = document.querySelector(".cart");
  let closeCart = document.querySelector("#close-cart");

  // Open Cart
  cartIcon.onclick = () => {
    cart.classList.add("active");
  };

  // Close Cart
  closeCart.onclick = () => {
    cart.classList.remove("active");
  };
});
