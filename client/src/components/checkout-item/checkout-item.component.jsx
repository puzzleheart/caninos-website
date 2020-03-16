import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  removeItem,
  addItem
} from '../../redux/cart/cart.actions';

// import './checkout-item.styles.scss';
import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt='item' />
      </CheckoutImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>R${price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
