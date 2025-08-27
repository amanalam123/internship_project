document.addEventListener("DOMContentLoaded", function() {
  function updateCartTotal() {
    let cartItems = document.querySelectorAll(".cart-item");
    let total = 0;

    cartItems.forEach(item => {
      let basePrice = parseInt(item.getAttribute("data-price")); 
      let quantity = parseInt(item.querySelector(".quantity").value);
      let itemTotal = basePrice * quantity;

      
      item.querySelector(".item-total").textContent = itemTotal;

      
      total += itemTotal;
    });

    document.getElementById("cart-total").textContent = total;
  }

  
  document.querySelectorAll(".quantity").forEach(select => {
    select.addEventListener("change", updateCartTotal);
  });

  
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      this.closest(".cart-item").remove();
      updateCartTotal();
    });
  });

  
  updateCartTotal();
});
