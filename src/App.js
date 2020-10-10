import React from "react";
import RecipesList from "./components/RecipesList";
import {Switch, Route, Link} from "react-router-dom";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Payment from "./components/Payment";
import PaymentGateway from "./components/PaymentGateway";

function App() {
    return (
        <div>
            <Header />

            <Switch>
                <Route exact path="/">
                    <RecipesList />   
                </Route>     
                
                <Route path="/checkout">
                    <Checkout />
                </Route>
                
                <Route path="/payment">
                    <Payment />
                </Route>
                
                <Route path="/paymentGateway">
                    <PaymentGateway />
                </Route>
                
                <Route path="/success">
                    <h2> Success! Order Placed Successfully. </h2>
                    <Link to="/"> <button> Back to Home </button> </Link>
                </Route>
                
                <Route path="/failed">
                    <h2> Payment Failed. Please try again after some time. </h2>
                    <Link to="/"> <button> Back to Home </button> </Link>
                </Route>
            </Switch>
        </div>
    );    
}

export default App;