const contentDiv = document.querySelector("#content");

function makeLocate() {
    contentDiv.textContent = ""
    //Address, opening times, contact info
    const addressDiv = document.createElement('div');
    const timesDiv = document.createElement('div');
    const contactDiv = document.createElement('div');

    const addressTitle = document.createElement('h2');
    const timesTitle = document.createElement('h2');
    const contactTitle = document.createElement('h2');

    addressTitle.innerText = "Find us";
    timesTitle.innerText = "Opening Hours";
    contactTitle.innerText = "Contact us";

    const addressContent = document.createElement('div');
    const timesContent = document.createElement('div');
    const contactContent = document.createElement('div');

    addressContent.innerText = "With a feeling of hunger head towards the mist and keep going until you reach the grand and imposing gates of a gothic castle. We also regularly haunt all major food delivery apps"
    timesContent.innerText = "Whenever you feel a cold chill pass through you without reason we are open."
    contactContent.innerText = "Contactable via ouija board Mon-Sun between 12:00 and 22:00, we cannot confirm your safety if you try to contact us outside of these times."

    addressDiv.appendChild(addressTitle)
    addressDiv.appendChild(addressContent);
    timesDiv.appendChild(timesTitle)
    timesDiv.appendChild(timesContent);
    contactDiv.appendChild(contactTitle)
    contactDiv.appendChild(contactContent);

    contentDiv.appendChild(addressDiv).appendChild(timesDiv).appendChild(contactDiv);
}
export {
    makeLocate,
}