const phones = [
    {
      brand: "I phone",
      img: "./asset/iphone 14.jpg",
      model: "14 PRO",
      ram: "8gb",
      rom: "512gb",
      camera: "48 megapixel",
      price: 300000 ,
    },
    {
      brand: "Samsung",
      img: "./asset/samsungs23.jpg",
      model: "S23 ultra",
      ram: "12gb",
      rom: "512gb",
      camera: "100 megapixel",
      price: 250000,
    },
    {
      brand: "Realme",
      img: "./asset/realme 9i.jpg",
      model: "9i",
      ram: "6gb",
      rom: "128gb",
      camera: "48 megapixel",
      price: 45000 ,
    },
    {
      brand: "xiomo",
      img: "./asset/redme 10t.jpg",
      model: "10T",
      ram: "8gb",
      rom: "256gb",
      camera: "52 megapixel",
      price: 65000 ,
    },
    {
      brand: "Motrolla",
      img: "./asset/moto.jpg",
      model: "Edge plus ",
      ram: "12gb",
      rom: "256gb",
      camera: "48 megapixel",
      price: 800000,
    },
    {
      brand: "Realme",
      img: "./asset/realme 6i.jpg",
      model: "6I",
      ram: "6gb",
      rom: "128 gb",
      camera: "48 megapixel",
      price: 50000,
    },
    {
      brand: "Techno",
      img: "./asset/camon 20.jpg",
      model: "Camon 20",
      ram: "8gb",
      rom: "256gb",
      camera: "52 megapixel",
      price: 75000,
    },
];
let main_div = document.querySelector("#main_div");

for (i = 0; i < phones.length; i++) {
  main_div.innerHTML += `<div class="cart">
  <img src="${phones[i].img}" alt="mobile image">
  <div class="specs">
  <h3>Brand : <span>${phones[i].brand}</span></h3>
  <h3>Model : <span>${phones[i].model}</span></h3>
  <h3>Ram : <span>${phones[i].ram}</span></h3>
  <h3>Rom : <span>${phones[i].rom}</span></h3>
  <h3>Camera : <span>${phones[i].camera}</span></h3>
  <h3>Price : <span>${phones[i].price}</span></h3>
</div>

  <button class="cart-btn " onclick="AddToCart(${i})">Add To Cart</button>
</div>`;
}

const receive_data = localStorage.getItem("cartarr");
const json_data = JSON.parse(receive_data);

let ArrayOfCart;
if(Array.isArray(json_data)){
  ArrayOfCart = [...json_data];
}
else{
   ArrayOfCart = [];

}
function AddToCart(index) {
  // ArrayOfCart.push(phones[index])
  // console.log(ArrayOfCart);

  if (ArrayOfCart.includes(phones[index]) === true) {
    // console.log('Item Is Existed');
    // phones[index].quantity += 1;
    for (let i = 0; i < ArrayOfCart.length; i++) {
      if (ArrayOfCart[i] === phones[index]) {
        phones[index].quantity += 1;
      }
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Item Quantity Is Increased ",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    phones[index].quantity = 1;
    ArrayOfCart.push(phones[index]);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Item Is Successfully Added",
      showConfirmButton: false,
      timer: 1500,
    });
    console.log("cartArr:", ArrayOfCart);
  }
}

// let key = prompt("enter key")
// let value = prompt("enter value")

// localStorage.clear()
function GoToCart() {
  const items = JSON.stringify(ArrayOfCart);
  localStorage.setItem("cartarr", items);
  window.location = "cart.html";}