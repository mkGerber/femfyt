import "./Shop.css";

const products = [
  { name: "Performance Squat Belt", category: "Belts", price: "$69.00" },
  { name: "Hip Thrust Belt", category: "Belts", price: "$59.00" },
  { name: "Wrist Straps", category: "Accessories", price: "$24.00" },
  { name: "Training Water Bottle", category: "Accessories", price: "$28.00" },
  { name: "Resistance Band Set", category: "Accessories", price: "$32.00" },
  { name: "Oversized Pump Cover Tee", category: "Apparel", price: "$38.00" },
];

function Shop() {
  return (
    <main className="shop-page">
      <section className="shop-hero">
        <p className="shop-eyebrow">Femfyt Equipment</p>
        <h1>Shop gear built for women.</h1>
        <p>
          Premium workout essentials designed to support your lifts, your body,
          and your confidence.
        </p>
      </section>

      <section className="shop-layout">
        <aside className="shop-sidebar">
          <h3>Categories</h3>
          <button>All</button>
          <button>Belts</button>
          <button>Accessories</button>
          <button>Apparel</button>
        </aside>

        <section className="products-section">
          <div className="products-header">
            <h2>All Products</h2>
            <p>{products.length} products</p>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <article className="shop-card" key={product.name}>
                <div className="product-placeholder">
                  <span>{product.category}</span>
                </div>

                <div className="shop-card-info">
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                  <div className="card-bottom">
                    <span>{product.price}</span>
                    <button>Add to Cart</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default Shop;
