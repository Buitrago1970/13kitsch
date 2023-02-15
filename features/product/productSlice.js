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
      //si el producto ya existe en el carrito, solo se aumenta la cantidad
      const found = state.cart.find(
        (item) =>
          item.product.slug === action.payload.product.slug &&
          item.size === action.payload.selectedSize &&
          item.color === action.payload.selectedColorName
      );
      if (found) {
        found.quantity += action.payload.quantity;
      } else {
        //si el producto no existe en el carrito, se agrega
        state.cart.push({
          product: action.payload.product,
          size: action.payload.selectedSize,
          color: action.payload.selectedColorName,
          quantity: action.payload.quantity,
        });
      }
    },
    //accion para eliminar un producto del carrito
    deleteFromCart: (state, action) => {
      debugger;
      state.cart = state.cart.filter(
        (item) => item.product.slug !== action.payload.id
      );
    },
    //accion para cambiar la cantidad de un producto en el carrito
    changeQuantity: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.product.Slug === action.payload.id
          ? { ...item, quantity: action.payload.payload }
          : item
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
    //accion para limpiar el carrito
    clearCart: (state) => {
      state.cart = [];
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
  changeQuantity,
  clearCart,
} = productSlice.actions;

export default productSlice.reducer;
