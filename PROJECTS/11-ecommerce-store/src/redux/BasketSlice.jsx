import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
  const storedBasket = localStorage.getItem("basket");
  return storedBasket ? JSON.parse(storedBasket) : [];
};

const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

const initialState = {
  productsInBasket: getBasketFromStorage(),
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct = state.productsInBasket.find(
        (product) => product.id === action.payload.id
      );

      if (findProduct) {
        findProduct.quantity += action.payload.quantity;
      } else {
        state.productsInBasket.push(action.payload);
      }

      writeFromBasketToStorage(state.productsInBasket);
    },

    removeFromBasket: (state, action) => {
      state.productsInBasket = state.productsInBasket.filter(
        (product) => product.id !== action.payload
      );
      writeFromBasketToStorage(state.productsInBasket);
    },
  },
});

export const selectTotalPrice = (state) =>
  state.basket.productsInBasket.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

export const { addToBasket, removeFromBasket } = BasketSlice.actions;
export default BasketSlice.reducer;
