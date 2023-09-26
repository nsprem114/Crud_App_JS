// Function to Add a Product to Local Storage
function addProduct() {
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;

    if (productName && productPrice) {
        const product = { name: productName, price: parseFloat(productPrice) };
        const productList = JSON.parse(localStorage.getItem('products')) || [];

        productList.push(product);
        localStorage.setItem('products', JSON.stringify(productList));

        displayProducts();
    }
}

// Function Remove Product From Local Storage
function removeProduct(index) {
    const productList = JSON.parse(localStorage.getItem('products')) || [];

    if (index >= 0 && index < productList.length) {
        productList.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(productList));

        displayProducts();
    }
}
// Function to Edit Product from Local Storage
function editProduct(index) {
    const productList = JSON.parse(localStorage.getItem('products')) || [];

    if (index >= 0 && index < productList.length) {
        const newName = prompt('Enter new product name:', productList[index].name);
        const newPrice = parseFloat(prompt('Enter new product price:', productList[index].price));

        if (newName && !isNaN(newPrice)) {
            productList[index].name = newName;
            productList[index].price = newPrice;
            localStorage.setItem('products', JSON.stringify(productList));

            displayProducts();
        }
    }
}
// Function to Display the List of Products
function displayProducts() {
    const productList = JSON.parse(localStorage.getItem('products')) || [];
    const productListElement = document.getElementById('productList');

    productListElement.innerHTML = '';

    productList.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${product.name}</strong> - $${product.price.toFixed(2)} 
                              <button id="btn-remove" onclick="removeProduct(${index})">Remove</button>
                              <button id="btn-edit" onclick="editProduct(${index})">Edit</button>`;
        productListElement.appendChild(listItem);
    });
}

// Initial display of products
displayProducts();