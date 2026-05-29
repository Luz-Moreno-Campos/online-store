import menCatImage from "../assets/media/men-category.jpg";
import womenCatImage from "../assets/media/women-category.jpg";
import allCatImage from "../assets/media/all-category.jpg";

function CategorySelector(props) {
  return (
    <section className="category-selector">
      <h3>Search by Category</h3>
      <div className="category-options">
        <div className="category-card" onClick={() => props.onCategorySelect("men's clothing")}>
          <img src={menCatImage} alt="Men's Clothing" className="category-image" />
          <p>Men's Clothing</p>
        </div>
        <div className="category-card" onClick={() => props.onCategorySelect("women's clothing")}>
          <img src={womenCatImage} alt="Women's Clothing" className="category-image" />
          <p>Women's Clothing</p>
        </div>
        <div className="category-card" onClick={() => props.onCategorySelect("all")}>
          <img src={allCatImage} alt="All products" />
          <p>All Products</p>
        </div>
      </div>
    </section>
  );
}

export default CategorySelector;
