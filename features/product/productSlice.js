import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    cart: []
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
        // Acción para agregar un producto al carrito
        addToCart: (state, action) => {
            debugger
            state.cart.push({
                product: action.payload.product,
                size: action.payload.selectedSize,
                color: action.payload.selectedColor
            });
        }
    }
})

export const { setProducts, addToCart } = productSlice.actions

export default productSlice.reducer


