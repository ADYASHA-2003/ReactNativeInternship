import { useReducer,useEffect } from "react";
import { initialCartState } from "../contexts/cartContext";
import { cartReducer } from "../reducers/cartReducer";

//custom hook
export default useCart=()=>{
    const [cart, dispatch] = useReducer(cartReducer, initialCartState);
    useEffect(()=>{

    },[])

    return [cart,dispatch]
}