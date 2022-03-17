export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) => {
  let total = basket?.reduce((totalPrice, item) => totalPrice + item.price*item.qty, 0);
  return total;
};
const reducer = (state, action) => {
  const productItem = action.item;

  switch (action.type) {
    case "ADD_TO_BASKET":
      if (state.basket.find((item) => item.id === action.item.id)) {
        return {
          basket: state.basket.map((item1) =>
            item1.id === productItem.id
              ? { ...item1, qty: item1.qty + 1 }
              : item1
          ),
        };
      } else
        return {
          ...state,
          basket: [...state.basket, action.item],
        };

    case "REMOVE_FROM_BASKET":
      console.log(state, action);
      //let newBasket = state.basket.filter((item) => item.id !== action.item.id);
     // return { basket: newBasket };

     const ifItemExists=state.basket.find((item)=>item.id===productItem.id);
console.log(ifItemExists)
     if(ifItemExists.qty===1){
       
       return {basket : state.basket.filter((item)=>item.id!==action.item.id)}
     }
     else{
       return {basket: state.basket.map((item)=>item.id===productItem.id?{...item,qty:item.qty-1}:item)}
     }


    default:
      return state;
  }
};

export default reducer;
