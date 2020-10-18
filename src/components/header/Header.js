import React from 'react';
import HeaderLinks from './__links/HeaderLinks';
import HeaderLogin from './__login/HeaderLogin';
import Main from '../main/Main'

import './header.css';

function Header(props) {
  return (
    <div className="header">
      <h1 className="header__logo">Библиотека знаний</h1>
      <HeaderLinks />
      <HeaderLogin />
      
    </div>
  )


}
export default Header;