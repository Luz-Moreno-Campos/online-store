import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound"



function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        /* 
        I used Promise.all() method, which takes an array of promises and returns 
        a single promise that resolves when all promises finish, which
        results in  faster loading.
        */
        const [menRes, womenRes] = await Promise.all([
          axios.get("https://fakestoreapi.com/products/category/men's%20clothing"),
          axios.get("https://fakestoreapi.com/products/category/women's%20clothing")
        ])

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


  return (
    <>
      {loading && <p>Loading products...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/product/:id" element={<Product products={products} />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      )}
    </>

  );

}

export default App;
