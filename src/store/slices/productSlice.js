import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'


export const getLipsData = createAsyncThunk("lipsData", async () => {
    const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
    const lipsdata = response.json();
    return lipsdata
})

export const getEyesData = createAsyncThunk("eyesData", async () => {
    const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=l'oreal")
    const eyesData = response.json()
    return eyesData
})

export const getBlushData = createAsyncThunk("brushesData", async () => {
    const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl")
    const blushData = response.json()
    return blushData
})

export const getFoundationData = createAsyncThunk("foundationData", async () => {
    const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=e.l.f.")
    const foundationData = response.json()
    return foundationData
})


const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        eyesProduct: [],
        blushProduct: [],
        foundationProducts: [],
        cartProducts: JSON.parse(localStorage.getItem("cartProducts")) || [],
        bookMarkedProducts: JSON.parse(localStorage.getItem("bookmarkedProduct")) || [],
        loading: false,
        error: null
    },


    reducers: {
        addtoCart: (state, action) => {
            const newItem = {
                ...action.payload,
                quantity: 1, // Initialize quantity to 1
                totalValue: 0
            };
            state.cartProducts.push(newItem);
            
            localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));

        },

        removefromCart: (state, action) => {
            state.cartProducts = state.cartProducts.filter((item) => item.id !== action.payload.id)
            localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts))
        },

        incrementCartCount: (state, action) => {
            const productId = action.payload.id;
            const product = state.cartProducts.find(item => item.id === productId);
            if (product) {
                product.quantity += 1;
                product.totalValue = ((product.price) * product.quantity)
                localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
            }

        },

        decrementCartCount: (state, action) => {
            const productId = action.payload.id
            // console.log(productId)
            const product = state.cartProducts.find((item) => item.id === productId)
            if (product.quantity > 1) {
                product.quantity -= 1
                product.totalValue = ((product.price) * product.quantity)
                localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));

            } else {
                state.cartProducts = state.cartProducts.filter((item) => item.id !== productId)
                localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));

            }
        },
        addtoFavourites: (state, action) => {
            // console.log(action.payload)
            state.bookMarkedProducts.push(action.payload)
            localStorage.setItem("bookmarkedProduct", JSON.stringify(state.bookMarkedProducts))
        },
        removefromFavourites: (state, action) => {

        },

        // TotalCartValue: (state, action) => {
        //     const cartTotal = action.payload
        //     // console.log(cartTotal)
        //     console.log(action.payload.id)
        // }
    },

    extraReducers: (builder) => {

        //extrareducer for lipsData
        builder.addCase(getLipsData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getLipsData.fulfilled, (state, action) => {
            state.products = action.payload
        });
        builder.addCase(getLipsData.rejected, (state) => {
            state.loading = false;
        });

        //extrareducer for eyesData
        builder.addCase(getEyesData.pending, (state) => {
            state.loading = true;

        });
        builder.addCase(getEyesData.fulfilled, (state, action) => {
            state.eyesProduct = action.payload
        });
        builder.addCase(getEyesData.rejected, (state) => {
            state.loading = false;
        });

        //extrareducer for blushData
        builder.addCase(getBlushData.pending, (state) => {
            state.loading = true;

        });
        builder.addCase(getBlushData.fulfilled, (state, action) => {
            state.blushProduct = action.payload
        });
        builder.addCase(getBlushData.rejected, (state) => {
            state.loading = false;
        });

        // extraReducer for foundationData
        builder.addCase(getFoundationData.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getFoundationData.fulfilled, (state, action) => {
            state.foundationProducts = action.payload

        });
        builder.addCase(getFoundationData.rejected, (state) => {
            state.loading = false;
        })

    }

})

export const { addtoCart, removefromCart, incrementCartCount, decrementCartCount, addtoFavourites, removefromFavourites } = productSlice.actions

export default productSlice.reducer