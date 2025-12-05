import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, price, image, title, description } = product;
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product-details/${id}`)}
    >
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <div className="product-bottom">
          <p className="product-price">${price}</p>
          <button
            onClick={() => navigate(`/product-details/${id}`)}
            className="product-button"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
