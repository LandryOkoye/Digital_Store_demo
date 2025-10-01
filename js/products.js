function loadProducts() {
    const productsList = document.getElementById('products-list');
    if (!productsList) return;
    
    productsList.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <a href="product-details.html?id=${product.id}" class="btn">View Details</a>
            </div>
        `;
        productsList.appendChild(productCard);
    });
}

// load product details
function loadProductDetails() {
    const productDetailsContent = document.getElementById('product-details-content');
    if (!productDetailsContent) return;
    
    // get product ID from URL param
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const product = products.find(p => p.id === productId);
    
    if (product) {
        productDetailsContent.innerHTML = `
            <div class="product-image-large">${product.image}</div>
            <div class="product-info-details">
                <h2>${product.name}</h2>
                <p class="product-category">${product.category}</p>
                <div class="product-price-large">$${product.price.toFixed(2)}</div>
                <p class="product-description">${product.description}</p>
                <a href="order.html?id=${product.id}" class="btn">Buy Now</a>
            </div>
        `;
    } else {
        productDetailsContent.innerHTML = `
            <div class="error-message">
                <h2>Product Not Found</h2>
                <p>The product you're looking for doesn't exist.</p>
                <a href="products.html" class="btn">Back to Products</a>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    loadProductDetails();
});