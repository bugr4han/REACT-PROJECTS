import Drawer from "@mui/material/Drawer";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket, selectTotalPrice } from "../redux/BasketSlice.jsx";

const CartDrawer = ({ open, toggleDrawer }) => {
  const { productsInBasket } = useSelector((store) => store.basket);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const handleRemove = (id) => dispatch(removeFromBasket(id));
  const handleCheckout = () =>
    alert(`Toplam ödeme: ${totalPrice.toFixed(2)} ₺`);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      slotProps={{ paper: { className: "custom-drawer" } }}
    >
      <div className="drawer-content">
        <h2>Sepetim</h2>

        {productsInBasket.length === 0 ? (
          <p className="empty-cart">Sepetiniz boş.</p>
        ) : (
          <>
            {productsInBasket.map(
              ({ id, name, title, image, price = 0, quantity = 1 }) => (
                <div key={id} className="cart-item">
                  <img src={image ?? "/placeholder.png"} alt={name ?? title} />
                  <div className="cart-info">
                    <h4>{name ?? title}</h4>
                    <h4 className="item-price">
                      Fiyat: {(price * quantity).toFixed(2)} ₺
                    </h4>
                    <p className="item-quantity">
                      ({quantity} × {price.toFixed(2)} ₺)
                    </p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(id)}
                  >
                    Sepetten Sil
                  </button>
                </div>
              )
            )}

            <div className="drawer-footer">
              <div className="total-price">
                Toplam: {totalPrice.toFixed(2)} ₺
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>
                Satın Al
              </button>
            </div>
          </>
        )}
      </div>
    </Drawer>
  );
};

export default CartDrawer;
