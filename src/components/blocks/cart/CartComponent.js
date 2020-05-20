import React, { useEffect, useState, Fragment } from 'react';
import { CartItems } from "./CartItems";
import { Row, Col } from "antd";

export const CartComponent = () => {
    const [totalPrice, setTotalPrice] = useState(0)

    const onUpdateTotalPrice = (cartItems) =>  {
        setTotalPrice(cartItems.reduce((total, curtItem) => {
            return total + curtItem.price * curtItem.count
        }, 0))
    }

    return <Fragment>
        <CartItems onUpdateTotalPrice = {onUpdateTotalPrice} />
        {/* ToDo:handle these styles with styled components */}
        <Row style={{paddingTop: "10px", backgroundColor: "white", fontWeight: "bolder", padding: "10px"}}>
            <Col offset={21} span={3}>
                Grand total: {Math.round(totalPrice * 100) / 100} $
            </Col>
        </Row>
    </Fragment>
}
