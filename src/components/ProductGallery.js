import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function ProductGallery(props) {

  const previewProducts = props.products.slice(0, 3);
  return (
    <section className="product-gallery">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="product-gallery-carousel"
      >
        {previewProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="product-gallery-grid">
        {props.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section >

  );
}

export default ProductGallery;
