// Sample shoe data
const shoes = [
    { id: 1, name: "Jordan 4 grey", price: 3800, image: "j4-grey.jpg" },
    { id: 2, name: "Prada Boots Black", price: 3800, image: "prada-boots-black.jpg" },
    { id: 3, name: "Louis Vuitton Blue", price: 4500, image: "louis-vuitton-blue.jpg" }, 
    { id: 4, name: "Louis Vuitton Orange", price: 4500, image: "louis-vuitton-orange.jpg" },
    { id: 5, name: "J4 White&Green", price: 3800, image: "j4-white-green.jpg" },
    { id: 6, name: "J4 Black&Grey", price: 3800, image: "j4-black-grey.jpg" },
    { id: 7, name: "J4 Red", price: 3800, image: "j4-red.jpg" },
    { id: 8, name: "J4 White&Grey", price: 3800, image: "j4-white-grey.jpg" },
    { id: 9, name: "Tiffany AF1 Black", price: 2200, image: "tiffany-af1-black.jpg" },
    { id: 10, name: "J4 Black&White", price: 3800, image: "j4-black-white.jpg" },
    { id: 11, name: "J4 Black", price: 3800, image: "j4-black.jpg" },
    { id: 12, name: "Tiffany AF1 Blue", price: 2200, image: "tiffany-af1-blue.jpg" },
    { id: 13, name: "Tiffany AF1 Luminous Green", price: 3800, image: "tiffany-af1-luminous-green.jpg" },
    { id: 14, name: "Valentine AF1", price: 1800, image:"valentine-af1.jpg" },
    { id: 15, name: "Prada Boots White", price: 4800, image: "prada-boots-white.jpg" },



];

// Function to display shoes on the page
function displayShoes() {
    const shoeList = document.getElementById('shoe-list');

    shoes.forEach(shoe => {
        const shoeCard = document.createElement('div');
        shoeCard.classList.add('shoe');

        const shoeImage = document.createElement('img');
        shoeImage.src = `images/${shoe.image}`;
        shoeImage.alt = shoe.name;
        shoeCard.appendChild(shoeImage);

        const shoeName = document.createElement('h2');
        shoeName.textContent = shoe.name;
        shoeCard.appendChild(shoeName);

        const shoePrice = document.createElement('p');
        shoePrice.textContent = `Sh ${shoe.price.toFixed(2)}`;
        shoeCard.appendChild(shoePrice);

        const buyButton = document.createElement('a');
        buyButton.classList.add('button');
        buyButton.textContent = "Buy Now";
        shoeCard.appendChild(buyButton);

        shoeList.appendChild(shoeCard);
    });
}

// Load shoes when the page is fully loaded
document.addEventListener('DOMContentLoaded', displayShoes);