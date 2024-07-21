// Sample shoe data (replace with actual data from a database or API)
const shoes = [
    {
        id: 1,
        name: "Louis Vuitton",
        price: 4800,
        images: ["louis-vuitton-orange.jpg", "louis-vuitton-blue.jpg"]
    },
    {
        id: 2,
        name: "Prada Boots",
        price: 4500,
        images: ["prada-boots-white.jpg", "prada-boots-black.jpg"]
    },
    {
        id: 3,
        name: "J4 Grey",
        price: 3800,
        images: ["j4-black-grey.jpg", "j4-grey.jpg",]
    },
    
     {
        id: 4,
        name: "J4 Black",
        price: 3800,
        images: ["j4-black.jpg", "j4-black-white.jpg",]
    },
    {
        id: 5,
        name: "J4 White",
        price: 3800,
        images: ["j4-White-green.jpg", "j4-white-grey.jpg",]
    },
    {
        id: 6,
        name: "J4 Red",
        price: 3800,
        images: ["j4-red.jpg",]
    },
    {
        id: 7,
        name: "Tiffany AF1",
        price: 2000,
        images: ["tiffany-af1-luminous-green.jpg", "tiffany-af1-black.jpg","tiffany-af1-blue.jpg"]
    },
    {
        id: 8,
        name: "J4 Grey",
        price: 3800,
        images: ["j4-black-grey.jpg", "j4-grey.jpg",]
    },
];

// Function to display shoes on the page
function displayShoes() {
    const shoeList = document.getElementById('shoe-list');

    shoes.forEach(shoe => {
        const shoeCard = document.createElement('div');
        shoeCard.classList.add('shoe');

        const mainImage = document.createElement('img');
        mainImage.src = `images/${shoe.images[0]}`;
        mainImage.alt = shoe.name;
        mainImage.classList.add('main-image');
        shoeCard.appendChild(mainImage);

        const thumbnails = document.createElement('div');
        thumbnails.classList.add('thumbnail-images');
        shoe.images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = `images/${image}`;
            thumbnail.alt = `${shoe.name} - ${index + 1}`;
            thumbnail.addEventListener('click', () => {
                mainImage.src = `images/${image}`;
            });
            thumbnails.appendChild(thumbnail);
        });
        shoeCard.appendChild(thumbnails);

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