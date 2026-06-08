import "./App.css";
import heroImage from "./assets/hero_img3.png";
import belt from "./assets/belt.png";
import wristStraps from "./assets/wrist_straps.png";
import waterBottle from "./assets/water_bottle.png";
import brand from "./assets/brand.png";

import { RiWomenLine } from "react-icons/ri";
import { FaAward, FaShippingFast } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";

import { Routes, Route, Link } from "react-router-dom";
import Shop from "./Shop";

function Home() {
  return (
    <main>
      <section className="hero">
        <img src={heroImage} alt="femfyt hero" className="heroImg" />

        <div className="heroContent">
          <h1>
            lift
            <br />
            without limits
          </h1>
          <p>Workout equipment designed specifically for women’s bodies.</p>

          <div className="heroButtons">
            <Link to="/shop">Shop Best Sellers</Link>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <RiWomenLine className="feature-icon gr-bg" />
          <h2>
            Designed
            <br />
            for Women
          </h2>
        </div>

        <div className="feature">
          <FaAward className="feature-icon p-bg" />
          <h2>
            Premium
            <br />
            Materials
          </h2>
        </div>

        <div className="feature">
          <GiWeightLiftingUp className="feature-icon d-bg" />
          <h2>
            Tested by
            <br />
            Athletes
          </h2>
        </div>

        <div className="feature">
          <FaShippingFast className="feature-icon b-bg" />
          <h2>
            Fast
            <br />
            Shipping
          </h2>
        </div>
      </section>

      <section className="community-favorites">
        <p className="section-eyebrow">Our Community Favorites</p>
        <h1>Best Sellers</h1>

        <div className="best-sellers">
          <div className="product-card">
            <img src={belt} alt="Women's Performance Squat Belt" />
            <div className="product-info">
              <h4>Women's Performance Squat Belt</h4>
              <p>$69.00</p>
              <Link to="/shop">Shop Now</Link>
            </div>
          </div>

          <div className="product-card">
            <img src={wristStraps} alt="Premium Wrist Wraps" />
            <div className="product-info">
              <h4>Premium Wrist Wraps</h4>
              <p>$24.00</p>
              <Link to="/shop">Shop Now</Link>
            </div>
          </div>

          <div className="product-card">
            <img src={waterBottle} alt="Hydration Water Bottle" />
            <div className="product-info">
              <h4>Hydration Water Bottle</h4>
              <p>$29.00</p>
              <Link to="/shop">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="why-femfyt">
        <div className="why-image">
          <img src={brand} alt="Femfyt lifting belt" />
        </div>

        <div className="why-content">
          <p className="section-eyebrow">Why Femfyt?</p>
          <h2>Built different.</h2>
          <p>
            Most fitness gear is designed around men's proportions. We create
            equipment specifically for women so you can train harder, lift
            safer, and feel more confident.
          </p>
          <button>Our Story</button>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonial">
          <p>"Finally a belt that actually fits."</p>
          <div className="stars">★★★★★</div>
          <h4>— Jessica R.</h4>
        </div>

        <div className="testimonial-divider" />

        <div className="testimonial">
          <p>
            "I stopped using my old lifting belt after one workout with Femfyt."
          </p>
          <div className="stars">★★★★★</div>
          <h4>— Amanda L.</h4>
        </div>
      </section>

      <section className="email-signup">
        <div>
          <h2>Join the Femfyt Community</h2>
          <p>Get workouts, lifting tips, and early access to new releases.</p>
        </div>

        <form className="email-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Join</button>
        </form>
      </section>
    </main>
  );
}

function App() {
  return (
    <div className="shop">
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="logo">
            femfyt
            <p>by Dylan Gregory</p>
          </Link>

          <nav className="nav">
            <Link to="/">New In</Link>
            <Link to="/shop">Shop</Link>
            <a href="#">Collections</a>
            <a href="#">About</a>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>

      <footer className="footer">
        <div className="footer-brand">
          <h2>femfyt.</h2>
          <p>lift without limits</p>
        </div>

        <div className="footer-column">
          <h4>Shop</h4>
          <Link to="/shop">All Products</Link>
          <a href="#">Belts</a>
          <a href="#">Accessories</a>
          <a href="#">Apparel</a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Community</a>
          <a href="#">Journal</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">FAQ</a>
          <a href="#">Size Guide</a>
        </div>

        <div className="footer-column">
          <h4>Follow</h4>
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">YouTube</a>
          <a href="#">Pinterest</a>
        </div>

        <div className="footer-copy">
          <p>© 2026 FEMFYT.</p>
          <p>All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
