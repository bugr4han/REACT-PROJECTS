import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/ProductSlice";
import { addToBasket } from "../redux/BasketSlice";

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (products && products.length > 0) {
      const product = products.find((p) => p.id === Number(id));
      if (product) {
        dispatch(setSelectedProduct(product));
      }
    }
  }, [dispatch, id, products]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const addBasket = () => {
    if (!selectedProduct) return;

    const payload = {
      id: selectedProduct.id,
      price: selectedProduct.price,
      image: selectedProduct.image,
      title: selectedProduct.title,
      description: selectedProduct.description,
      quantity: quantity,
    };
    dispatch(addToBasket(payload));
  };

  return (
    <div className="product-details-container">
      {selectedProduct && selectedProduct.id && (
        <div className="product-details-card">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="product-details-image"
          />
          <div className="product-details-info">
            <h2 className="product-details-title">{selectedProduct.title}</h2>
            <p className="product-details-category">
              Category: {selectedProduct.category}
            </p>
            <p className="product-details-description">
              {selectedProduct.description}
            </p>
            {selectedProduct.rating && (
              <p className="product-details-rating">
                Rating: {selectedProduct.rating.rate} / 5 (
                {selectedProduct.rating.count} reviews)
              </p>
            )}
            <p className="product-details-price">${selectedProduct.price}</p>

            <div className="quantity-buttons">
              <button onClick={decreaseQuantity}>−</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>

            <button onClick={addBasket} className="add-to-cart-button">
              Add {quantity} to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
