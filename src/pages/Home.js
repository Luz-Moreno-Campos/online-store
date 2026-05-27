import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [sortOption, setSortOption] = useState(null);
  const [category, setCategory] = useState("all");

 useEffect(() => {
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const menRes = await axios.get("https://fakestoreapi.com/products/category/men's clothing");
      const womenRes = await axios.get("https://fakestoreapi.com/products/category/women's clothing");

      const clothing = [...menRes.data, ...womenRes.data];
      setProducts(clothing);

    } catch (error) { 
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p >{error}</p>;
  }

  return (
    <>
    </>
  );


}

export default Home;
