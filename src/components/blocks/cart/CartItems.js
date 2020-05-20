import React, { useState, useEffect } from "react"
import {CartItem} from "./CartItem"
import {Row} from "antd"
import { CartDataProviderFactory } from "./CartDataProviderFactory"
import { ArrayHelper } from "../../services/ArrayHelper"

export const CartItems = ({onUpdateTotalPrice}) => {
    const initialCartItems = CartDataProviderFactory.create('stub').get()
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

    const renderRowItems = rowItems => rowItems.map(
        (item) => {
            return <CartItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
                handleCountChange={handleCountChange}
            />
        }
    )

    const renderGrid = () => {
        let rowedData = ArrayHelper.arraySpliceMap(cartItems.map(item => {
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
