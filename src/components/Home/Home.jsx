import React from "react";
import "./Home.css";
import BannerCarousel from "./BannerCarousel";
import Product from "../Product/Product";
import { Grid } from "@mui/material";

import { ProductList } from "../../assets/Data/ProductList";

const Home = () => {
  console.log(ProductList[0])
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__carousel">
          <BannerCarousel />
        </div>

        <div className="grid__container">
          <Grid container rowSpacing={1.5} columnSpacing={1.5} width="100%">
            <Grid item xs={6}>
              <Product product={ProductList[0]}/>
            </Grid>
            <Grid item xs={6}>
              <Product product={ProductList[1]} />
            </Grid>
            <Grid item xs={4}>
              <Product product={ProductList[2]}/>
            </Grid>
            <Grid item xs={4}>
              <Product product={ProductList[3]}/>
            </Grid>
            <Grid item xs={4}>
              <Product product={ProductList[4]}/>
            </Grid>
            <Grid item xs={12}>
              <Product product={ProductList[5]} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
