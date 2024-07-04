import { createContext, useReducer ,useContext} from "react";
import { cartReducer } from "../reducers/cartReducer";
import {productReducer} from '../reducers/productReducer'
import {authUserReducer} from '../reducers/authUserReducer'
import { wishlistReducer } from "../reducers/wishlistReducer";

export const initialCartState = [];
export const initialProductState = []
export const initialWishlistState = []

export const initialUserState = {
    email: "",
    isLoggedIn: false
}

export const ShoppingContext = createContext({
    cart: initialCartState,
    products:initialProductState,
    authUser: initialUserState,
    wishlist: initialWishlistState
});


//dispatch - function that returns the state
export default ShoppingProvider = ({ children }) => {
    const [cart, cartDispatch] = useReducer(cartReducer,initialCartState);
    const [products, productsDispatch] = useReducer(productReducer, initialProductState );
    const [authUser, authUserDispatch] = useReducer(authUserReducer, initialUserState );
    const [wishlist, wishlistDispatch] = useReducer(wishlistReducer, initialWishlistState)


    return (<ShoppingContext.Provider value={{ cart,cartDispatch,authUserDispatch,productsDispatch,authUser,products,wishlist, wishlistDispatch }}>
        {children}
    </ShoppingContext.Provider>)
}
