import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsPage2 from "../screens/ProductsPage2";
import ProductDetailsPage from "../screens/ProductDetailsPage";

const ProductsStack = createNativeStackNavigator();

const ProductsStackScreen = () => {
  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen
        options={{ headerShown: false }}
        name="AllProducts"
        component={ProductsPage2}
      />
      <ProductsStack.Screen
        options={{headerTitle:'',headerTransparent:true}}
        name="ProductDetailsPage"
        component={ProductDetailsPage}
      />
    </ProductsStack.Navigator>
  );
};

export default ProductsStackScreen;
