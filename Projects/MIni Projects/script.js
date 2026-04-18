const productList = document.getElementById("product-list");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    displayProducts(data.products);
}

function displayProducts(products) {
    productList.innerHTML = "";

    products.forEach(product => {
        const productItem = document.createElement("li");
        const cartButton = document.createElement("button");

        cartButton.textContent = "Add to Cart";

        cartButton.addEventListener("click", () => {
            cart.push(product);

            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${product.title} added to cart!`);
        });

        productItem.innerHTML = `
            <h3>${product.title}</h3>
            <p><strong>Brand:</strong> ${product.brand}</p>
            <p>${product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
        `;

        productItem.append(cartButton);
        productList.append(productItem);
    });
}

fetchProducts();

function showCart() {
    productList.innerHTML = "";

    cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        productList.innerHTML = "<h3>Your cart is empty</h3>";
        return;
    }

    cart.forEach((product, index) => {
        const cartItem = document.createElement("li");

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";

        removeBtn.addEventListener("click", () => {
            cart.splice(index, 1);

            localStorage.setItem("cart", JSON.stringify(cart));

            showCart();
        });

        cartItem.innerHTML = `
            <h3>${product.title}</h3>
            <p><strong>Brand:</strong> ${product.brand}</p>
            <p>${product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
        `;

        cartItem.append(removeBtn);
        productList.append(cartItem);
    });
}