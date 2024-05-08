//alert("webpack is working");
homeBtn = document.querySelector("#home");
menuBtn = document.querySelector("#menu");
locateBtn = document.querySelector("#location");

contentDiv = document.querySelector("#content");

function menuItem(name,desc,price) {
    name = name;
    description = desc;
    price = price;
}


function makeHome() {
    contentDiv.textContent = "HOME PRESSED"
    //Home page will show a welcome message, restaurant about, promo images
}

function makeMenu() {
    contentDiv.textContent = "MENU PRESSED"
    //Show the menu with items, description and price
}

function makeLocate() {
    contentDiv.textContent = "LOCATION PRESSED"
    //Address, opening times, contact info
}

homeBtn.addEventListener("click",makeHome);
menuBtn.addEventListener("click",makeMenu);
locateBtn.addEventListener("click",makeLocate);