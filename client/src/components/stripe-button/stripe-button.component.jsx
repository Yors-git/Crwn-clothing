import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51IrqcMHSWd0lPLcP4wphTvgAkjMBhS9y8E00LQh1OuKPDyVNX0VQ8Vlgcpq1vOlueIWiDaIoeDQAGgw45jvVWDE1003FsLypbW';

	const onToken = token => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token
			}
		})
			.then(response => {
				alert('Payment Successful!');
			})
			.catch(error => {
				console.log('Payment error ', JSON.parse(error));
				alert(
					'There was an issue with your payment, please check your credit card.'
				);
			});
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

export default StripeCheckoutButton;
