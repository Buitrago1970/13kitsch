import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  popular: [],
  cart: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    // Acción para agregar un producto al carrito
    addToCart: (state, action) => {
      state.cart.push({
        product: action.payload.product,
        size: action.payload.selectedSize,
        color: action.payload.selectedColor,
      });
    },
    //accion para eliminar un producto del carrito
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.product.Slug !== action.payload.id
      );
    },
    //accion para traer los productos populares
    setPopularProducts: (state, action) => {
      state.popular = action.payload;
    },
  },
});

export const { setProducts, addToCart, deleteFromCart, setPopularProducts } =
  productSlice.actions;

export default productSlice.reducer;
