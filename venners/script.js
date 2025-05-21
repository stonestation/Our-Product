
// Product Data
const products = [

    // D:\Work_Space\Our Product\venners\images\img13.jpg
    { id: 1, name: "ARTIC MARBLE-1", image: "images/img13.jpg", category: "marble" },
    { id: 2, name: "ARTIC MARBLE-2", image: "images/img25.jpg", category: "marble" },
    { id: 3, name: "ARTIC MARBLE-3", image: "images/img36.jpg", category: "marble" },
    { id: 4, name: "ARTIC MARBLE-4", image: "images/img47.jpg", category: "marble" },
    { id: 5, name: "ARTIC MARBLE-5", image: "images/img58.jpg", category: "marble" },
    { id: 6, name: "ARTIC MARBLE-6", image: "images/img69.jpg", category: "marble" },
    { id: 7, name: "ARTIC MARBLE-7", image: "images/img80.jpg", category: "marble" },
    { id: 8, name: "MOONSUN BLACK", image: "images/img91.jpg", category: "granite" },
    { id: 9, name: "BIDASAR BROWN", image: "images/img102.jpg", category: "sandstone" },
    { id: 10, name: "BIGASAR GREEN", image: "images/img113.jpg", category: "sandstone" },
    { id: 11, name: "CRYSTIC GREY", image: "images/img124.jpg", category: "quartz" },
    { id: 12, name: "CRSTIC WHITE", image: "images/img135.jpg", category: "quartz" },
    { id: 13, name: "SIYA GREY", image: "images/img146.jpg", category: "granite" },
    { id: 14, name: "RAINBOW", image: "images/img157.jpg", category: "exotic" },
    { id: 15, name: "MINT SPARKLE-1", image: "images/img168.jpg", category: "quartzite" },
    { id: 16, name: "MINT SPARKLE-2", image: "images/img179.jpg", category: "quartzite" },
    { id: 17, name: "TEAK-1", image: "images/img190.jpg", category: "wood-effect" },
    { id: 18, name: "TEAK-2", image: "images/img201.jpg", category: "wood-effect" },
    { id: 19, name: "VINTAGE SHINE-1", image: "images/img212.jpg", category: "marble" },
    { id: 20, name: "VINTAGE SHINE-2", image: "images/img223.jpg", category: "marble" },
    { id: 21, name: "VINTAGE SHINE-3", image: "images/img234.jpg", category: "marble" },
    { id: 22, name: "PANDA-1", image: "images/img245.jpg", category: "exotic" },
    { id: 23, name: "PANDA-2", image: "images/img256.jpg", category: "exotic" },
    { id: 24, name: "PANDA-3", image: "images/img267.jpg", category: "exotic" },
    { id: 25, name: "PANDA-4", image: "images/img278.jpg", category: "exotic" },
    { id: 26, name: "PANDA-5", image: "images/img289.jpg", category: "exotic" },
    { id: 27, name: "PANDA-6", image: "images/img300.jpg", category: "exotic" },
    { id: 28, name: "SILVIA", image: "images/img311.jpg", category: "granite" },
    { id: 29, name: "COSMOS", image: "images/img322.jpg", category: "exotic" },
    { id: 30, name: "BHESLANA-1", image: "images/img333.jpg", category: "sandstone" },
    { id: 31, name: "FLODI", image: "images/img344.jpg", category: "sandstone" },
    { id: 32, name: "BHESLANA-2", image: "images/img355.jpg", category: "sandstone" },
    { id: 33, name: "LIME GREY-1", image: "images/img366.jpg", category: "limestone" },
    { id: 34, name: "LIME GREY-2", image: "images/img377.jpg", category: "limestone" },
    { id: 35, name: "PEARL GREEN", image: "images/img388.jpg", category: "marble" },
    { id: 36, name: "LIME PINK", image: "images/img399.jpg", category: "limestone" },
    { id: 37, name: "LIME GOLD", image: "images/img410.jpg", category: "limestone" },
    { id: 38, name: "LIME GREEN", image: "images/img421.jpg", category: "limestone" }
];

// DOM Elements
const productsContainer = document.getElementById('products-container');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalClose = document.getElementById('modalClose');
const modalImageContainer = document.getElementById('modalImageContainer');
const zoomIn = document.getElementById('zoomIn');
const zoomOut = document.getElementById('zoomOut');
const zoomReset = document.getElementById('zoomReset');

// Variables
let currentImageIndex = 0;
let filteredProducts = [...products];
let isDragging = false;
let startX, startY;
let rotationX = 0;
let rotationY = 0;
let currentScale = 1;
let initialTransform = '';

// Initialize
function init() {
    renderProducts();
    setupEventListeners();
}

// Render products
function renderProducts() {
    productsContainer.innerHTML = '';

    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#666;">No products found</p>';
        return;
    }

    filteredProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <span class="thickness">2mm</span>
                    </div>
                `;
        productCard.addEventListener('click', () => openModal(index));
        productsContainer.appendChild(productCard);
    });
}

// Open modal
function openModal(index) {
    currentImageIndex = index;
    const product = filteredProducts[index];
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalTitle.textContent = product.name;

    // Store initial transform
    initialTransform = modalImage.style.transform;

    // Reset transformations
    resetImageTransform();

    imageModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    imageModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Reset image transform
function resetImageTransform() {
    rotationX = 0;
    rotationY = 0;
    currentScale = 1;
    updateImageTransform();
}

// Update image transform
function updateImageTransform() {
    modalImage.style.transform = `
                perspective(1000px)
                rotateX(${rotationX}deg)
                rotateY(${rotationY}deg)
                scale(${currentScale})
            `;
}

// Setup event listeners
function setupEventListeners() {
    // Search
    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        renderProducts();
    });

    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

    // Modal close
    modalClose.addEventListener('click', closeModal);
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) closeModal();
    });

    // Zoom controls
    zoomIn.addEventListener('click', () => {
        currentScale = Math.min(3, currentScale + 0.2);
        updateImageTransform();
    });

    zoomOut.addEventListener('click', () => {
        currentScale = Math.max(0.5, currentScale - 0.2);
        updateImageTransform();
    });

    zoomReset.addEventListener('click', resetImageTransform);

    // Mouse controls for 3D perspective
    modalImageContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        modalImage.classList.add('grabbing');
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        rotationY = deltaX * 0.2;
        rotationX = -deltaY * 0.2;

        updateImageTransform();
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        modalImage.classList.remove('grabbing');
    });

    // Touch support
    modalImageContainer.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        modalImage.classList.add('grabbing');
        e.preventDefault();
    });

    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;

        const deltaX = e.touches[0].clientX - startX;
        const deltaY = e.touches[0].clientY - startY;

        rotationY = deltaX * 0.2;
        rotationX = -deltaY * 0.2;

        updateImageTransform();
        e.preventDefault();
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
        modalImage.classList.remove('grabbing');
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (imageModal.style.display !== 'block') return;

        if (e.key === 'ArrowLeft') {
            currentImageIndex = (currentImageIndex - 1 + filteredProducts.length) % filteredProducts.length;
            openModal(currentImageIndex);
        } else if (e.key === 'ArrowRight') {
            currentImageIndex = (currentImageIndex + 1) % filteredProducts.length;
            openModal(currentImageIndex);
        } else if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);