import React, { useState } from 'react';
import { CartItemsRow } from "./CartItemsRow"

export const CartItems = () => {

    const initialCartItems = [
        {
            id: 100500,
            name: 'Designing Data-Intensive Applications',
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51gP9mXEqWL._SX379_BO1,204,203,200_.jpg',
            price: 33.33,
            count: 1
        },
        {
            id: 100501,
            name: 'Blueprints for Building Successful Applications on Kubernetes',
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/511Q2wJb2zL._SX379_BO1,204,203,200_.jpg',
            price: 15.55,
            count: 1
        },
        {
            id: 100502,
            name: 'Functional Web Development with React and Redux',
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg',
            price: 40.83,
            count: 1
        },
        {
            id: 100503,
            name: "Ansible: Up and Running: Automating Configuration Management and Deployment the Easy Way",
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/5108L4oBSpL._SX375_BO1,204,203,200_.jpg',
            price: 54.32,
            count: 1
        },
        {
            id: 100504,
            name: 'Designing Data-Intensive Applications',
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51gP9mXEqWL._SX379_BO1,204,203,200_.jpg',
            price: 23.33,
            count: 1
        },
        {
            id: 100505,
            name: 'Blueprints for Building Successful Applications on Kubernetes',
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/511Q2wJb2zL._SX379_BO1,204,203,200_.jpg',
            price: 5.55,
            count: 1
        },
        {
            id: 100506,
            name: 'Functional Web Development with React and Redux',
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg',
            price: 4.83,
            count: 1
        },
        {
            id: 100507,
            name: "Ansible: Up and Running: Automating Configuration Management and Deployment the Easy Way",
            thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/5108L4oBSpL._SX375_BO1,204,203,200_.jpg',
            price: 5.32,
            count: 1
        }
    ]

    const [cartItems, setCartItems] = useState(initialCartItems)

    const handleDelete = (id) => {
        let items = cartItems.filter((item) => {

            return item.id !== id
        })
        setCartItems(items)
    }

    const renderGrid = () => {
        const rowedData = []

        let clonedCartItems = cartItems.map(item => {
            return {...item}
        })

        while (clonedCartItems.length > 0) {
            rowedData.push([clonedCartItems.splice(0,4)])
        }

        return rowedData.flat().map(
            (items, index) => {
                return <CartItemsRow
                    key={index}
                    items={items}
                    handleDelete={handleDelete}
                />
            }
        )
    }

    return renderGrid()
}
