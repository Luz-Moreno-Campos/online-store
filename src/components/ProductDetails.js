import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import useCartStore from "../store/cartStore";
import Button from "./Button";
import '../css/productDetails.css';

function ProductDetails({ product }) {
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
            <div>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
                <p>{product.category}</p>
                <div>
                    <p>Size: {size}</p>
                    {sizes.map((sizeOption) => (
                        <button key={sizeOption} onClick={() => setSize(sizeOption)}> {sizeOption}
                        </button>
                    ))}
                </div>
                <div>
                    <p>Color: {color}</p>
                    {colors.map((colorOption) => (
                        <button key={colorOption} onClick={() => setColor(colorOption)}> {colorOption}
                        </button>
                    ))}
                </div>
                <div>
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                        <FaMinus />
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>
                        <FaPlus />
                    </button>
                </div>
                <button onClick={handleAdd}> Add to Cart </button>
                <Button
                    label="Go to Cart"
                    to="/cart"
                    variant="primary"
                />
                <div>
                    <button onClick={() => setTab("Description")}> Description </button>
                    <button onClick={() => setTab("Details")}> Details </button>
                </div>
                {tab === "Description" && (<p>{product.description}</p>)}
                {tab === "Details" && (
                    <ul>
                        <li> Category: {product.category} </li>
                        <li> Price: ${product.price} </li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default ProductDetails;