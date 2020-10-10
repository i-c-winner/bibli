import React, {useState} from 'react';
import { Button } from 'antd';
const state= true;

function HeaderLogin (props){   
    return (
  <div className="header__login">
      {state ?
      <Button type="primary" danger>
     Выход
    </Button>
    :
     <Button type="primary" danger>
    Вход
   </Button> 
    }   
    {state ?
      <Button type="primary" danger>
    Личный кабинет
    </Button>
    :
     <Button type="primary" danger>
    Регистрация
   </Button> 
    }       
  </div>  
    )
}
export default HeaderLogin;