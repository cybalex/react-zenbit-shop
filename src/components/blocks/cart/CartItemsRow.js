import React from 'react';
import { CartItem } from "./CartItem";
import { Row } from 'antd'

export const CartItemsRow = ({handleDelete, items}) => {
    const renderSplit = () => {
        return items.map(
            (item, index) => {
                return <CartItem
                    key={index}
                    item={item}
                    handleDelete={handleDelete}
                />
            }
        )
    }

    return <Row>
        {renderSplit()}
        </Row>
}
