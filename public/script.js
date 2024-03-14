document.addEventListener('DOMContentLoaded', function() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        const productsRow = document.querySelector('.product__list .row');
  
        products.forEach(product => {
          const productHTML = `
            <div class="col-lg-3 single__pro col-xl-3 cat--1 col-md-4 col-sm-6 col-12">
              <div class="product foo">
                <div class="product__inner">
                  <div class="pro__thumb">
                    <a href="product-details.html?id=${product.id}">
                      <img src="${product.image}" alt="${product.title} images" />
                    </a>
                  </div>
                  <div class="product__hover__info">
                    <ul class="product__action">
                      <li>
                        <a data-bs-toggle="modal" data-bs-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#">
                          <span class="ti-plus"></span>
                        </a>
                      </li>
                      <li>
                        <a title="Add TO Cart" href="cart.html">
                          <span class="ti-shopping-cart"></span>
                        </a>
                      </li>
                      <li>
                        <a title="Wishlist" href="wishlist.html">
                          <span class="ti-heart"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="product__details">
                  <h2><a href="product-details.html?id=${product.id}">${product.title}</a></h2>
                  <ul class="product__price">
                    <li class="new__price">$${product.price}</li>
                  </ul>
                </div>
              </div>
            </div>
          `;
          productsRow.insertAdjacentHTML('beforeend', productHTML);
        });
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  });
  