document.addEventListener("DOMContentLoaded", () => {
  let cartIcon = document.querySelector("#cart-icon");
  let cart = document.querySelector(".cart");
  let closeCart = document.querySelector("#close-cart");

  if (cartIcon && cart && closeCart) {
    // Open Cart
    cartIcon.onclick = () => {
      cart.classList.add("cart-active");
      console.log("click");
    };

    // Close Cart
    closeCart.addEventListener("click", () => {
      cart.classList.remove("cart-active");
    });
  } else {
    console.error("One or more elements not found!");
  }
});
