import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/logo.png';

const StripeCheckoutButton = ({price}) => {
  const priceInCentavos = price * 100;
  const publishableKey = 'pk_test_djWJw8V5SZdEkdS4fQW0myzw00IQc8bK42';

  // Use the token to process the payment and create the charge
  const onToken = token => {
    console.log(token);
    alert('Pagamento feito com sucesso')
  }

  return (
    <StripeCheckout 
    label='Pague agora' 
    currency='BRL' 
    name='Caniinos Brancos LTDA' 
    billingAddress 
    shippingAddress 
    image={Logo} 
    description={`Seu preço total é R$${price}`}
    amount={priceInCentavos}
    panelLabel='Pague agora'
    token={onToken}
    stripeKey={publishableKey}/>
  )
};

export default StripeCheckoutButton; 