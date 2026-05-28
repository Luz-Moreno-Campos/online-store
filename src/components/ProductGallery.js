import ProductCard from "./ProductCard";

function ProductGallery(props) {
  return (
    <section className="product-gallery">
      {props.products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </section>
  );
}

export default ProductGallery;
