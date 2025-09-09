import Product from "../Components/Product";
import { ourProducts } from "../Datas/ourProducts";

function Products() {
  return (
    <div className="products-container">
      <div className="products-header">
        <h2>Ürünlerimiz</h2>
        <p className="products-subtitle">
          Kaliteli ve yenilikçi ürünlerimizle tanışın
        </p>
      </div>

      <div className="products-grid">
        {ourProducts &&
          ourProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Products;
