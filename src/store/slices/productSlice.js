import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const getLipsData = createAsyncThunk("lipsData",async ()=>{
    const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick");
    const lipsdata = response.json();
    return lipsdata
})

export const getEyesData = createAsyncThunk("eyesData", async()=> {
    const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow")
    const eyesData = response.json()
    return eyesData
})

export const getBlushData = createAsyncThunk( "brushesData", async()=>{
    const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush")
    const blushData = response.json()
    return blushData
})


const productSlice = createSlice({
    name: "products",
    initialState:{
            products:[],
            eyesProduct:[],
            blushProduct:[],
            value: 0,
            loading: false,
            error: null
    },
    reducers:{
        addtoCart:(state, action)=>{

        },
        removefromCart:(state, action)=>{

        },
        incrementCartCount:(state, action)=>{

        },
        decrementCartCount:(state, action)=>{

        },
        addtoFavourites:(state, action)=>{

        }, 
        removefromFavourites:(state, action)=>{

        }
    },
    extraReducers:{

        //extrareducer for lipsData
        [getLipsData.pending]: (state)=>{
            state.loading= true;

        },
        [getLipsData.fulfilled]: (state, action)=>{
            state.products = action.payload
        },
        [getLipsData.rejected]: (state, action)=>{
            state.loading= false;
            state.error = action.payload
        },

        //extrareducer for eyesData
        [getEyesData.pending]:(state)=>{
            state.loading = true;
        },
        [getEyesData.fulfilled]: (state, action)=>{
            state.eyesProduct = action.payload
        },
        [getEyesData.rejected]:(state)=>{
            state.loading = true;
        },

        //extrareducer for blushData
        [getBlushData.pending]:(state)=>{
            state.loading=true;
        },
        [getBlushData.fulfilled]:(state, action)=>{
            state.blushProduct = action.payload
        },
        [getBlushData.rejected]:(state)=>{
            state.rejected = true
        }

    }

})

export const {addtoCart, removefromCart, incrementCartCount, decrementCartCount, addtoFavourites, removefromFavourites} = productSlice.actions

export default productSlice.reducer