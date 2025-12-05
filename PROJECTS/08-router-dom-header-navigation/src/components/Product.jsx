import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, name, price } = product;
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <h3 className="product-name">{name}</h3>
      <p className="product-price">Fiyat: {price} TL</p>
      <button
        className="product-button"
        onClick={() => navigate(`/product-details/${id}`)}
      >
        Detaylı İncele
      </button>
    </div>
  );
}

export default Product;
