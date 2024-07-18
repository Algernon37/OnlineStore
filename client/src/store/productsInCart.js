import { createSlice } from '@reduxjs/toolkit';

const productsInCartSlice = createSlice({
    name: 'productsInCart',
    initialState: {
        products: [],
    },
    reducers: {
        addToCart(state, action) {
            const { id } = action.payload;
            const existingProduct = state.products.find(product => product.id === id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart(state, action) {
            state.products = state.products.filter(item => item.id !== action.payload);
        },
        updateProduct(state, action) {
            state.products = state.products.map(item =>
                item.id === action.payload.id ? action.payload : item
            );
        },
        clearCart(state, action) {
            state.products = []; 
        },
    },
});

export const { addToCart, removeFromCart, updateProduct, clearCart } = productsInCartSlice.actions;
export default productsInCartSlice.reducer;
