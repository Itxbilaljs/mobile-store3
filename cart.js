const cartdiv = document.querySelector("#cart_div");
const head = document.querySelector("#head");
const head_two = document.querySelector("#head-two");
const data = localStorage.getItem("cartarr");
const obj_data = JSON.parse(data);
render();
if (obj_data == "") {
  head_two.innerHTML = "PLZZ ADD ITEM IN YOUR CART ";
} else {
  head_two.innerHTML = " ";
}

function render() {
  let total = 0;
  head.innerHTML = "";

  for (i = 0; i < obj_data.length; i++) {
    total += obj_data[i].price * obj_data[i].quantity;

    cartdiv.innerHTML += `<div class="cart">
        <img src="${obj_data[i].img}" alt="mobile image">
        <div class="specs">
        <h3>Brand : <span>${obj_data[i].brand}</span></h3>
        <h3>Model : <span>${obj_data[i].model}</span></h3>
        <h3>Price : <span>${obj_data[i].price}</span></h3>
        <h3>Quantity : <span>${obj_data[i].quantity}</span></h3>
        <h3>Total Price : <span>${
          obj_data[i].price * obj_data[i].quantity
        }</span></h3>
        <button class="cart-btn3" onclick="Increased(${i})"><h3>+</h3></button>${
      obj_data[i].quantity
    }<button class="cart-btn3"  onclick="Decreased(${i})"><h3>-</h3></button> <button class="cart-btn2" onclick="Delete(${i})">Delete</button>
      </div>`;
    head.innerHTML = `<span class="sub-head">Total Amount:</span> <span class=total>${total}</span>`;
  }
}
function Increased(index) {
  cartdiv.innerHTML = "";
  obj_data[index].quantity += 1;
  render();
}
function Decreased(index) {
  cartdiv.innerHTML = "";
  obj_data[index].quantity -= 1;
  if (obj_data[index].quantity === 0) {
    obj_data.splice(index, 1);
  }
  render();
}

function Delete(index) {
  cartdiv.innerHTML = "";
  obj_data.splice(index, 1);
  render();
}
function gotohome() {
  window.location = "index.html";
}
window.onbeforeunload = function () {
  localStorage.setItem("cartarr", JSON.stringify(obj_data));
};