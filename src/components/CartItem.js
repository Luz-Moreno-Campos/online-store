import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa";
import useCartStore from "../store/cartStore";

function CartItem({ item }) {
    const updateQuantity = useCartStore((s) => s.updateQuantity);
    const removeItem = useCartStore((s) => s.removeItem);

    return (
        <div className="cart-item">
            {/* Product Image */}
            <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.title} />
            </Link>
            {/* Info */}
            <div>
                <Link to={`/product/${item.id}`}>
                    <p>{item.title}</p>
                </Link>
                <p>{item.size} • {item.color}</p>
                <p>${item.price.toFixed(2)}</p>
            </div>

            {/* Quantity */}
            <div>
                <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}>
                    <FaMinus />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}>
                    <FaPlus />
                </button>
            </div>
            {/* Subtotal */}
            <div>
                ${(item.price * item.quantity).toFixed(2)}
            </div>
            {/* Remove */}
            <button onClick={() => removeItem(item.id, item.size, item.color)}>
                <FaTimes />
            </button>
        </div>
    );
}

export default CartItem;