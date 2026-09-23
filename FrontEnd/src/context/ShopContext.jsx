import { createContext, useState } from "react";
import { products as localProducts } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    
    // Use local mock products array directly for static deployment
    const [products, setProducts] = useState(localProducts);

    const value = {
        products,
        currency,
        delivery_fee,
        setProducts
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;