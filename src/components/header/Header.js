import React, { useState, useEffect } from 'react';


function Header(props) {
    return (
        <div className="header">

            <div className="row d-flex justify-content-between">
                <h1 className="header__title">Библиотека знаний</h1>
                <div className="row">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle header__btn"
                            type="button" id="dropdownMenu1" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Фронтенд
        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <a className="dropdown-item" href="#!">HTML</a>
                            <a className="dropdown-item" href="#!">JavaScript</a>
                            <a className="dropdown-item" href="#!">Фреймворки</a>
                            <a className="dropdown-item" href="#!">Препроцессоры</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle header__btn"
                            type="button" id="dropdownMenu1" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Бэкенд
        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <a className="dropdown-item" href="#!">Python</a>
                            <a className="dropdown-item" href="#!">SQL</a>
                            <a className="dropdown-item" href="#!">Flask</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle header__btn"
                            type="button" id="dropdownMenu1" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Другое
        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <a className="dropdown-item" href="#!">Git</a>
                            <a className="dropdown-item" href="#!">NodeJS</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="jumbotron">
                <h2 className="display-4">О чем эта библиотека</h2>
                <p className="lead">Это просто описать что за сайт, для чего он сделан, как им пользоваться.</p>
                <hr className="my-4" />
                <p>тут можно что то еще дописать. По кнопке можно вывести например модалку,
                    с описанием кто делал, как делал ну и т.д
                </p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Узнать больше</a> 
                    
                </p>
            </div>

        </div>
    )
}

export default Header;