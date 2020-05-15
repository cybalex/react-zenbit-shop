import React from 'react';
import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';

function MainMenu() {
    return <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to={"/"}><HomeOutlined /></Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to={"cart"}><ShoppingCartOutlined /></Link>
                </Menu.Item>
            </Menu>
}

export default MainMenu
