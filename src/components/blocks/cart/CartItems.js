import React from 'react';
import {CartItem} from "./CartItem";

function CartItems() {
    const dummyCartItems = [
        {
            name: 'Designing Data-Intensive Applications',
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51gP9mXEqWL._SX379_BO1,204,203,200_.jpg',
            price: 33.33
        },
        {
            name: 'Blueprints for Building Successful Applications on Kubernetes',
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/511Q2wJb2zL._SX379_BO1,204,203,200_.jpg',
            price: 15.55
        },
        {
            name: 'Functional Web Development with React and Redux',
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg',
            price: 40.83
        },
        {
            name: "Ansible: Up and Running: Automating Configuration Management and Deployment the Easy Way",
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/5108L4oBSpL._SX375_BO1,204,203,200_.jpg',
            price: 54.32
        }
    ]

    // return <table>
            {/*<tr>*/}
            {/*    <td>#</td>*/}
            {/*    <td>Item name</td>*/}
            {/*    <td>price, $</td>*/}
            {/*</tr>*/}

            return dummyCartItems.map(
                (item, index) => <CartItem
                    index={index}
                    props={item}
                />
            )
        //
        // </table>
}

export default CartItems
