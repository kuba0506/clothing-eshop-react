import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    // price must be in cents
    const priceForStripe = price * 100;
    const stripePublishableKey = 'pk_test_q94xWtkxoEiiWgGTV5ODQ1WX00erIOgxDX';
    // fake card info
    // 4242 4242 4242 4242 - exp 01/20 -cvc 123

    const onToken = token => {
        console.log({token});
        alert('Payment Successful');
        //backend work
    }; // onSuccess

    return (
        <StripeCheckout
            label="Pay Now"
            name="Clothing Eshop"
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total value is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={stripePublishableKey}
        />
    );
};

export default StripeButton;
