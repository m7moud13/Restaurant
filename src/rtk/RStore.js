    import {
    configureStore,
    createAsyncThunk,
    createSlice,
    } from "@reduxjs/toolkit";
    import { Store } from "../Foodstore/Store";

    export const featchStore = createAsyncThunk(
    "FoodSlice/featchStore",
    async () => {
        const Food = await fetch(Store);
        const date = Food.json();
        return date;
    }
    );

    export const Foodslice = createSlice({
    initialState: [],
    name: "FoodSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(featchStore.fulfilled, (state, action) => {
        return action.payload;
        });
    },
    });

    export const CartSlice = createSlice({
    initialState: [],
    name: "CartSlice",
    reducers: {
        Add: (state, action) => {
        state.push(action.payload);
        },
        removerpoduct: (state, action) => {
        return state.filter((product) => product.id !== action.payload.id);
        },
        Clear: (state, action) => {
            return [];
        },
    },
    });

    export const TheStore = configureStore({
        reducer: {
        Cart: CartSlice.reducer,
        Food: Foodslice.reducer,
    },
    });
    export const { Add, removerpoduct, Clear } = CartSlice.actions;
