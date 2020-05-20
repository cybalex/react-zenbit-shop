import React, { useState } from "react"
import { Card, Col } from "antd"
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"

export const CartItem = ({ item, handleDelete, handleCountChange}) => {
    const [cartItem, setCartItem] = useState(item);

    const onCountAdd = () => {
        let updatedCartItem = ({...cartItem, count: ++cartItem.count })
        handleCountChange(updatedCartItem)
        setCartItem(updatedCartItem)
    }

    const onCountDeduct = () => {
        if (cartItem.count < 2) {
            return
        }

        let updatedCartItem = ({...cartItem, count: --cartItem.count })
        handleCountChange(updatedCartItem)
        setCartItem(updatedCartItem)
    }

    return <Col span={6}><Card style={{ width: 240 }}>
            <div>
                <img alt="example" width="100%" src={cartItem.thumbnail} />
            </div>
            <div>
                <h3>{cartItem.name}</h3>
                <p>{cartItem.price}$</p>
                <PlusOutlined onClick={onCountAdd}/>
                <span>{cartItem.count}</span>
                <MinusOutlined onClick={onCountDeduct}/>
            </div>
        {/*todo: restyle delete icon; possibly add modal to delete the item */}
        <span onClick={() => handleDelete(cartItem.id)}>X</span>
        </Card>
    </Col>
}
