import React from 'react';
import { ShoppingBag, Search, Menu, ArrowRight } from 'lucide-react';
import hero from "/home/user/Downloads/Shoestore1/src/assets/mojtaba-fahiminia-CQzCMx_wvk4-unsplash.jpg";
// import "/App.css";

const products = [
  {
    id: 1,
    name: "Eclipse Runner",
    price: 299,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    name: "Phantom Elite",
    price: 349,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    name: "Stealth Force",
    price: 279,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000"
  },
];

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-icons">
              <Menu className="icon" />
            </div>
            <div className="nav-logo">LUXE</div>
            <div className="nav-icons">
              <Search className="icon" />
              <ShoppingBag className="icon" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-image-container">
          <img 
            src={hero}
            alt="Hero"
            className="hero-image"
          />
          <div className="hero-gradient" />
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Elevate Your Style</h1>
            <p className="hero-description">Experience unparalleled comfort and sophistication with our premium collection.</p>
            <button className="btn btn-primary">
              Shop Collection
              <ArrowRight className="btn-icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="products-section">
        <h2 className="section-title">Featured Collection</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-details">
                <span className="product-price">${product.price}</span>
                <button className="add-to-cart">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-container">
          <h2 className="newsletter-title">Stay Updated</h2>
          <p className="newsletter-description">
            Subscribe to our newsletter for exclusive offers, new releases, and more.
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-button">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Shop</h3>
              <ul className="footer-links">
                <li>New Arrivals</li>
                <li>Best Sellers</li>
                <li>Collections</li>
                <li>Sale</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Support</h3>
              <ul className="footer-links">
                <li>FAQ</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>About</h3>
              <ul className="footer-links">
                <li>Our Story</li>
                <li>Sustainability</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <ul className="footer-links">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Pinterest</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 LUXE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;