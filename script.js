let addButtons = Array.from(document.querySelectorAll("#add-button"));
let minusButtons = Array.from(document.querySelectorAll("#minus-button"));
let quantitys = Array.from(document.querySelectorAll("#quantity"));
let prices = Array.from(document.querySelectorAll("#price"));
let deletes = Array.from(document.querySelectorAll("#delete"));
let parents = Array.from(document.querySelectorAll("#parent"));
let hearts = Array.from(document.querySelectorAll("#heart"));

let arrOfQuantity = [];
let arrOfPrices = [];

for (let i in quantitys) {
  arrOfQuantity[i] = 0;
}
for (let i in prices) {
  arrOfPrices[i] = +prices[i].innerHTML;
}
function updateTotal() {
  let total = 0;
  for (let i in quantitys) {
    total += arrOfPrices[i] * arrOfQuantity[i];
    document.getElementById("total-price").textContent = `Total price:${total}`;
  }
}
updateTotal();
for (let i in addButtons) {
  addButtons[i].addEventListener("click", function () {
    arrOfQuantity[i]++;
    quantitys[i].innerHTML = arrOfQuantity[i];
    updateTotal();
  });
}
for (let i in minusButtons) {
  minusButtons[i].addEventListener("click", function () {
    if (arrOfQuantity[i] > 0) {
      arrOfQuantity[i]--;
      quantitys[i].innerHTML = arrOfQuantity[i];
      updateTotal();
    }
  });
}
for (let i in deletes) {
  deletes[i].addEventListener("click", function () {
    arrOfQuantity[i] = 0;
    updateTotal();
    parents[i].remove();
  });
}
for (let i in hearts) {
  hearts[i].addEventListener("click", function () {
    if (hearts[i].getAttribute("src") == "heartNull.png")
      hearts[i].setAttribute("src", "heartLike.png");
    else hearts[i].setAttribute("src", "heartNull.png");
  });
}
