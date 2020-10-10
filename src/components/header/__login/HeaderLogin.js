import React, {useState} from 'react';
import { Button } from 'antd';
const state= true;

function HeaderLogin (props){   
    return (
  <div className="header__login">
      {state ?
      <Button className="header__login-link" type="primary" danger>
     Выход
    </Button>
    :
     <Button className="header__login-link" type="primary" danger>
    Вход
   </Button> 
    }   
    {state ?
      <Button className="header__login-link" type="primary" danger>
    Личный кабинет
    </Button>
    :
     <Button className="header__login-link"  type="primary" danger>
    Регистрация
   </Button> 
    }       
  </div>  
    )
}
export default HeaderLogin;