import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = "pk_test_51HlOqfIUFOPPi1GDDj4XM6WgKY7Cj3HSYHEPdcM9U8IXw2BkSiwt7Mk3oGFuHrJS3wVVkwJ3MvmBDd2X4qxrhRCn00LQEwH7a4";

    const onToken = token =>{
        axios({
            url:'payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment is successful!!')
        }).catch(error => {
            console.log('paymanet error:',JSON.parse(error));
            alert('There was an issue with your payment, please make sure that you use the provided credit card')
        })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Duniya'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;