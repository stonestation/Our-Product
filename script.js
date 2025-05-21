// Complete product data with descriptions including material type and thickness
const products = [
  {
    name: "Bhanslana Split Face",
    image: "images/Bhanslana Split Face.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Split Face | Ideal for exterior wall cladding and landscaping projects."
  },
  {
    name: "Black Monsoon",
    image: "images/Black-Moonsoon.jpg",
    description: "Material: Basalt | Thickness: 18-25mm | Finish: Honed | Perfect for modern architectural designs and flooring."
  },
  {
    name: "Black Slate Wall Cladding",
    image: "images/Black-Slate-Wall-Cladding.jpg",
    description: "Material: Slate | Thickness: 15-20mm | Finish: Natural Cleft | Excellent for both interior and exterior wall applications."
  },
  {
    name: "Chocolate",
    image: "images/Chocolate.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Sawn | Warm tones perfect for rustic and traditional designs."
  },
  {
    name: "Copper",
    image: "images/Copper.jpg",
    description: "Material: Sandstone | Thickness: 20-25mm | Finish: Honed | Unique copper tones for distinctive architectural features."
  },
  {
    name: "Garda Buff",
    image: "images/Garda Buff.jpg",
    description: "Material: Limestone | Thickness: 20-30mm | Finish: Natural | Light-colored stone ideal for contemporary designs."
  },
  {
    name: "Garda Buff Coat",
    image: "images/Garda Buff Coat.jpg",
    description: "Material: Limestone | Thickness: 18-22mm | Finish: Brushed | Textured surface with enhanced durability."
  },
  {
    name: "Golden State",
    image: "images/Golden-Slate.jpg",
    description: "Material: Slate | Thickness: 15-20mm | Finish: Natural | Warm golden hues perfect for feature walls."
  },
  {
    name: "Jak Black",
    image: "images/Jak-Black.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Deep black stone with subtle grain patterns."
  },
  {
    name: "Jak Black Coat",
    image: "images/Jak-Black-Coat.jpg",
    description: "Material: Sandstone | Thickness: 18-25mm | Finish: Brushed | Matte black finish with enhanced texture."
  },
  {
    name: "Jak Multi",
    image: "images/Jak-Multi.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Multicolored stone with unique patterning."
  },
  {
    name: "Kandala Grey",
    image: "images/Kandala-Grey.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Versatile grey stone for various applications."
  },
  {
    name: "Kandala Grey Coat",
    image: "images/Kandala-Grey-Coat.jpg",
    description: "Material: Sandstone | Thickness: 18-25mm | Finish: Brushed | Textured grey surface with enhanced durability."
  },
  {
    name: "Kandla Grey Wall",
    image: "images/Kandla-Grey-Wall.jpg",
    description: "Material: Sandstone | Thickness: 15-20mm | Finish: Natural | Light grey stone perfect for wall cladding."
  },
  {
    name: "Kandla Grey Wall Cladding",
    image: "images/Kandla-Grey-Wall-Cladding.jpg",
    description: "Material: Sandstone | Thickness: 15-20mm | Finish: Sawn | Uniform grey stone for seamless wall designs."
  },
  {
    name: "Mint Stone",
    image: "images/Mint-Stone.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Unique mint green tones for distinctive designs."
  },
  {
    name: "Mint Stone Coat",
    image: "images/Mint-Stone-Coat.jpg",
    description: "Material: Sandstone | Thickness: 18-25mm | Finish: Brushed | Textured mint green surface."
  },
  {
    name: "Modak",
    image: "images/Modak.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Warm beige stone with subtle patterning."
  },
  {
    name: "Oriental Gold",
    image: "images/Oriental Gold.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Rich golden tones for luxurious applications."
  },
  {
    name: "Oriental White",
    image: "images/Oriental White.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Clean white stone with subtle veining."
  },
  {
    name: "Rajgreen",
    image: "images/Rajgreen.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Earthy green tones for natural designs."
  },
  {
    name: "Rajgreen Coat",
    image: "images/Rajgreen-Coat.jpg",
    description: "Material: Sandstone | Thickness: 18-25mm | Finish: Brushed | Textured green surface with enhanced durability."
  },
  {
    name: "Sagar Black",
    image: "images/Sagar-Black.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Deep black stone with consistent coloring."
  },
  {
    name: "Sagar Black Sandstone",
    image: "images/Sagar-Black-Sandstone.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Premium black sandstone for high-end projects."
  },
  {
    name: "Silver Grey",
    image: "images/Silver-Grey.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Cool grey tones for modern designs."
  },
  {
    name: "Silver Shine",
    image: "images/Silver-Shine.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Polished | Reflective surface with silver tones."
  },
  {
    name: "Agra Red",
    image: "images/Single-Agra-Red.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Vibrant red stone for bold designs."
  },
  {
    name: "Autumn Brown",
    image: "images/Single-Autumn-Brown.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Warm brown tones resembling autumn leaves."
  },
  {
    name: "Chocolate",
    image: "images/Single-Chocolate.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Rich chocolate brown for cozy spaces."
  },
  {
    name: "Deoli Green",
    image: "images/Single-Deoli-Green.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Earthy green with natural variations."
  },
  {
    name: "Kanadala Grey",
    image: "images/Single-Kanadala-Grey.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Medium grey with subtle patterning."
  },
  {
    name: "KG Smooth Honed",
    image: "images/Single-KG-Smooth-Honed.jpg",
    description: "Material: Sandstone | Thickness: 18-25mm | Finish: Honed | Smooth surface with uniform appearance."
  },
  {
    name: "KG Smooth Honed 2",
    image: "images/Single-KG-Smooth-Honed-2.jpg",
    description: "Material: Sandstone | Thickness: 18-25mm | Finish: Honed | Alternative grade with similar characteristics."
  },
  {
    name: "Kundmulti",
    image: "images/Single-Kundmulti.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Multicolored stone with warm tones."
  },
  {
    name: "Latipur Grey",
    image: "images/Single-Latipur-Grey.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Cool grey with blue undertones."
  },
  {
    name: "Latipur Yellow",
    image: "images/Single-Latipur-Yellow.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Warm yellow tones for sunny spaces."
  },
  {
    name: "Mandana",
    image: "images/Single-Mandana.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Earthy tones with distinctive patterns."
  },
  {
    name: "Mint Ivory",
    image: "images/Single-Mint-Ivory.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Soft mint green with ivory accents."
  },
  {
    name: "Mint Natural",
    image: "images/Single-Mint-Natural.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Natural mint tones with variations."
  },
  {
    name: "Modak",
    image: "images/Single-Modak.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Warm beige with subtle veining."
  },
  {
    name: "Rainbow",
    image: "images/Single-Rainbow.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Multicolored stone with vibrant patterns."
  },
  {
    name: "Raj Green",
    image: "images/Single-Raj-Green.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Earthy green with natural variations."
  },
  {
    name: "Red Natural",
    image: "images/Single-Red-Natural.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Vibrant red with natural patterning."
  },
  {
    name: "Sagar Black",
    image: "images/Single-Sagar-Black.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Deep black with consistent coloring."
  },
  {
    name: "Silver Grey",
    image: "images/Single-Silver-Grey.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Cool grey tones for modern applications."
  },
  {
    name: "Teak",
    image: "images/Single-Teak.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Wood-like appearance in stone form."
  },
  {
    name: "Teak Wood",
    image: "images/Teak-Wood.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Realistic wood grain patterns in stone."
  },
  {
    name: "Teak Wood Coat",
    image: "images/Teak-Wood-Coat.jpg",
    description: "Material: Sandstone | Thickness: 18-25mm | Finish: Brushed | Textured wood-like surface."
  },
  {
    name: "Zeera Green",
    image: "images/Zeera-Green.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Unique green stone with speckled appearance."
  }
];



let is3DMode = false;
// let isDragging = false;
// let startX, startY;
let currentRotationX = 0;
let currentRotationY = 0;
let targetRotationX = 0;
let targetRotationY = 0;
let animationId = null;

// function displayProducts(filter = '') {
//   const container = document.getElementById('products-container');
//   container.innerHTML = '';

//   const filteredProducts = filter ? products.filter(p => 
//     p.name.toLowerCase().includes(filter.toLowerCase()) || 
//     p.description.toLowerCase().includes(filter.toLowerCase())
//   ) : products;

//   if (filteredProducts.length === 0) {
//     container.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#666;font-size:13px;">No products found</p>';
//     return;
//   }

//   filteredProducts.forEach(product => {
//     const card = document.createElement('div');
//     card.className = 'product-card';
//     card.innerHTML = `
//       <div class="product-image">
//         <img src="${product.image}" alt="${product.name}" loading="lazy">
//       </div>
//       <div class="product-info">
//         <h3 class="product-name">${product.name}</h3>
//         <p class="product-description">${product.description.split('|').slice(0,2).join('|')}</p>
//       </div>
//     `;
//     card.addEventListener('click', () => openModal(product));
//     container.appendChild(card);
//   });
// }

// function openModal(product) {
//   const modal = document.getElementById('imageModal');
//   const img = document.getElementById('modalImage');
//   const title = document.getElementById('modalTitle');
//   const desc = document.getElementById('modalDescription');
//   const perspectiveBtn = document.getElementById('perspective-btn');

//   img.src = product.image;
//   img.alt = product.name;
//   title.textContent = product.name;
//   desc.innerHTML = product.description.split('|').map(p => `<p>• ${p.trim()}</p>`).join('');
  
//   // Reset transformations
//   img.style.transform = 'rotateX(0) rotateY(0) scale(1)';
//   currentRotationX = 0;
//   currentRotationY = 0;
//   is3DMode = false;
//   perspectiveBtn.classList.remove('active');
//   img.style.cursor = 'default';
  
//   modal.style.display = "block";
// }

// function initDragEvents(element) {
//   element.addEventListener('mousedown', (e) => {
//     if (!is3DMode) return;
//     isDragging = true;
//     startX = e.clientX;
//     startY = e.clientY;
//     element.style.cursor = 'grabbing';
//   });
  
//   document.addEventListener('mousemove', (e) => {
//     if (!isDragging || !is3DMode) return;
    
//     const deltaX = e.clientX - startX;
//     const deltaY = e.clientY - startY;
    
//     targetRotationY = deltaX * 0.3;
//     targetRotationX = -deltaY * 0.3;
    
//     if (!animationId) animateRotation();
//   });
  
//   document.addEventListener('mouseup', () => {
//     if (isDragging) {
//       isDragging = false;
//       element.style.cursor = 'grab';
//     }
//   });
// }

// function animateRotation() {
//   const img = document.getElementById('modalImage');
  
//   currentRotationX += (targetRotationX - currentRotationX) * 0.2;
//   currentRotationY += (targetRotationY - currentRotationY) * 0.2;
  
//   img.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
  
//   if (Math.abs(targetRotationX - currentRotationX) > 0.1 || 
//       Math.abs(targetRotationY - currentRotationY) > 0.1) {
//     animationId = requestAnimationFrame(animateRotation);
//   } else {
//     animationId = null;
//   }
// }

// // Event listeners
// document.querySelector('.close').addEventListener('click', () => {
//   document.getElementById('imageModal').style.display = "none";
//   cancelAnimationFrame(animationId);
// });

// window.addEventListener('click', (e) => {
//   if (e.target === document.getElementById('imageModal')) {
//     document.getElementById('imageModal').style.display = "none";
//     cancelAnimationFrame(animationId);
//   }
// });

// document.getElementById('search-input').addEventListener('input', function() {
//   displayProducts(this.value);
// });

// document.getElementById('perspective-btn').addEventListener('click', function() {
//   const img = document.getElementById('modalImage');
//   is3DMode = !is3DMode;
  
//   if (is3DMode) {
//     this.classList.add('active');
//     img.style.cursor = 'grab';
//     initDragEvents(img);
//   } else {
//     this.classList.remove('active');
//     img.style.cursor = 'default';
//     targetRotationX = 0;
//     targetRotationY = 0;
//     if (!animationId) animateRotation();
//   }
// });

// document.getElementById('zoom-in').addEventListener('click', () => {
//   const img = document.getElementById('modalImage');
//   const scale = parseFloat(img.dataset.scale) || 1;
//   const newScale = scale + 0.2;
//   img.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg) scale(${newScale})`;
//   img.dataset.scale = newScale;
// });

// document.getElementById('zoom-out').addEventListener('click', () => {
//   const img = document.getElementById('modalImage');
//   const scale = parseFloat(img.dataset.scale) || 1;
//   const newScale = Math.max(0.5, scale - 0.2);
//   img.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg) scale(${newScale})`;
//   img.dataset.scale = newScale;
// });

// document.getElementById('zoom-reset').addEventListener('click', () => {
//   const img = document.getElementById('modalImage');
//   img.style.transform = 'rotateX(0) rotateY(0) scale(1)';
//   img.dataset.scale = '1';
// });

// // Initialize
// document.addEventListener('DOMContentLoaded', () => {
//   displayProducts();
  
//   const img = document.getElementById('modalImage');
//   img.addEventListener('wheel', (e) => {
//     e.preventDefault();
//     const scale = parseFloat(img.dataset.scale) || 1;
//     const newScale = e.deltaY < 0 ? 
//       Math.min(3, scale + 0.1) : 
//       Math.max(0.5, scale - 0.1);
//     img.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg) scale(${newScale})`;
//     img.dataset.scale = newScale;
//   });
// });

function displayProducts(filter = '') {
  const container = document.getElementById('products-container');
  container.innerHTML = '';

  const filteredProducts = filter ? products.filter(p => 
    p.name.toLowerCase().includes(filter.toLowerCase()) || 
    p.description.toLowerCase().includes(filter.toLowerCase())
  ) : products;

  if (filteredProducts.length === 0) {
    container.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#666;font-size:13px;">No products found</p>';
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description.split('|').slice(0,2).join('|')}</p>
      </div>
    `;
    card.addEventListener('click', () => openModal(product));
    container.appendChild(card);
  });
}

// 3D Perspective Variables
let isDragging = false;
let startX, startY;
let rotationX = 0;
let rotationY = 0;
let currentScale = 1;

// Open Modal
function openModal(product) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  
  modalImg.src = product.image;
  modalImg.alt = product.name;
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalDescription').innerHTML = 
    product.description.split('|').map(p => `<p>• ${p.trim()}</p>`).join('');
  
  // Reset transformations
  rotationX = 0;
  rotationY = 0;
  currentScale = 1;
  updateImageTransform();
  
  modal.style.display = "block";
}

// Mouse controls for 3D perspective
function initMouseControls() {
  const container = document.querySelector('.modal-image-container');
  const img = document.getElementById('modalImage');

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    container.classList.add('grabbing');
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    
    // Adjust rotation based on mouse movement
    rotationY = deltaX * 0.2;
    rotationX = -deltaY * 0.2;
    
    updateImageTransform();
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    container.classList.remove('grabbing');
  });

  // Touch support
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    container.classList.add('grabbing');
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
    container.classList.remove('grabbing');
  });
}

// Update image transform
function updateImageTransform() {
  const img = document.getElementById('modalImage');
  img.style.transform = `
    perspective(1500px)
    rotateX(${rotationX}deg)
    rotateY(${rotationY}deg)
    scale(${currentScale})
  `;
}

// Zoom controls
document.getElementById('zoom-in').addEventListener('click', () => {
  currentScale = Math.min(3, currentScale + 0.2);
  updateImageTransform();
});

document.getElementById('zoom-out').addEventListener('click', () => {
  currentScale = Math.max(0.5, currentScale - 0.2);
  updateImageTransform();
});

document.getElementById('zoom-reset').addEventListener('click', () => {
  currentScale = 1;
  rotationX = 0;
  rotationY = 0;
  updateImageTransform();
});

// Close modal
document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('imageModal').style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('imageModal')) {
    document.getElementById('imageModal').style.display = "none";
  }
});

// Search functionality
document.getElementById('search-input').addEventListener('input', function() {
  displayProducts(this.value);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  displayProducts();
  initMouseControls();
  
  // Mouse wheel zoom in modal
  const modalImg = document.getElementById('modalImage');
  modalImg.addEventListener('wheel', (e) => {
    e.preventDefault();
    currentScale = e.deltaY < 0 ? 
      Math.min(3, currentScale + 0.1) : 
      Math.max(0.5, currentScale - 0.1);
    updateImageTransform();
  });
});