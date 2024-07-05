import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ProductsPage2 from "../screens/ProductsPage2";
import MainHome from "../screens/MainHome";
import ProductsStackScreen from "./ProductsStackScreens";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
         <HomeStack.Screen
        options={{ headerShown: false }}
        name="Welcome"
        component={MainHome}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Product"
        component={ProductsStackScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
