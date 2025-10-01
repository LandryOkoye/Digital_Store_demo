// Sample product data
const products = [
    {
        id: 1,
        name: "Cloth",
        description: "Elevate your everyday style with our versatile collection of comfortable and high-quality men's clothing, designed for a modern fit and lasting durability.",
        price: 49.99,
        category: "Clothing",
        image: "👔"
    },
    {
        id: 2,
        name: "Premium UI Kit",
        description: "A collection of 100+ UI components, templates, and design elements for creating stunning web and mobile applications.",
        price: 29.99,
        category: "Design Resource",
        image: "🎨"
    },
    {
        id: 3,
        name: "Productivity Master Toolkit",
        description: "A bundle of digital tools including planners, templates, and guides to help you maximize your productivity and achieve your goals.",
        price: 39.99,
        category: "Toolkit",
        image: "🛠️"
    },
    {
        id: 4,
        name: "Moisannite pendant necklace",
        description: "Possess a timeless symbol of steadfast love and brilliance. Hand-selected for exceptional cut, clarity, and fire, this diamond piece captures and reflects light for an unsurpassed, elegant sparkle.",
        price: 24.99,
        category: "Jewelry",
        image: "📈"
    },
    {
        id: 5,
        name: "Photo Editing Presets",
        description: "A collection of professional Lightroom and Photoshop presets to enhance your photography with just one click.",
        price: 19.99,
        category: "Design Resource",
        image: "📷"
    },
    {
        id: 6,
        name: "Financial Planning Template",
        description: "Comprehensive Excel templates and guides for personal finance management, budgeting, and investment tracking.",
        price: 14.99,
        category: "Template",
        image: "💰"
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartLink = document.getElementById('cart-link');
    if (cartLink) {
        cartLink.textContent = `Cart (${cart.length})`;
    }
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});