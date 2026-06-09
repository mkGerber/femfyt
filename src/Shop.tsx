import { useMemo, useState } from "react";
import "./Shop.css";

type Product = {
  name: string;
  category: "Belts" | "Accessories" | "Apparel";
  price: string;
};

const products: Product[] = [
  { name: "Performance Squat Belt", category: "Belts", price: "$69.00" },
  { name: "Ankle Straps", category: "Accessories", price: "$59.00" },
  { name: "Wrist Straps", category: "Accessories", price: "$24.00" },
  { name: "Training Water Bottle", category: "Accessories", price: "$28.00" },
  { name: "Resistance Band Set", category: "Accessories", price: "$32.00" },
  { name: "Oversized Pump Cover Tee", category: "Apparel", price: "$38.00" },
  { name: "Duffel Bag", category: "Apparel", price: "$38.00" },
  { name: "Yoga Mat", category: "Accessories", price: "$30.00" },
  { name: "Heel Wedge", category: "Accessories", price: "$20.00" },
  { name: "Microfiber Sweat Towel", category: "Apparel", price: "$15.00" },
  { name: "No-Slip Hair Ties", category: "Apparel", price: "$10.00" },
  { name: "Headband", category: "Apparel", price: "$12.00" },
  { name: "Shaker Bottle", category: "Accessories", price: "$20.00" },
  {
    name: "Progress Tracker Notebook",
    category: "Accessories",
    price: "$38.00",
  },
  { name: "Barbell Pad", category: "Accessories", price: "$20.00" },
];

const categories = ["All", "Belts", "Accessories", "Apparel"] as const;

type Category = (typeof categories)[number];

type SortOption =
  | "featured"
  | "price-low-high"
  | "price-high-low"
  | "name-a-z"
  | "name-z-a";

function getPriceNumber(price: string) {
  return Number(price.replace("$", ""));
}

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [sortOption, setSortOption] = useState<SortOption>("featured");

  const filteredAndSortedProducts = useMemo(() => {
    let result =
      selectedCategory === "All"
        ? [...products]
        : products.filter((product) => product.category === selectedCategory);

    if (sortOption === "price-low-high") {
      result.sort((a, b) => getPriceNumber(a.price) - getPriceNumber(b.price));
    }

    if (sortOption === "price-high-low") {
      result.sort((a, b) => getPriceNumber(b.price) - getPriceNumber(a.price));
    }

    if (sortOption === "name-a-z") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortOption === "name-z-a") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [selectedCategory, sortOption]);

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

          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active-category" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </aside>

        <section className="products-section">
          <div className="products-header">
            <div>
              <h2>
                {selectedCategory === "All" ? "All Products" : selectedCategory}
              </h2>
              <p>{filteredAndSortedProducts.length} products</p>
            </div>

            <label className="sort-control">
              Sort by
              <select
                value={sortOption}
                onChange={(event) =>
                  setSortOption(event.target.value as SortOption)
                }
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="name-a-z">Name: A to Z</option>
                <option value="name-z-a">Name: Z to A</option>
              </select>
            </label>
          </div>

          <div className="products-grid">
            {filteredAndSortedProducts.map((product) => (
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
