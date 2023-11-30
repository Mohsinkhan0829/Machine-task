import { Box, Button, LinearProgress} from "@mui/material";
import { FaRupeeSign } from "react-icons/fa";
import React, { useEffect } from "react";
import { RiHome3Line } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CoinsInfo } from "../Features/CoinSlice";
const CoinDetails = () => {
   //dispatching action by using Usedispatch hooks.
  const dispatch = useDispatch();
  //using useParams hook for getting data by fetching id.
  const { Id } = useParams();
  const { CoinDetails, isLoading, isError } = useSelector(
    (state) => state.coins);
//using useEffect hooks for rendering data from coinsInfo and passing parameter for checking id only 
  useEffect(() => {
    dispatch(CoinsInfo(Id));
  }, [Id]);

  const handleClick =()=>{}  
  if (isLoading || CoinDetails === null) {
    return (
      <Box>
      <LinearProgress />
    </Box>
    );
  }

  if (isError) {
    return (
      <div className="containe text-centerr">
        <h1>SomeThing Went Wrong!</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container my-5">
        <div className="container d-flex justify-content-between">
          <h3>{CoinDetails.name}</h3>
          <Link to="/">
          <RiHome3Line 
              style={{ fontSize: "30px", color:"black", cursor: "pointer" }}
            />
          </Link>
           
        </div>

        <div className="container" style={{display:"flex",alignItems:"center"}}>
          <img style={{height:"250px" , width:"250px"}}
          id="CoinDetailsImage" src={CoinDetails.image.large} 
          className="container my-3 rounded-5"
           />
        </div>
        <div className="container my-5 d-flex justify-content-between">
          <Button variant="contained" className="me-2">

             <FaRupeeSign />  {CoinDetails.market_data.current_price.inr}
          </Button>
          <Button variant="contained" color="warning" >
            Market-Cap:<FaRupeeSign /> {CoinDetails.market_data.market_cap.inr}
          </Button>
        </div>
        <p>{CoinDetails.description.en}</p>
      </div>
    </>
  );
};

export default CoinDetails;
