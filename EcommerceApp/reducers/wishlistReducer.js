import { Alert } from "react-native";
import { WISHLIST_ACTIONS } from "../actions/wishlistAction";

export const wishlistReducer = (wishlist, action) => {
  switch (action.type) {
    case WISHLIST_ACTIONS.ADD_TO_WISHLIST: {
      const productToAdd = action.payload;
      // let { wishlist } = state;
      if (wishlist && Array.isArray(wishlist)) {
        const foundIndex = wishlist.findIndex(
          (item) => item.id === productToAdd.id
        );
        if (foundIndex === -1) {
          // wishlist.push(productToAdd);
          return [...wishlist, productToAdd]
        }
      } else {
        // wishlist = [productToAdd];
        return [productToAdd]
      }
      return [...wishlist];
    }
    case WISHLIST_ACTIONS.REMOVE_FROM_WISHLIST: {
      const productId = action.payload;
      if (wishlist && Array.isArray(wishlist)) {
        const foundIndex = wishlist.findIndex((item) => item.id === productId);
        if (foundIndex >= 0) {
          wishlist = wishlist.filter((item) => item.id !== productId);
        }
      }
      return [...wishlist];
    }
    case WISHLIST_ACTIONS.REMOVE_ALL_FROM_WISHLIST: {
      // return { ...state, wishlist: [] };
      if (wishlist.length > 0) {
        wishlist = [];
      }
      return [ ...wishlist ];
    }
    default:
      Alert.alert("Invalid action");
      return wishlist;
  }
};
