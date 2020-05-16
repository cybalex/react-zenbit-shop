import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

export const CartItem = (props, ...extraProps) => {

    let {thumbnail, name, price} = props.props;
console.log(thumbnail)
console.log(thumbnail)
    return <Card style={{ width: 240 }}>
        <div>
            <img alt="example" width="100%" src={thumbnail} />
        </div>
        <div>
            <h3>{name}</h3>
            <p>{price}$</p>
        </div>
    </Card>
}
