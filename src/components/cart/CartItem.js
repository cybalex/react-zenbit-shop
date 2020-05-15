import React from 'react';

function CartItem(props) {
    // todo: replace this awful html with something decent
    return <tr>
        <td>{props.index}</td>
        <td>{props.name}</td>
        <td>{props.price}</td>
    </tr>
}

export default CartItem
