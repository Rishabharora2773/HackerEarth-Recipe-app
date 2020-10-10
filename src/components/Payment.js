import React from "react";
import {Link} from "react-router-dom";

function Payment() {
    return (
        <form action="/paymentGateway">
        <div className="row">
            <h3 className="payment-title"> Payment</h3>
            </div>
            <label htmlFor="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <label htmlFor="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label htmlFor="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>

            <div className="row">
              <div className="col-50">
                <label htmlFor="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>
              <div className="col-50">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
            </div>
        <Link to="/paymentGateway" ><button className="btn"> Continue to checkout </button> </Link>
      </form>
    );    
}

export default Payment;