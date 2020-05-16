import React from 'react';
import { CartItem } from "./CartItem";
import { Row } from 'antd'

export const CartItemsRow = (rowItems) => {
    const renderSplit = () => {
        return rowItems.props.map(
            (item, index) => {
                console.log(item)
                return <CartItem
                    key={index}
                    props={item}
                />
            }
        )
    }

    return <Row>
        {renderSplit()}
        </Row>
}
