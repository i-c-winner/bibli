import React, { Component } from "react";
import Header from './header/Header';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="home">
                <div className="container">
                    <Header />
                </div>
            </div>
        );
    }
}

export default App;