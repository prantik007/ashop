import React from "react";
import "./Checkout.css";
import adImage from "../../assets/pictures/ad.png";
import CheckoutProducts from "../CheckoutProducts/CheckoutProducts";
import { ProductList } from "../../assets/Data/ProductList.js";
import { useStateValue } from "../../State/StateProvider";
import { getBasketTotal } from "../../State/reducer";
const Checkout = () => {
 const [{basket},dispatch] = useStateValue();

const basketLength=basket?.length;
const basketTotal=getBasketTotal(basket);
 console.log(basket)
  return (
    <div className="checkout__container">
      <div className="checkout__left">
        <img src={adImage} alt="ad" className="checkout__ad" />
        <div className="checkout__title">
          <h2>Your Shopping Basket</h2>
        </div>
        {basket.map((product) => (
          <CheckoutProducts key={product.id} item={product} />
        ))}
      </div>
      <div className="checkout__right">
        <h5>Subtotal ({basketLength} items) : ${basketTotal}</h5>
        <div>
          <input type="checkbox" id="isGift" />
          <label htmlFor="isGift"> &nbsp; This order contains a gift</label>
        </div>
        <br/>
        <div>
        <button className="button">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
