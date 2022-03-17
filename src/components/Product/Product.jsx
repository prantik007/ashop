import React from "react";
import "./Product.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import { useStateValue } from "../../State/StateProvider";

const Product = (props) => {
const {id, name, rating, price, imageURL} = props.product;

const [state,dispatch] = useStateValue();
const handleAddToBasket =()=>{
  dispatch({
    type:"ADD_TO_BASKET",
    item:{
      id:id,
      name:name,
      imageURL:imageURL,
      price:price,
      qty:1
    }
  })
}


  return (
    <Card key={id} className="product">
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>{Array(rating).fill('⭐')}</p>
        </Typography>
        <Typography variant="h6" color="text.secondary">
          <small>$</small>
          <strong>{price.toFixed(2)}</strong>
        </Typography>
      </CardContent>

      <CardMedia component="img" height="200px" image={imageURL} alt={name} />

      <CardActions>
        <button onClick={handleAddToBasket} className="button">Add to Basket</button>
      </CardActions>
    </Card>
  );
};

export default Product;
