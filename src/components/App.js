import React, { Component, useState, useEffect} from "react";
import Header from './header/Header';
import Main from './main/Main';
import apiRequest from '../utils/apiRequest';



class App extends Component {
   
    render() {
        return (<div className='page'>
            <Header />
            <Main />
        </div>
        );
    }
}

export default App;