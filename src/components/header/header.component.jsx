import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import Logo from '../../assets/logo.png';

import './header.styles.scss';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link to='/'>
      <div className='logo-container'>
        <img src={Logo} alt='Logo' />
      </div>
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'>SHOP</Link>
      <Link to='/contact' className='option'>CONTACT</Link>
      {
        currentUser?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link to='/signin' className='option'>SIGN IN</Link>
      }
    </div>
  </div>
);

export default Header;
