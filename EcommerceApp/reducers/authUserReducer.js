import { Alert } from "react-native";
import { AUTH_USER_ACTIONS } from "../actions/authUserActions";

export const authUserReducer = (state, action) => {
  switch (action.type) {
    case AUTH_USER_ACTIONS.SET_ALL_USERS: {
      const authUser = {
        ...action?.payload,
        isLoggedIn:true
      }
      console.log('Setting auth user');
      return {...state, authUser}
        // return action.payoad
    }
    default:
      Alert.alert("Invalid action");
      return state;
  }
};
