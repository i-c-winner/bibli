import React from 'react';
import { Card } from 'antd';
import './main__item.css';



const { Meta } = Card;

function Item (props) {
    return (
  <Card className="main__item"

    style={{ width: 240, height: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title={props.title} description="www.instagram.com" />
  </Card>
    )
}

export default Item;