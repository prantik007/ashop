import React from "react";
import "./Product.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Product = (props) => {
const {id, name, rating, price, imageURL} = props.product;


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
        <button className="button">Add to Basket</button>
      </CardActions>
    </Card>
  );
};

export default Product;
