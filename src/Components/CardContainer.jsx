import React, { useEffect, useState } from "react";
import CoinCard from "./CoinCard";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllCoins, } from "../Features/CoinSlice";
import { Box, Button, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";

const CardContainer = () => {
  //dispatching action by using Usedispatch hooks.
  const dispatch = useDispatch();
  //gettting states form redux by using UseSelector hook
    const { isLoading, isError, AllCryptoCoins } = useSelector(
    (state) => state.coins
  );
  //createing a state name is cryptos and assigning default values is allCryptocoins state data.
  const [cryptos , setCryptos]=useState(AllCryptoCoins);
  //creating a state for filter data by price 
  const [ filterprice , setFilterPrice]=useState("");
  //craeting a state for search data by searching crypto name in searchBar
  const [search , setSearch] =useState("");
  //using useState for rendering data form Api when components Mount
  useEffect(()=>{
    dispatch(FetchAllCoins())
},[dispatch]);

//create a function for handeling filter section by using price.
const handleFilterChange = (e)=>{
  const selectedPrice = e.target.value;
  setFilterPrice(selectedPrice);
//using condition check where if selected price is not selected and selected price value is equal to 0 than return allthe data,
  if(selectedPrice === "" || selectedPrice === 0){
    return
    setCryptos(AllCryptoCoins);
    //if selected price selected and than this condition will run and showing data regarding below condition
  }else{
    const filtered = AllCryptoCoins.filter((coin)=> {
      if (selectedPrice === 100) {
        return coin.current_price
        <= 100;
      } else if (selectedPrice === 500) {
        return coin.current_price
        > 100 && coin.current_price <= 500;
      } else if (selectedPrice === 1000) {
        return coin.current_price
        > 500 && coin.current_price <= 1000;
      }else if(selectedPrice === 1001){
          return coin.current_price > 1001
      }
      return true;
    });
    setCryptos(filtered)
  }
}
//create a function for handeling Search input
const handleSearchInput = (e)=>{
e.preventDefault();
//i use filter method for filter data by coin name if coin.name is include in our data than return those coins only.
const searchResult = AllCryptoCoins.filter((coin)=>
  coin.name.toLowerCase().includes(search.toLowerCase()));
setCryptos(searchResult);
setSearch("")
}

//using check condition when response in pending status than return this. 

  if (isLoading) {
    return (
      <Box
        sx={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
//using check condition when response in error status than return this. 

  if (isError) {
    return (
      <div className="container text-center">
        <h1>SomeThing Went Wrong!</h1>
      </div>
    );
  }
//using check condition when state is rqual to 0 and  error status than return this. 

  if (!AllCryptoCoins || AllCryptoCoins.length === 0) {
    return (
      
        <Typography
          variant="h3"
          align="center"
          color={"error"}
        >
          server error!
        </Typography>
    );
  }

  return (
    <>
    <div className="container my-4 d-flex justify-content-between">
    <form className='d-flex' role='search'
    style={{height:"50px"}}
     onSubmit={handleSearchInput}>
       <input className='form-control me-2' 
       type="text" 
       placeholder='Search Coin here!'
       value={search}
       onChange={(e)=>setSearch(e.target.value)}
       required
       />
        <Button variant='contained' 
        sx={{backgroundColor:"orange"}}
        type='submit'
        >Search</Button>
       </form>
  
    <FormControl sx={{width:'100px'}}>
  <InputLabel >Price</InputLabel>
  <Select
    id="demo-simple-select"
    label="price"
    value={filterprice}
    onChange={handleFilterChange}

  >
    <MenuItem value={100}>100</MenuItem>
    <MenuItem value={500}>100-500</MenuItem>
    <MenuItem value={1000}>500-1000</MenuItem>
    <MenuItem value={1001}>over 1000</MenuItem>
  </Select>
</FormControl>
</div>


    <div className="container">
      <Grid container spacing={4} sx={{ marginTop: "30px" }}>
        {cryptos.map((coin) => {
          return <CoinCard 
          key={coin.id} 
          coin={coin}
           />;
        })}
      </Grid>
    </div>
    </>

  );
};

export default CardContainer;
