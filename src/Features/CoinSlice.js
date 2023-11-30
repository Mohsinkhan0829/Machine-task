import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllCoins, CoinDetailsData } from "./CoinServices";

const CoinSlice = createSlice({
    name:"coins",
    initialState:{
        AllCryptoCoins:[],
        CoinDetails:null,
        isLoading:false,
        isSuccess:false,
        isError:false,
    },
    reducers : {},
    extraReducers:(builder)=>{
        builder
        .addCase(CoinsInfo.pending , (state)=>{
            state.isLoading=true;
        })
        .addCase(CoinsInfo.fulfilled , (state ,action)=>{
            state.isLoading=false;
            state.isSuccess= true;
            state.CoinDetails = action.payload;
        })
        .addCase(CoinsInfo.rejected , (state)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
        })
        .addCase(FetchAllCoins.pending , (state)=>{
            state.isLoading=true;
        })
        .addCase(FetchAllCoins.fulfilled , (state ,action)=>{
            state.isLoading=false;
            state.isSuccess= true;
            state.AllCryptoCoins = action.payload;
        })
        .addCase(FetchAllCoins.rejected , (state)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
        })
        
      }
})

export const FetchAllCoins = createAsyncThunk("FETCH/AllCOINS" ,async()=>{
    try {
        return await AllCoins();
    } catch (error) {
        console.log(error)
    }
})
    
    export const CoinsInfo = createAsyncThunk("DETAILS/COINS" , async(id)=>{
        try {
            return await CoinDetailsData(id);
        } catch (error) {
            console.log(error)
        }
    });

   
    export default CoinSlice.reducer;

    
   
    