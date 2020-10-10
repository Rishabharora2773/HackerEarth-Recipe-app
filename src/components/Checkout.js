import React,{useContext} from "react";
import {Context} from "../Context";
import {Link} from "react-router-dom";

function Checkout() {
    const {cart} = useContext(Context);
    const item = cart[0];
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            <div className="cart-item">
                <img 
                src={item.image} 
                alt="cart-item"
                />
                <p> {item.price}$ </p>
            </div>
            <p className="total-cost">Total: {item.price}$</p>
            <div className="order-button">
                <Link to="/payment" > <button> Place Order </button> </Link>
            </div>
        </main>
    );
}
export default Checkout;