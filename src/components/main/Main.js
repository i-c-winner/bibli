import React from 'react';
import Item from './__item/Item';
import { list } from '../../constans/constans';
import { Card } from 'antd';
import { Typography, Space } from 'antd';
const { Text, Link } = Typography;
const { Title } = Typography;
import { Button, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import '../card/card.css'
import './main.css'

const { Meta } = Card;

function Main(props) {

    return (
        <div className="main">
            { Object.keys(list).map(function (element) {
                return (
                    <div className=" main__box" key={element}>
                        <Title level={2}><Text code>{element}</Text></Title>
                        <div className="main__cards">
                            {list[element].map(function (elem, i) {                              
                                return (<>
                                     {i<5 ?
                                    <Card className="main__card"
                                    key={elem}
                                        style={{ width: 200 }}
                                        hoverable
                                        cover={<img className="card__image" alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >
                                       
                                        <Meta key={elem} className="card__title" title={list[element][i][0].title} description="www.instagram.com" />
                                        {/* <p className="card__title">{list[element][i][0].title} </p>
<p className="card__sub-title">{list[element][i][2].link} </p> */}
                                       
                            
                                    </Card>:<>{console.log('ok')}</> }</>
                                )
                            }
                            )
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Main;