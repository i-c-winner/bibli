import React, { useState, useEffect } from "react";
import Item from "./__item/Item";
import { list } from "../../constans/constans";
import { Card } from "antd";
import { Typography, Space } from "antd";
const { Text, Link } = Typography;
const { Title } = Typography;
import { Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import "../card/card.css";
import "./main.css";
import apiRequest from "../../utils/apiRequest";

const { Meta } = Card;

function Main(props) {  
  const [data, setData] = useState({});
  useEffect(() => {
    apiRequest().then((resultat) => {
      setData(resultat);
    });
  }, []);

  return (
    <div className="main">
      {Object.keys(data).map(function (element) {
        return (
          <div className=" main__box" key={element}>
            <Title level={2}>
              <Text code>{element}</Text>
            </Title>

            <div className="main__cards">
              {Object.keys(data[element]).map(function (elem, i) {
                return (
                  <>                           
                        {i <50? (<a target="_blank" href={data[element][elem].url}>
                          <Card
                            className="main__card"
                            key={elem}
                            style={{ width: 200 }}
                            hoverable
                            cover={
                              <img 
                                className="card__image"
                                alt="example"
                                src={
                                    data[element][elem].img_url
                                }
                              />
                            }
                          > <p className="card__title">{elem}</p>
                          </Card></a>
                        ):<></>} 
                            </>
                )
              })}
            </div>           
            <Button className="main__butoon" type="primary" danger>
              Больше &#8230;
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
