import { Alert } from "react-native";
import { CART_ACTIONS } from "../actions/cartActions";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const productToAdd = action.payLoad;
      let { cart } = state;
      if (cart && Array.isArray(cart)) {
        console.log(Array.isArray(cart));
        console.log("inside add to cart", productToAdd);
        console.log(cart);
        const foundIndex = cart.findIndex(
          (item) => item.id === productToAdd.id
        );
        console.log(foundIndex);
        if (foundIndex === -1) {
          //-----------------------//
          console.log("Currently cart length: ", cart.length + 1);
          cart.push(productToAdd);
        }
      } else {
        cart = [productToAdd];
      }
      return { ...state, cart };
    }
    case CART_ACTIONS.REMOVE_FROM_CART: {
      const productId = action.payLoad;
      let { cart } = state;
      if (cart && Array.isArray(cart)) {
        const foundIndex = cart.findIndex((item) => item.id === productId);
        if (foundIndex >= 0) {
          cart = cart.filter((item) => item.id !== productId);
        }
      }
      return { ...state, cart };
    }
    case CART_ACTIONS.REMOVE_ALL: {
      let { cart } = state;
      if (cart.length > 0) {
        cart = [];
      }
      return { ...state, cart };
    }

    default:
      Alert.alert("Invalid action");
      return state;
  }
};

