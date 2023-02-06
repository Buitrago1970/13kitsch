import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  popular: [],
  cart: [],
  explore: [],
  total: 0,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Acción para guardar todos los productos
    setProducts(state, action) {
      state.products = action.payload;
    },
    // Acción para agregar un producto al carrito
    addToCart: (state, action) => {
      state.cart.push({
        product: action.payload.product,
        size: action.payload.selectedSize,
        color: action.payload.selectedColorName,
      });
    },
    //accion para eliminar un producto del carrito
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.product.Slug !== action.payload.id
      );
    },
    //accion para guardar los productos populares
    setPopularProducts: (state, action) => {
      state.popular = action.payload;
    },
    //accion para guardar los productos de la seccion explore
    setExploreProducts: (state, action) => {
      state.explore = action.payload;
    },
    //acccion para agregar el total de productos al carrito
    setTotal: (state, action) => {
      state.total = action.payload.payload;
    },
  },
});

export const {
  setProducts,
  addToCart,
  deleteFromCart,
  setPopularProducts,
  setTotal,
  setExploreProducts,
} = productSlice.actions;

export default productSlice.reducer;
