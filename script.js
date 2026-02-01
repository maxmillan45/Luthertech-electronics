const modal = document.getElementById("productModal");


function openModal() {
modal.style.display = "block";
}


function closeModal() {
modal.style.display = "none";
}


// Dark mode toggle
document.getElementById("themeToggle").onclick = () => {
document.body.classList.toggle("dark");
};

// Close modal when clicking outside of it
window.onclick = function(event) {
if (event.target == modal) {
    closeModal();
}
}

// Sample products (In real scenario, fetch from backend)
const products = [
{
    id: 1,
    name: "luther X Laptop",
    image: "assets/71Mt4JAZQtL.jpeg",
    price: 999.99
},
{
    id: 2,
    name: "luther X Tablet",
    image: "assets/71Mt4JAZQtL.jpeg",
    price: 499.99
},
// Add more products as needed
];
function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}
function loadProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById("modalProductName").innerText = product.name;
        document.getElementById("modalProductImage").src = product.image;
        document.getElementById("modalProductPrice").innerText = `$${product.price.toFixed(2)}`;
        // Add more details as needed
        openModal();
    }
}
function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}

//add to cart function
function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}
function loadProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        document.getElementById("modalProductName").innerText = product.name;
        document.getElementById("modalProductImage").src = product.image;
        document.getElementById("modalProductPrice").innerText = `$${product.price.toFixed(2)}`;
        // Add more details as needed
        openModal();
    }
}