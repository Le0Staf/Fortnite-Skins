class Skin {
    constructor(skin, rarity, price, bid) {
        this.Skin = skin;
        this.Rarity = rarity;
        this.Price = price;
        this.Bid = bid;
    }
}

let skinList = [];

function loadItemsFromLocalStorage() {
    const storedSkins = localStorage.getItem("skinlist");
    if (storedSkins) {
        skinList = JSON.parse(storedSkins);
        updateUI();
    }
}

function updateUI() {
    listSkins.innerHTML = "";
    skinList.forEach((item) => {
        listSkins.innerHTML += `
            <div id="item">
                <h2>${item.Skin}</h2>
                <h3>${item.Rarity}</h3>
                <br>
                <h4>${item.Price} V-BUCKS</h4>
            </div>
        `;
    });
}

function addButton() {
    const now = Date.now();
    const id = now.toString();

    const skinInput = skin.value;
    const rarityInput = rarity.value;
    const priceInput = price.value;

    if (skinInput !== "") {
        let newSkin = new Skin(skinInput, rarityInput, priceInput, id); 
        skinList.push(newSkin);

        localStorage.setItem("skinlist", JSON.stringify(skinList));

        updateUI(); 

        skin.value = "";
        rarity.value = "";
        price.value = "";
    } else {
        alert("Empty placeholder");
    }
}

const addbutton = document.getElementById("add-button");
const rarity = document.getElementById("rarity");
const skin = document.getElementById("skin");
const listSkins = document.getElementById("list-skins");

loadItemsFromLocalStorage();