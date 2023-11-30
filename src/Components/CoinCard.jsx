import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";

const CoinCard = ({ coin  }) => {
    
  return (
    //create a CoinCard components by using Material and getting data from using props.
    <>
      <Grid item xs={12} sm={6} lg={4}>
        <Card sx={{ maxWidth: 305}}>
          <CardActionArea>
            <CardMedia component="img"  image={coin.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {coin.symbol}
              </Typography>
              <Typography gutterBottom variant="h7" component="div">
              <FaRupeeSign /> {coin.current_price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {coin.name}
                <Link
                  to={`/coin/${coin.id}`}
                  style={{ textDecoration: "none", color: "green" }}
                >
                  <Button variant="outLined">More Details...</Button>
                </Link>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default CoinCard;
