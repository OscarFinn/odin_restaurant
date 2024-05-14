const contentDiv = document.querySelector("#content");

//probably put these in a json instead if i was doing this properly.
const starters = [
    [
        'Ectoplasmic Soup',
        'A silky, green pea soup with a hint of mint, served with spectral croutons.',
        '£6'
    ],
    [
        'Poltergeist Pâté',
        'Rich, creamy chicken liver pâté served with phantom berry compote and ghostly toasted brioche.',
        '$8'
    ],
    [
        'Invisible Crudités',
        'Fresh, seasonal vegetables served with a dip that disappears on your tongue, leaving only its delightful taste.',
        '£1'
    ]
]
const mains = [
    [
        'Ghoulash',
        'A hauntingly delicious beef stew, slow-cooked with ethereal herbs and phantom peppers.',
        'Your first childs soul'
    ],
    [
        'Phantom Pho',
        'A Vietnamese noodle soup with translucent noodles, thinly sliced spectral beef, and a broth that’s light yet full of deep, ghostly flavors.',
        '£6.50'
    ],
    [
        'Spectral Sushi',
        "A variety of ghostly sushi selections featuring translucent fish that's both a visual and gastronomic apparition.",
        "A dance, so i can experience feeling human again"
    ],
    [
        'Polter-Rice',
        'A spicy, ghost pepper-infused rice dish served with invisible shrimp and spectral saffron.',
        'Burn a single ghostbusters DVD'
    ]
]

const desserts = [
    [
        'Apparition Apple Pie',
        "A classic apple pie with a spectral crust that's flaky yet slightly eerie, served with phantom vanilla ice cream.",
        "Your wallet, hand it over"
    ],
    [
        "Boo-berry Cheesecake",
        "A chillingly sweet blueberry cheesecake with a ghostly glaze and an ethereal, light texture.",
        "5 minutes of being possessed"
    ],
    [
        "Phantom Panna Cotta",
        "A silky, hauntingly smooth vanilla panna cotta with a ghostly berry coulis that appears out of nowhere.",
        "Your next big success"
    ]
]

function makeMenu() {
    contentDiv.textContent = "";
    const menuTitle = document.createElement('h1');
    //Show the menu with items, description and price
    const startersDiv = document.createElement('div');
    const startersTitle = document.createElement('h2');
    const mainsDiv = document.createElement('div');
    const mainsTitle = document.createElement('h2');
    const dessertsDiv = document.createElement('div');
    const dessertsTitle = document.createElement('h2');

    menuTitle.innerText = "Menu";

    startersTitle.innerText = 'Starters';
    mainsTitle.innerText = 'Mains';
    dessertsTitle.innerText = 'Desserts';

    startersDiv.classList.add('menu-section');
    mainsDiv.classList.add('menu-section');
    dessertsDiv.classList.add('menu-section');

    //build starters
    startersDiv.appendChild(startersTitle);
    for(let i = 0; i < starters.length; i++) {
        const starterItem = makeItem(starters[i][0],starters[i][1],starters[i][2]);
        startersDiv.appendChild(starterItem);
    }
    //build mains
    mainsDiv.appendChild(mainsTitle);
    for(let i = 0; i < mains.length; i++) {
        const mainItem = makeItem(mains[i][0],mains[i][1],mains[i][2]);
        mainsDiv.appendChild(mainItem);
    }
    //build desserts
    dessertsDiv.appendChild(dessertsTitle);
    for(let i = 0; i < desserts.length; i++) {
        const dessertItem = makeItem(desserts[i][0],desserts[i][1],desserts[i][2]);
        dessertsDiv.appendChild(dessertItem);
    }
    
    contentDiv.appendChild(menuTitle);
    contentDiv.appendChild(startersDiv);
    contentDiv.appendChild(mainsDiv);
    contentDiv.appendChild(dessertsDiv);


}


function makeItem(name,desc,price) {
    //name = name;
    //description = desc;
    //price = price;
    const item = document.createElement('div');
    const itemName = document.createElement('h3');
    itemName.classList.add('meal-name');
    const itemDesc = document.createElement('div');
    itemDesc.classList.add('meal-desc');
    const itemPrice = document.createElement('div');
    itemPrice.classList.add('meal-price');

    itemName.innerText = name;
    itemDesc.innerText = desc;
    itemPrice.innerText = price;

    item.appendChild(itemName);
    item.appendChild(itemDesc);
    item.appendChild(itemPrice);
    return item;
}

export {
    makeMenu,
}
