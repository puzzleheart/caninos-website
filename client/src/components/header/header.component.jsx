import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import { auth } from '../../firebase/firebase.utils';
import Logo from '../../assets/logo.png';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

// import './header.styles.scss';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <img src={Logo} alt='Logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>LOJA</OptionLink>
      <OptionLink to='/contact'>CONTATO</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>
          SAIR
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>ENTRAR</OptionLink>
      )}
      <CartIcon />
      {hidden ? null : <CartDropdown />}
    </OptionsContainer>
  </HeaderContainer>
);

// createStructuredSelector gets the state for us and applies it to the selectors
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
