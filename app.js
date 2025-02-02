// DOM Elements
const productsGrid = document.getElementById('products-grid');

// Helper function to create product cards
function createProductCard(product) {
  return `
    <div class="product-card">
      <div class="product-image-container">
        <img class="product-image" src="${product.image}" alt="${product.name}">
        <div class="product-overlay"></div>
        <button class="quick-shop-btn" onclick="window.location.href='product-details.html?id=${product.id}'">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
            <path d="M3 6h18"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          クイックショップ
        </button>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <span class="product-price">$${product.price.toFixed(2)}</span>
      </div>
    </div>
  `;
}

// Helper function to create product detail page
// function createProductDetail(product) {
//   return `
//     <div class="product-detail" id="product-detail-${product.id}">
//       <div class="container">
//         <button class="back-btn" onclick="hideProductDetail(${product.id})">
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//             <path d="m12 19-7-7 7-7"/>
//             <path d="M19 12H5"/>
//           </svg>
//           Back to Products
//         </button>
//         <div class="product-detail-container">
//           <img class="product-detail-image" src="${product.image}" alt="${product.name}">
//           <div class="product-detail-info">
//             <h2 class="product-name">${product.name}</h2>
//             <p class="product-description">${product.description}</p>
//             <p class="product-price">$${product.price.toFixed(2)}</p>
//             <p style="margin-top: 1rem">${product.details}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;
// }

// Load products
async function loadProducts() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Clear loader
  productsGrid.innerHTML = '';
  
  // Add product cards
  products.forEach(product => {
    productsGrid.insertAdjacentHTML('beforeend', createProductCard(product));
  });
  
  // Add product detail pages
  products.forEach(product => {
    document.body.insertAdjacentHTML('beforeend', createProductDetail(product));
  });
}

// Show product detail
function showProductDetail(productId) {
  document.querySelector('.product-section').style.display = 'none';
  document.getElementById(`product-detail-${productId}`).classList.add('active');
}

// Hide product detail
function hideProductDetail(productId) {
  document.querySelector('.product-section').style.display = 'block';
  document.getElementById(`product-detail-${productId}`).classList.remove('active');
}

// Initialize
loadProducts();