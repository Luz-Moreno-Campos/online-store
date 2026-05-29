import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SecondaryBanner from "./components/SecondaryBanner";



function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hideBanner =
  location.pathname === "/contact" || location.pathname === "/cart";

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
        <>
        <Header />
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/product/:id" element={<Product products={products} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
          {!hideBanner && <SecondaryBanner />}
          <Footer />
        </>
      )}
    </>

  );

}

export default App;
