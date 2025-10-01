// Sample product data
const products = [
    {
        id: 1,
        name: "Black Dress",
        description: "Elevate your everyday style with our versatile collection of comfortable and high-quality men's clothing, designed for a modern fit and lasting durability.",
        price: 49.99,
        category: "Clothing",
        image: "images/Black-shirt.jpg"
    },
    {
        id: 2,
        name: "Samsung S25 Ultra",
        description: "Experience epic power and seamless AI integration. Capture stunning photos and simplify your daily life with next-level performance and an intuitive, smart design.",
        price: 1799.99,
        category: "Mobile-Devices, Samsung",
        image: "images/smS25.jpg"
    },
    {
        id: 3,
        name: "Moisannite pendant daimond necklace",
        description: "Possess a timeless symbol of steadfast love and brilliance. Hand-selected for exceptional cut, clarity, and fire, this diamond piece captures and reflects light for an unsurpassed, elegant sparkle.",
        price: 3499.99,
        category: "Jewelry, Wearings",
        image: "images/Style_ Minimalist Appearance_ Minimalist design….jpg"
    },
    {
        id: 4,
        name: "Nike-Air",
        description: "Engineered for performance and iconic style. Featuring innovative technology like Air Max and a lightweight design, these shoes deliver superior comfort, support, and responsiveness for sport and everyday life.",
        price: 239.99,
        category: "Foot-Wears, Shoes",
        image: "images/Nike Shoe.jpg"
    },
    {
        id: 5,
        name: "Atomic Habits E-book by James Clear",
        description: "Transform your life with tiny changes. This proven framework reveals practical strategies to form good habits, break bad ones, and achieve remarkable results by focusing on your system, not just your goals.",
        price: 49.99,
        category: "E-Book",
        image: "images/Atomic Habits.jpg"
    },
    {
        id: 6,
        name: "LG Refrigerator",
        description: "Keep your food fresher, longer, with innovative cooling technology and smart features. Choose from stylish designs like InstaView™ and Craft Ice™ to perfectly match your modern kitchen.",
        price: 1499.99,
        category: "Home Appliances",
        image: "images/Refrigerator.jpg"
    },
    {
        id: 7,
        name: "Audemars Piguet (AP) black",
        description: "A masterpiece of Swiss haute horlogerie. This exclusive timepiece blends technical mastery with avant-garde design, symbolizing generations of tradition, craftsmanship, and elite status",
        price: 29999.99,
        category: "Mens Wear, Watches",
        image: "images/AP watch.jpg"
    },
    {
        id: 8,
        name: "Google Pixel10 Pro",
        description: "The ultimate AI-powered smartphone experience. Featuring the next-gen Tensor G5 chip, studio-quality photography with up to 100x Pro Res Zoom, and Gemini, your deeply integrated AI assistant, all in a premium, resilient design.",
        price: 1099.99,
        category: "Mobile Devices",
        image: "images/Pixel10Pro.jpg"
    },
    {
        id: 9,
        name: "Leather Braided Bracelet Black",
        description: "A rugged yet refined accessory. Handcrafted from genuine leather, its intricate braid and comfortable fit develop a unique, personalized patina over time, making it the perfect piece for versatile everyday style.",
        price: 49.99,
        category: "Mens Wear, Watches",
        image: "images/Leather Bracelet.jpg"
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