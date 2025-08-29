document.addEventListener("DOMContentLoaded", () => {

  function updateCartTotal() {
    let total = 0;
    document.querySelectorAll(".cart-item").forEach(item => {
      let price = +item.dataset.price;                  // base price
      let qty = +item.querySelector(".quantity").value; // selected qty
      let itemTotal = price * qty;

      item.querySelector(".item-total").textContent = itemTotal;
      total += itemTotal;
    });
    document.getElementById("cart-total").textContent = total;
  }

  // Quantity change event
  document.querySelectorAll(".quantity").forEach(qtyBox => {
    qtyBox.onchange = updateCartTotal;
  });

  // Remove button event
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.onclick = () => {
      btn.closest(".cart-item").remove();
      updateCartTotal();
    };
  });

  updateCartTotal(); // run once at start
});
