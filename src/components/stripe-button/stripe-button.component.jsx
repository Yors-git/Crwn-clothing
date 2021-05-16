import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51IrqcMHSWd0lPLcP4wphTvgAkjMBhS9y8E00LQh1OuKPDyVNX0VQ8Vlgcpq1vOlueIWiDaIoeDQAGgw45jvVWDE1003FsLypbW';

	const onToken = token => {
		console.log(token);
		alert('Payment successful');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton
