import React, { Component } from "react";
import Header from './header/Header';
import Card from './main/Card';

import './App.css';
import * as cards from '../constans/constans';

class App extends Component {
    render() {
        return (
            <div className="home">
                <div className="container">
                    <Header />
                    {
                       Object.keys(cards.list).map(function(element){
                            return (
                               
                              <Card type={element} key={element} />  
                            )
                        })
                    }
               
                   
                </div>
            </div>
        );
    }
}

export default App;