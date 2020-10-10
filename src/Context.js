import React,{useState} from "react";

const Context = React.createContext();

function ContextProvider(props) {
    const [cart, setCart] = useState([]);
    
    function addToCart(item) {
        const updatedCart = [];
        updatedCart.push(item);
        setCart(updatedCart);
    }
    //console.log(cart);
    
    return (
        <Context.Provider value={{cart, addToCart}}>
            {props.children}
        </Context.Provider>
    );
}

export {ContextProvider, Context};