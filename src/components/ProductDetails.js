import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import useCartStore from "../store/cartStore";

function ProductDetails ({ product }) {
     // Zustand store action
    const addItem = useCartStore((state) => state.addItem);
    // Local states
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("M");
    const [color, setColor] = useState("Black");
    const [tab, setTab] = useState("Description");
    const sizes = ["S", "M", "L", "XL"];
    const colors = ["Black", "White", "Beige", "Navy"];

    // Add product to cart
    const handleAdd = () => {
        addItem(product, quantity, size, color);
    };
    // Loading state
    if (!product) {
        return <p>Loading...</p>;
    }
    return (
        <div className="product-detail">
            {/* Product Image Slider */}
            <Swiper slidesPerView={1}>
                <SwiperSlide>
                    <img src={product.image} alt={product.title} />
                </SwiperSlide>
            </Swiper>
        </div>
    ) 
}

export default ProductDetails;