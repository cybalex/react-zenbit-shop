import React, { useState, useEffect } from 'react';
import {CartItem} from "./CartItem";
import {Row} from "antd";

export const CartItems = ({onUpdateTotalPrice}) => {
    const itemsNumInRow = 4;
    const [cartItems, setCartItems] = useState(initialCartItems)

    useEffect(() => {
        onUpdateTotalPrice(cartItems)
     }, [cartItems])

    const handleDelete = (id) => {
        let filteredItems = cartItems.filter((item) => {
            return item.id !== id
        })
        setCartItems(filteredItems)
    }

    const handleCountChange = (newCartItem) => {
        let updatedCartItems = cartItems.map((prevItem) => {
            return newCartItem.id !== prevItem.id ? prevItem :newCartItem
        })
        setCartItems(updatedCartItems)
    }

    //todo: move it to helper service or possibly to Array.prototype
    const arraySpliceMap = (array, itemsInRow) => {
        const resArray = [];

        array.forEach((item, index) => {
            if (index%itemsInRow === 0) {
                resArray.push([item]);
                return;
            }

            resArray[resArray.length -1].push(item);
        })

        return resArray;
    }

    const renderRowItems = (rowItems) => {
        return rowItems.map(
            (item, key) => {
                return <CartItem
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                    handleCountChange={handleCountChange}
                />
            }
        )
    }

    const renderGrid = () => {
        let rowedData = arraySpliceMap(cartItems.map(item => {
            return {...item}
        }), itemsNumInRow)

        return rowedData.map(
            (rowItems, key) => {
                return <Row key={key}>
                    {renderRowItems(rowItems.flat(), key)}
                </Row>
            }
        )
    }

    return renderGrid()
}

// todo: move it to external data cart data provider stub
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
