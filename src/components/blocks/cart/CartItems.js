import React from 'react';
import { CartItemsRow } from "./CartItemsRow"

export const CartItems = () => {
    let dummyCartItems = [
        {
            name: 'Designing Data-Intensive Applications',
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51gP9mXEqWL._SX379_BO1,204,203,200_.jpg',
            price: 33.33,
            count: 1
        },
        {
            name: 'Blueprints for Building Successful Applications on Kubernetes',
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/511Q2wJb2zL._SX379_BO1,204,203,200_.jpg',
            price: 15.55,
            count: 1
        },
        {
            name: 'Functional Web Development with React and Redux',
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg',
            price: 40.83,
            count: 1
        },
        {
            name: "Ansible: Up and Running: Automating Configuration Management and Deployment the Easy Way",
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/5108L4oBSpL._SX375_BO1,204,203,200_.jpg',
            price: 54.32,
            count: 1
        },
        {
            name: 'Designing Data-Intensive Applications',
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51gP9mXEqWL._SX379_BO1,204,203,200_.jpg',
            price: 23.33,
            count: 1
        },
        {
            name: 'Blueprints for Building Successful Applications on Kubernetes',
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/511Q2wJb2zL._SX379_BO1,204,203,200_.jpg',
            price: 5.55,
            count: 1
        },
        {
            name: 'Functional Web Development with React and Redux',
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg',
            price: 4.83,
            count: 1
        },
        {
            name: "Ansible: Up and Running: Automating Configuration Management and Deployment the Easy Way",
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/5108L4oBSpL._SX375_BO1,204,203,200_.jpg',
            price: 5.32,
            count: 1
        }
    ]

    const rowedData = []

    while (dummyCartItems.length > 0) {
        rowedData.push([dummyCartItems.splice(0,4)])
    }

    return rowedData.flat().map(
        (items, index) => {
            return <CartItemsRow
                key={index}
                props={items}
            />
        }
    )
}
