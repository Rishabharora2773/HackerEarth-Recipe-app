import React,{useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../Context";

function Recipe(props) {
    const {addToCart} = useContext(Context);
    return (
        <div className="recipe-card">
            <Link to="/checkout">
                <img 
                    className="recipe-card-image" 
                    height="200" 
                    width="200" 
                    src={props.item.image} 
                    onClick={() => addToCart(props.item)}
                    alt="card-recipe"
                />
            </Link>
            <h3> name: {props.item.name}</h3>
            <h3> price: {props.item.price}$</h3>
        </div>
    );    
}

export default Recipe;