import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import Button from "../components/Button";
import useCartStore from "../store/cartStore";

function Cart () {
    const items = useCartStore((state) => state.items);
    const clearCart = useCartStore((state) => state.clearCart);

    // Empty state
    if (items.length === 0) {
        return (
            <div className="cart-empty">
                <IoCartOutline size={60} />
                <h2>Your cart is empty</h2>
                <p>Start adding items to your cart.</p>
                <Button label="Start Shopping" to="/" />
            </div>
        );
    }
    return (
         <div className="cart-page">
            <div className="cart-header">
                <h1>Shopping Cart</h1>
                <span>{items.length} item{items.length > 1 && "s"}</span>
            </div>
            <div className="cart-body">
                <div className="cart-items">
                    {items.map((item) => (
                        <CartItem
                            key={`${item.id}-${item.size}-${item.color}`} // ✅ correct unique key
                            item={item}
                        />
                    ))}
    )
}

export default Cart;