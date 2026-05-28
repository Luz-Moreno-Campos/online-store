import ProductCard from "./ProductCard";

function SimilarProductGallery(props) {
  const similarProds = props.products.filter(product => product.id !== Number(props.currentProductId)).slice(0, 3);

  return (
    <section className="similar-products-gallery">
      <div className="similar-products-row">
        {similarProds.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default SimilarProductGallery;
