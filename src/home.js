import Cover from './images/GhostKitchen01.png';

const contentDiv = document.querySelector("#content");

function makeHome() {
    contentDiv.textContent = ""
    //Home page will show a welcome message, restaurant about, promo images
    const coverImg = document.createElement('img');
    const infoDiv = document.createElement('div');
    
    infoDiv.innerText = "At The Ghost Kitchen we believe that unfulfilled business is still business. We have a team bound to the Earth, selected by their need to provide fulfilling meals. Together we help them move on to the true afterlife."
    contentDiv.appendChild(infoDiv);

    coverImg.src = Cover;
    contentDiv.appendChild(coverImg);
}
export {
    makeHome,
}