import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import ProductDetail from "../components/ProductDetails";
import SimilarProductGallery from "../components/SimilarProductsGallery";
import '../css/product.css';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
};

function Product() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [similar, setSimilar] = useState([]);
    const [loading, setLoading] = useState(true);

    // Runs whenever the product id in the URL changes.
    // First converts the id from string to number and checks if it is valid.
    // If the id is invalid, the user is redirected back to the Home page.
    // While fetching data, loading state is enabled and the page scrolls to the top.
    // Axios then fetches the selected product from Fake Store API.
    // If the product does not exist or is not part of the men's/women's clothing categories,
    // the user is redirected back to Home.
    // Once the product is found, it is stored in state,
    // then another API request fetches similar products from the same category.
    // Similar products are also stored in state for display.
    // If any request fails, the user is redirected back to Home.
    // Finally, loading state is turned off after all requests complete.
    useEffect(() => {
        const numId = parseInt(id, 10);

        // Invalid id → back to Home
        if (!numId || isNaN(numId)) { navigate("/"); return; }

        setLoading(true);
        window.scrollTo(0, 0);

        axios
            .get(`https://fakestoreapi.com/products/${numId}`)
            .then((res) => {
                const p = res.data;
                // Wrong category or not found → back to Home
                if (!p?.id || !["men's clothing", "women's clothing"].includes(p.category)) {
                    navigate("/");
                    return null;
                }
                setProduct(p);
                return axios.get(
                    `https://fakestoreapi.com/products/category/${encodeURIComponent(p.category)}`
                );
            })
            .then((res) => {
                if (res) setSimilar(res.data);
            })
            .catch(() => navigate("/"))
            .finally(() => setLoading(false));
    }, [id, navigate]);

    if (loading) {
        return (
            <div className="spinner-wrap" style={{ minHeight: "60vh" }}>
                <div className="spinner" />
            </div>
        );
    }
    if (!product) return null;

    return (
        <motion.div
            className="product-page page-wrapper"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <nav className="product-page__breadcrumb container" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>{product.category}</span>
                <span>/</span>
                <span>{product.title.slice(0, 34)}…</span>
            </nav>
            <section className="product-page__detail container">
                <ProductDetail product={product} />
            </section>
            {similar.length > 0 && (
                <section className="product-page__similar container">
                    <h2 className="section-title">You May Also Like</h2>
                    <SimilarProductGallery products={similar} currentProductId={product.id} />
                </section>
            )}
        </motion.div>
    )
}

export default Product;