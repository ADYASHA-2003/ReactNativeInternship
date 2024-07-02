import { Alert } from "react-native";
import { WISHLIST_ACTIONS } from "../actions/wishlistAction";

export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case WISHLIST_ACTIONS.ADD_TO_WISHLIST: {
      const productToAdd = action.payload;
      let { wishlist } = state;
      if (wishlist && Array.isArray(wishlist)) {
        const foundIndex = wishlist.findIndex(
          (item) => item.id === productToAdd.id
        );
        if (foundIndex === -1) {
          wishlist.push(productToAdd);
        }
      } else {
        wishlist = [productToAdd];
      }
      return { ...state, wishlist };
    }
    case WISHLIST_ACTIONS.REMOVE_FROM_WISHLIST: {
      const productId = action.payload;
      let { wishlist } = state;
      if (wishlist && Array.isArray(wishlist)) {
        wishlist = wishlist.filter((item) => item.id !== productId);
      }
      return { ...state, wishlist };
    }
    case WISHLIST_ACTIONS.REMOVE_ALL_FROM_WISHLIST: {
      return { ...state, wishlist: [] };
    }
    default:
      Alert.alert("Invalid action");
      return state;
  }
};
