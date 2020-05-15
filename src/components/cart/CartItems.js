import React from 'react';
import CartItem from "./CartItem";

function CartItems() {
    const dummyCartItems = [
        {name: 'Designing Data-Intensive Applications', price: 33.33},
        {name: 'Blueprints for Building Successful Applications on Kubernetes', price: 15.55},
        {name: 'Functional Web Development with React and Redux', price: 40.83},
        {name: "Ansible: Up and Running: Automating Configuration Management and Deployment the Easy Way", price: 54.32}
    ]

    return <table>
            <tr>
                <td>#</td>
                <td>Item name</td>
                <td>price, $</td>
            </tr>

            {dummyCartItems.map(
                (item, index) => <CartItem
                    key={index}
                    index={index+1}
                    name={item.name}
                    price={item.price}
                />
            )}

        </table>
}

export default CartItems
