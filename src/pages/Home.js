import {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import CategorySelector from "../components/CategorySelector";
import SortingDropdown from "../components/SortingDropdown";
import ProductGallery from "../components/ProductGallery";
/*import SecondaryBanner from "../components/SecondaryBanner"; ADD IT ONCE IT IS CREATED AND PUT IT IN THE JSX*/ 

function Home(props) {

  const [sortOption, setSortOption] = useState(null);
  const [category, setCategory] = useState("all");

  const filteredProducts = category === "all" ? props.products : props.products.filter(prod =>
     prod.category.trim().toLowerCase() === category.trim().toLowerCase());

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    //I created a copy of the  filteredProducts array to sort it without modifying the original

    if (sortOption === "lowest-price") {
      return a.price - b.price;
    }

    if (sortOption === "highest-price") {
      return b.price - a.price;
    }

    if (sortOption === "most-popular") {
      return b.rating.count - a.rating.count;
    }

    return 0;
  });

  const handleSorting = (option) => {
    setSortOption(option);
  };

  const handleCategoryFilter = (cat) => {
    setCategory(cat);
  };

  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <div className="filters-row">
          <CategorySelector onCategorySelect={handleCategoryFilter} />
          <SortingDropdown sortOption={sortOption} onSortChange={handleSorting} />
        </div>
        <ProductGallery products={sortedProducts} category={category}  sortOption={sortOption} />    
      </main>
      <Footer />
    </>

  );

}

export default Home;
