import React from "react";
import Product from "../Product/Product";
import "./CheckoutProducts.css";


import { useStateValue } from "../../State/StateProvider";

const CheckoutProducts = (props) => {
  const { id, name, rating, price, imageURL, qty } = props.item;

  const [state, dispatch] = useStateValue();

  const handleRemoveFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: id,
        name: name,
        imageURL: imageURL,
        price: price,
        qty: 1,
      },
    });
  };

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        imageURL: imageURL,
        price: price,
        qty: 1,
      },
    });

    
  };

  return (
    <div>
      {
        <div className="basket__item">
          <div className="basket__itemPic">
            <img src={imageURL} alt="" className="" />
          </div>

          <div className="basket__itemDetails">
            <h4>{name}</h4>
            <div className="basket__itemPriceAndButton">
              <div style={{ fontWeight: "bold", padding: "5px" }}>
                <button className="button" onClick={handleAddToCart} style={{
                    fontWeight: "bold",
                    padding: "5px",
                    margin: "5px",
                    width: "30px",
                  }}>
                  {" "}
                  +{" "}
                </button>
                <button
                  className="button"
                  onClick={handleRemoveFromBasket}
                  style={{
                    fontWeight: "bold",
                    padding: "5px",
                    margin: "5px",
                    width: "30px",
                  }}
                >
                  {" "}
                  -{" "}
                </button>
              </div>

              <h4>
                {qty} x $ {price.toFixed(2)}{" "}
              </h4>
              <span>
                {" "}
                <button onClick={handleRemoveFromBasket} className="button">
                  Remove From Basket
                </button>
              </span>
            </div>
            
          </div>
        </div>
      }
      <hr />
      
    </div>
  );
};

export default CheckoutProducts;
