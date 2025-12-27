/**
 * TechStore Theme - Main JavaScript
 */

(function() {
  'use strict';

  // Theme namespace
  window.theme = window.theme || {};

  /**
   * Cart functionality
   */
  theme.cart = {
    init: function() {
      this.bindEvents();
    },

    bindEvents: function() {
      // Cart toggle
      const cartToggle = document.querySelector('.cart-toggle');
      if (cartToggle) {
        cartToggle.addEventListener('click', this.toggleCart.bind(this));
      }

      // Quick add buttons
      const quickAddButtons = document.querySelectorAll('.quick-add-btn');
      quickAddButtons.forEach(button => {
        button.addEventListener('click', this.quickAdd.bind(this));
      });
    },

    toggleCart: function() {
      const cartDrawer = document.getElementById('cart-drawer');
      if (window.theme.cartType === 'drawer') {
        cartDrawer.classList.toggle('active');
      } else {
        window.location.href = window.theme.routes.cart_url;
      }
    },

    quickAdd: function(event) {
      const button = event.currentTarget;
      const productId = button.dataset.productId;
      
      button.disabled = true;
      button.textContent = 'Adding...';

      fetch(window.theme.routes.cart_add_url + '.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: productId,
          quantity: 1
        })
      })
      .then(response => response.json())
      .then(data => {
        this.updateCartCount();
        button.textContent = 'Added!';
        setTimeout(() => {
          button.disabled = false;
          button.textContent = 'Quick Add';
        }, 2000);
      })
      .catch(error => {
        console.error('Error:', error);
        button.disabled = false;
        button.textContent = 'Error';
        setTimeout(() => {
          button.textContent = 'Quick Add';
        }, 2000);
      });
    },

    updateCartCount: function() {
      fetch('/cart.js')
        .then(response => response.json())
        .then(data => {
          const cartCount = document.querySelector('.cart-count');
          if (cartCount) {
            cartCount.textContent = data.item_count;
            cartCount.style.display = data.item_count > 0 ? 'flex' : 'none';
          }
        });
    }
  };

  /**
   * Search functionality
   */
  theme.search = {
    init: function() {
      const searchToggle = document.querySelector('.search-toggle');
      const searchBar = document.querySelector('.search-bar');

      if (searchToggle && searchBar) {
        searchToggle.addEventListener('click', function() {
          const isVisible = searchBar.style.display === 'block';
          searchBar.style.display = isVisible ? 'none' : 'block';
          if (!isVisible) {
            searchBar.querySelector('.search-input').focus();
          }
        });
      }
    }
  };

  /**
   * Mobile menu
   */
  theme.mobileMenu = {
    init: function() {
      const menuToggle = document.querySelector('.mobile-menu-toggle');
      const nav = document.querySelector('.header-nav');

      if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
          nav.classList.toggle('active');
          menuToggle.classList.toggle('active');
        });
      }
    }
  };

  /**
   * Product page functionality
   */
  theme.product = {
    init: function() {
      this.initVariants();
      this.initImageGallery();
    },

    initVariants: function() {
      const form = document.querySelector('.product-form');
      if (!form) return;

      const variantSelectors = form.querySelectorAll('input[type="radio"]');
      const variantSelect = form.querySelector('.product-variant-select');

      variantSelectors.forEach(selector => {
        selector.addEventListener('change', () => {
          this.updateVariant(form);
        });
      });
    },

    updateVariant: function(form) {
      const selectedOptions = [];
      const variantSelectors = form.querySelectorAll('input[type="radio"]:checked');
      
      variantSelectors.forEach(selector => {
        selectedOptions.push(selector.value);
      });

      const variantSelect = form.querySelector('.product-variant-select');
      const options = variantSelect.querySelectorAll('option');

      options.forEach(option => {
        const optionTitle = option.textContent.split(' - ')[0];
        const matches = selectedOptions.every(selected => 
          optionTitle.includes(selected)
        );

        if (matches) {
          variantSelect.value = option.value;
          this.updatePrice(option);
          this.updateAvailability(option);
        }
      });
    },

    updatePrice: function(option) {
      const priceElement = document.querySelector('[data-price]');
      if (!priceElement) return;

      // Price update logic would go here
      // This would typically fetch variant data and update the display
    },

    updateAvailability: function(option) {
      const addToCartBtn = document.querySelector('.btn-add-to-cart');
      if (!addToCartBtn) return;

      if (option.disabled) {
        addToCartBtn.disabled = true;
        addToCartBtn.textContent = 'Sold Out';
      } else {
        addToCartBtn.disabled = false;
        addToCartBtn.textContent = 'Add to Cart';
      }
    },

    initImageGallery: function() {
      const thumbnails = document.querySelectorAll('.thumbnail');
      const mainImage = document.getElementById('product-featured-image');

      if (!mainImage) return;

      thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
          const newImageSrc = this.dataset.image;
          mainImage.src = newImageSrc;
          
          thumbnails.forEach(t => t.classList.remove('active'));
          this.classList.add('active');
        });
      });
    }
  };

  /**
   * Smooth scroll
   */
  theme.smoothScroll = {
    init: function() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          if (href === '#' || href === '#!') return;

          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    }
  };

  /**
   * Lazy loading images
   */
  theme.lazyLoad = {
    init: function() {
      // Use native lazy loading which is supported in modern browsers
      // Fallback is handled by browser's own image loading mechanism
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
      });
    }
  };

  /**
   * Accessibility
   */
  theme.accessibility = {
    init: function() {
      // Skip to content link
      const skipLink = document.querySelector('.skip-to-content-link');
      if (skipLink) {
        skipLink.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.setAttribute('tabindex', '-1');
            target.focus();
          }
        });
      }

      // Trap focus in modals/drawers
      this.trapFocus();
    },

    trapFocus: function() {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const modals = document.querySelectorAll('[data-modal]');

      modals.forEach(modal => {
        const firstFocusable = modal.querySelectorAll(focusableElements)[0];
        const focusables = modal.querySelectorAll(focusableElements);
        const lastFocusable = focusables[focusables.length - 1];

        modal.addEventListener('keydown', function(e) {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
              }
            }
          }

          if (e.key === 'Escape') {
            modal.classList.remove('active');
          }
        });
      });
    }
  };

  /**
   * Initialize all modules
   */
  function init() {
    theme.cart.init();
    theme.search.init();
    theme.mobileMenu.init();
    theme.product.init();
    theme.smoothScroll.init();
    theme.lazyLoad.init();
    theme.accessibility.init();

    // Update cart count on page load
    if (document.querySelector('.cart-count')) {
      theme.cart.updateCartCount();
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
