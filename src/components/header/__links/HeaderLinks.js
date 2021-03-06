import { Menu, Dropdown, Button } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from '../../main/Main';
import Frontend from '../../frontend/Frontend';

const otherLinks= (
  <Menu>
    <Menu.Item className="header__link">
   <p >Другое</p>
       
    </Menu.Item>
    
  </Menu>
);
const structureLinks= (
  <Menu>
    <Menu.Item className="header__link">
   <p>GIT</p>
       
    </Menu.Item>
    <Menu.Item className="header__link">
   <p>NodeJS</p>
       
    </Menu.Item> 
  </Menu>
);

const backendLinks= (
  <Menu>
    <Menu.Item>
   <p >Django</p>
       
    </Menu.Item>
    <Menu.Item>
   <p>Flask</p>
       
    </Menu.Item>
    <Menu.Item>
   <p>SQL</p>       
    </Menu.Item>
  </Menu>
);

const frontendLinks = (
  <Menu>
    <Menu.Item>
   <Link to="/HTML">HTML</Link>
       
    </Menu.Item>
    <Menu.Item>
   <p>Javascript</p>
       
    </Menu.Item>
    <Menu.Item>
   <p>Фреймворки</p>       
    </Menu.Item>
  </Menu>
);


  function HeaderLinks () {
    return (
  <div className="header__links">
 <Router>
    <Dropdown overlay={frontendLinks} placement="bottomLeft">
      <Button className="header__link">Фронтенд</Button>
    </Dropdown>
    <Dropdown overlay={backendLinks} placement="bottomCenter">
      <Button className="header__link">Бэкенд</Button>
    </Dropdown>
    <Dropdown overlay={structureLinks} placement="bottomRight">
      <Button className="header__link">Инфраструктура</Button>
    </Dropdown>
 
    <Dropdown overlay={otherLinks} placement="topLeft">
      <Button className="header__link">Разное</Button>
    </Dropdown>   

      <Switch>
  
  {/* Оба /roster и /roster/:number начинаются с /roster */}
  <Route path='/HTML' component={Frontend} />
  
</Switch>
</Router>
  </div>
    )
  }

  export default HeaderLinks;