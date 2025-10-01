// Function to load order details
function loadOrderDetails() {
    // Get product ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const product = products.find(p => p.id === productId);
    
    if (product) {
        document.getElementById('order-product-name').textContent = product.name;
        document.getElementById('order-product-price').textContent = `$${product.price.toFixed(2)}`;
        document.getElementById('order-total').textContent = `$${product.price.toFixed(2)}`;
        
        // Store product in session storage for success page
        sessionStorage.setItem('currentOrder', JSON.stringify(product));
    }
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    loadOrderDetails();
    loadSuccessDetails();
    
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get product from session storage
            const product = JSON.parse(sessionStorage.getItem('currentOrder'));
            
            if (product) {
                // Add to cart (for demonstration)
                cart.push(product);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                
                // Redirect to success page
                window.location.href = 'success.html';
            }
        });
    }
});

// Function to load success page details
function loadSuccessDetails() {
    const successProductName = document.getElementById('success-product-name');
    const successAmount = document.getElementById('success-amount');
    
    if (successProductName && successAmount) {
        const product = JSON.parse(sessionStorage.getItem('currentOrder'));
        
        if (product) {
            successProductName.textContent = product.name;
            successAmount.textContent = `$${product.price.toFixed(2)}`;
            
            // Generate a random order ID
            const orderId = 'DS-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
            document.getElementById('order-id').textContent = orderId;
            
            // Clear the current order from session storage
            sessionStorage.removeItem('currentOrder');
        }
    }
}