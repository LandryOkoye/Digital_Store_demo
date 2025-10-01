// Function to load products on the products page
function loadProducts() {
    const productsList = document.getElementById('products-list');
    if (!productsList) return;
    
    productsList.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTllY2VmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzljYTJhZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='">
            </div>
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

// Function to load product details
function loadProductDetails() {
    const productDetailsContent = document.getElementById('product-details-content');
    if (!productDetailsContent) return;
    
    // Get product ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const product = products.find(p => p.id === productId);
    
    if (product) {
        productDetailsContent.innerHTML = `
            <div class="product-image-large">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTllY2VmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzljYTJhZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlIEF2YWlsYWJsZTwvdGV4dD48L3N2Zz4='">
            </div>
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
            <div class="error-message" style="text-align: center; padding: 2rem;">
                <h2>Product Not Found</h2>
                <p>The product you're looking for doesn't exist.</p>
                <a href="products.html" class="btn">Back to Products</a>
            </div>
        `;
    }
}

// Initialize products on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    loadProductDetails();
});