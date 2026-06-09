import "./Launch.css";

function Launch() {
  return (
    <main className="launch-page">
      <section className="launch-hero">
        <p className="section-eyebrow">Launching Soon</p>
        <h1>Equipment designed for women. Not adapted for them.</h1>
        <p>
          Femfyt is building premium lifting gear designed around women’s
          bodies, feedback, and real training needs.
        </p>

        <div className="launch-buttons">
          <a href="#founders">Join Waitlist</a>
          <a href="#coming-soon">See Products</a>
        </div>
      </section>

      <section className="problem-section">
        <p className="section-eyebrow">The Problem</p>
        <h2>Most lifting gear was never made with women in mind.</h2>

        <div className="problem-grid">
          <div className="problem-card">
            <h3>Traditional Belts</h3>
            <p>Too tall, uncomfortable, and often dig into ribs or hips.</p>
          </div>

          <div className="problem-card">
            <h3>Generic Accessories</h3>
            <p>One-size-fits-all gear usually does not actually fit all.</p>
          </div>

          <div className="problem-card">
            <h3>Femfyt Gear</h3>
            <p>Designed from female athlete feedback with premium materials.</p>
          </div>
        </div>
      </section>

      <section className="launch-mission">
        <div>
          <p className="section-eyebrow">Our Mission</p>
          <h2>Built for women who lift.</h2>
        </div>

        <p>
          No pink-washing. No cheap products with a logo slapped on. Femfyt is
          focused on creating thoughtfully designed gym equipment that performs,
          fits better, and feels better to train with.
        </p>
      </section>

      <section className="coming-soon" id="coming-soon">
        <p className="section-eyebrow">Product Roadmap</p>
        <h2>Coming Soon</h2>

        <div className="roadmap-grid">
          <div className="roadmap-card">
            <span>01</span>
            <h3>Performance Belt</h3>
            <p>In Development</p>
          </div>

          <div className="roadmap-card">
            <span>02</span>
            <h3>Women's Wrist Straps</h3>
            <p>Research Phase</p>
          </div>

          <div className="roadmap-card">
            <span>03</span>
            <h3>Ankle Straps</h3>
            <p>Prototype Phase</p>
          </div>

          <div className="roadmap-card">
            <span>04</span>
            <h3>Gym Bag</h3>
            <p>Concept Phase</p>
          </div>
        </div>
      </section>

      <section className="founders-club" id="founders">
        <div>
          <p className="section-eyebrow">Founders Club</p>
          <h2>Help build Femfyt from the beginning.</h2>
          <p>
            Join the early community for product updates, testing opportunities,
            early access, and launch discounts.
          </p>
        </div>

        <form className="founders-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Join Waitlist</button>
        </form>
      </section>

      <section className="support-section">
        <p className="section-eyebrow">Support the Launch</p>
        <h2>Choose how you want to support us.</h2>

        <div className="support-grid">
          <div className="support-card">
            <h3>Supporter</h3>
            <p>$5</p>
            <button>Support</button>
          </div>

          <div className="support-card">
            <h3>Founding Member</h3>
            <p>$25</p>
            <button>Join</button>
          </div>

          <div className="support-card featured-support">
            <h3>Early Access</h3>
            <p>$50</p>
            <button>Get Access</button>
          </div>

          <div className="support-card">
            <h3>Preorder Belt</h3>
            <p>$69</p>
            <button>Preorder</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Launch;
