import { Alert } from "react-native";

export const CART_ACTIONS = Object.freeze({
  REMOVE_FROM_CART: 0,
  ADD_TO_CART: 1,
  REMOVE_ALL: 2
});

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const productToAdd = action.payLoad;
      let { cart } = state;
      if (cart && Array.isArray(cart)) {
        cart.push(productToAdd);
      } else {
        cart = [productToAdd];
      }
      return { ...state, cart };
    }
    case CART_ACTIONS.REMOVE_FROM_CART: {
      const productId = action.payLoad;
      let { cart } = state;
      if (cart && Array.isArray(cart)) {
        const foundIndex = cart.findIndex(
          (item) => item.productId === productId
        );
        if (foundIndex >= 0) {
          cart = cart.filter((item) => item.productId !== productId);
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