document.addEventListener("DOMContentLoaded", function() {

  // Function to update cart total
  function updateCartTotal() {
    let total = 0;
    let items = document.querySelectorAll(".cart-item");

    items.forEach(item => {
      let price = parseInt(item.getAttribute("data-price"));
      let qty = parseInt(item.querySelector(".quantity").value);
      let itemTotal = price * qty;
      item.querySelector(".item-total").textContent = itemTotal;
      total += itemTotal;
    });

    document.getElementById("cart-total").textContent = total;
  }

  // Quantity change
  document.querySelectorAll(".quantity").forEach(select => {
    select.addEventListener("change", updateCartTotal);
  });

  // Remove item
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      this.closest(".cart-item").remove();
      updateCartTotal();
    });
  });

  // Payment Method Selection
  document.querySelectorAll("input[name='paymentMethod']").forEach(radio => {
    radio.addEventListener("change", function() {
      document.querySelectorAll(".payment-details").forEach(div => div.style.display = "none");

      if (this.value === "card") {
        document.getElementById("cardDetails").style.display = "block";
      } else if (this.value === "upi") {
        document.getElementById("upiDetails").style.display = "block";
      }
    });
  });

  // Pay button click
  document.getElementById("payBtn").addEventListener("click", function() {
    let selected = document.querySelector("input[name='paymentMethod']:checked");
    if (!selected) {
      alert("Please select a payment method!");
    } else {
      alert("Payment successful with " + selected.value.toUpperCase());
    }
  });

  // Initial total
  updateCartTotal();
});
