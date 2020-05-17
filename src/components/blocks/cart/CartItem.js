import React from 'react'
import { Card, Col } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

export const CartItem = ({ item, handleDelete }) => {
    let {id, thumbnail, name, price, count} = item

    return <Col span={6}><Card style={{ width: 240 }}>
            <div>
                <img alt="example" width="100%" src={thumbnail} />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{price}$</p>
                <PlusOutlined />
                <span>{count}</span>
                <MinusOutlined />
            </div>
        <span onClick={() => handleDelete(id)}>X</span>
        </Card>
    </Col>
}
