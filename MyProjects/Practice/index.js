var i = 1;
while (i < 10) {
  let something = "Shop name";
  document.querySelector(".furnitures").innerHTML = `<li> ${something} </li>`;
  something = "";
  i++;
}
