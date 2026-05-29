import { Link } from "react-router-dom";
import "../css/ProductCard.css";

function ProductCard(props) {
  return (
    <Link to={`/product/${props.product.id}`} className="product-card">
      <div className="product-card-container">
        <img src={props.product.image} alt={props.product.title} className="product-card-image"/>
      </div>
      <h3 className="product-card-title">{props.product.title}</h3>
      <p className="product-card-price">${props.product.price}</p>
    </Link>
  );
}

export default ProductCard;
