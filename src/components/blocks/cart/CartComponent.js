import React, { useState, Fragment } from "react"
import { CartItems } from "./CartItems"
import { Row, Col } from "antd"
import { CartFooterRow } from "./styles"

export const CartComponent = () => {
    const [totalPrice, setTotalPrice] = useState(0)

    const onUpdateTotalPrice = (cartItems) =>  {
        setTotalPrice(cartItems.reduce((total, curtItem) => {
            return total + curtItem.price * curtItem.count
        }, 0))
    }

    return <Fragment>
        <CartItems onUpdateTotalPrice = {onUpdateTotalPrice} />
        <CartFooterRow>
            <Row>
                <Col offset={20} span={4}>
                    Grand total: {Math.round(totalPrice * 100) / 100} $
                </Col>
            </Row>
        </CartFooterRow>
    </Fragment>
}
