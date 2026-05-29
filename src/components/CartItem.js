import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
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