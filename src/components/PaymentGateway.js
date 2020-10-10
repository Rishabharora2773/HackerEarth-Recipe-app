import React,{useState} from "react";
import {useHistory} from "react-router-dom";

function PaymentGateway(props) {
    const [otp, setOtp] = useState("");
    const history = useHistory();
    
    function handleChange(event) {
        setOtp(event.target.value);
    }
    
    function handleSubmit() {
        console.log(otp);
        if(otp === "123456") {
            history.push('/success');
        } else{
            history.push('/failed');
        }
    }
    
    return (
        <div className="payment-gateway">
            <h3> Enter OTP: </h3>
            <textarea id="w3review" name="w3review" rows="1" cols="6" placeholder="OTP" value={otp}onChange={handleChange}> </textarea>
            <button className="submitButton" onClick={handleSubmit}> Submit </button>
        </div>
    );    
}

export default PaymentGateway;