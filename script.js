// Complete product data with descriptions including material type and thickness
const products = [


  // Sngle Stones 
   {
    name: "Agra Red",
    image: "images/Single-Agra-Red.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Vibrant red stone for bold designs."
  },
  {
    name: "Agra Red Natural",
    image: "images/New/Agra-Red-Natural.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Unique green stone with speckled appearance."
  },
  {
    name: "Chocolate",
    image: "images/Single-Chocolate.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Rich chocolate brown for cozy spaces."
  },
 

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
    name: "Kandala Grey Wall",
    image: "images/Kandla-Grey-Wall.jpg",
    description: "Material: Sandstone | Thickness: 15-20mm | Finish: Natural | Light grey stone perfect for wall cladding."
  },
  {
    name: "Kandala Grey Wall Cladding",
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
    name: "Autumn Brown",
    image: "images/Single-Autumn-Brown.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Warm brown tones resembling autumn leaves."
  },
  
  {
    name: "Deoli Green",
    image: "images/Single-Deoli-Green.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Earthy green with natural variations."
  },
  {
    name: "Kandala Grey",
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
    name: "Lalitpur Grey",
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
    image: "images/Mint-Ivory.jpg",
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
  },
  {
    name: "Agra Red Natural",
    image: "images/New/Agra-Red-Natural.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Unique green stone with speckled appearance."
  },
  {
    name: "Agra Red Pattern",
    image: "images/New/Agra-Red-Pattern.webp",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Unique green stone with speckled appearance."
  },
  {
    name: "Agra Red Pattern",
    image: "images/New/Agra-Red-Pattern-Natural.png",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Unique green stone with speckled appearance."
  },
  {
    name: "Dholpur Beige",
    image: "images/New/Dholpur-Beidge-Natural.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Unique green stone with speckled appearance."
  },
  {
    name: "Kandla Grey Natural",
    image: "images/New/Kandala-Grey-Natural-Sandstone.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Unique green stone with speckled appearance."
  },
  {
    name: "Kandala Grey",
    image: "images/New/Kanadala-Grey-New.png",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Unique green stone with speckled appearance."
  },
  {
    name: "Lalitpur Natural",
    image: "images/New/Lalitpur-Natural.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Unique green stone with speckled appearance."
  },
  {
    name: "Mandana Natural",
    image: "images/New/Mandana-Natural-Sandstone.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Unique green stone with speckled appearance."
  },
  ,
  {
    name: "Mint White",
    image: "images/New/Mint-White-Natural.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Unique green stone with speckled appearance."
  },
   ,
  {
    name: "Rainbow",
    image: "images/New/Rainbow-Sandstone.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Unique green stone with speckled appearance."
  },
   
  {
    name: "Rajgreen",
    image: "images/New/Rajgreen-Natural.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Unique green stone with speckled appearance."
  },
  ,
   
  {
    name: "Teak Wood",
    image: "images/New/Teak-Wood-Polished.jpg",
    description: "Material: Sandstone | Thickness: 20-30mm | Finish: Natural | Unique green stone with speckled appearance."
  },
  
  
];


// 3D Perspective Variables
let isDragging = false;
let startX, startY;
let rotationX = 0;
let rotationY = 0;
let currentScale = 1;
let touchId = null;
let initialDistance = 0;

function displayProducts(filter = '') {
  const container = document.getElementById('products-container');
  container.innerHTML = '';

  const filteredProducts = filter
    ? products.filter(p =>
        p.name.toLowerCase().includes(filter.toLowerCase()) ||
        p.description.toLowerCase().includes(filter.toLowerCase())
      )
    : products;

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
        <p class="product-description">${product.description.split('|').slice(0, 2).join('|')}</p>
      </div>
    `;
    card.addEventListener('click', () => openModal(product));
    container.appendChild(card);
  });
}

function openModal(product) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');

  modalImg.src = product.image;
  modalImg.alt = product.name;
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalDescription').innerHTML =
    product.description.split('|').map(p => `<p>• ${p.trim()}</p>`).join('');

  rotationX = 0;
  rotationY = 0;
  currentScale = 1;
  updateImageTransform();

  modal.style.display = "block";
}

function updateImageTransform() {
  const img = document.getElementById('modalImage');
  img.style.transform = `
    perspective(1500px)
    rotateX(${rotationX}deg)
    rotateY(${rotationY}deg)
    scale(${currentScale})
  `;
}

function initControls() {
  const container = document.querySelector('.modal-image-container');
  const img = document.getElementById('modalImage');

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    container.classList.add('grabbing');
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    rotationY = deltaX * 0.2;
    rotationX = -deltaY * 0.2;
    updateImageTransform();
    e.preventDefault();
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    container.classList.remove('grabbing');
  });

  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      isDragging = true;
      touchId = touch.identifier;
      startX = touch.clientX;
      startY = touch.clientY;
      container.classList.add('grabbing');
      e.preventDefault();
    } else if (e.touches.length === 2) {
      initialDistance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      e.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1 && isDragging) {
      const touch = Array.from(e.touches).find(t => t.identifier === touchId);
      if (!touch) return;
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;
      rotationY = deltaX * 0.3;
      rotationX = -deltaY * 0.3;
      updateImageTransform();
      e.preventDefault();
    } else if (e.touches.length === 2 && initialDistance > 0) {
      const currentDistance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const scaleFactor = currentDistance / initialDistance;
      currentScale = Math.max(0.5, Math.min(3, currentScale * scaleFactor));
      updateImageTransform();
      initialDistance = currentDistance;
      e.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('touchend', (e) => {
    if (e.touches.length === 0) {
      isDragging = false;
      container.classList.remove('grabbing');
      initialDistance = 0;
    } else if (e.touches.length === 1) {
      const remainingTouch = Array.from(e.touches).find(t => t.identifier === touchId);
      if (!remainingTouch) {
        isDragging = false;
        container.classList.remove('grabbing');
      }
    }
  });
}

// Zoom buttons
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
['zoom-in', 'zoom-out', 'zoom-reset'].forEach(id => {
  const btn = document.getElementById(id);
  btn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    btn.click();
  }, { passive: false });
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
document.querySelector('.close').addEventListener('touchstart', (e) => {
  e.preventDefault();
  document.querySelector('.close').click();
}, { passive: false });

// Search functionality
document.getElementById('search-input').addEventListener('input', function () {
  displayProducts(this.value);
});

// INITIALIZE and SORT alphabetically before display
document.addEventListener('DOMContentLoaded', () => {
  // Sort products A–Z by name
  products.sort((a, b) => a.name.localeCompare(b.name));
  displayProducts();
  initControls();

  // Enable zoom with mouse wheel
  const modalImg = document.getElementById('modalImage');
  modalImg.addEventListener('wheel', (e) => {
    e.preventDefault();
    currentScale = e.deltaY < 0
      ? Math.min(3, currentScale + 0.1)
      : Math.max(0.5, currentScale - 0.1);
    updateImageTransform();
  }, { passive: false });
});