import Cover from './images/GhostKitchen01.png';

const contentDiv = document.querySelector("#content");

function makeHome() {
    contentDiv.textContent = "HOME PRESSED 2"
    //Home page will show a welcome message, restaurant about, promo images
    const coverImg = document.createElement('img');
    coverImg.src = Cover;
    contentDiv.appendChild(coverImg);
}
export {
    makeHome,
}