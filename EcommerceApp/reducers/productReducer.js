import { Alert } from "react-native";
import { PRODUCT_ACTIONS } from "../actions/productActions";

//state - existing value - array
//payload - new state value / current
export const productReducer = (state, action) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.SET_ALL_PRODUCTS: {
        // return action.payoad
        return [...state, ...action.payload]
    }
    default:
      Alert.alert("Invalid action");
      return state;
  }
};
