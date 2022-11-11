import { FaAcquisitionsIncorporated } from "react-icons/fa";
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";
import CartItem from "../components/Cart/CartItem";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id + color);
    console.log(tempItem);
    if (tempItem) {
      const tempCart = state.cart.map((item) => {
        if (item.id === id + color) {
          let newAmount = item.amount + amount;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        amount,
        name: product.name,
        color,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    let tempCart = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount = 0;
        if (value === "increase") {
          newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
        } else {
          newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
        }
        return { ...item, amount: newAmount };
      } else {
        return item;
      }
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === REMOVE_CART_ITEM) {
    let tempCart = state.cart.filter((i) => i.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === COUNT_CART_TOTALS) {
    let totalAmount = 0;
    let totalItems = 0;
    const whatever = state.cart.map((item) => {
      totalAmount += item.amount * item.price;
      totalItems += item.amount;
    });

    return {
      ...state,
      total_items: totalItems,
      total_amount: totalAmount,
    };
  }

  // return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
