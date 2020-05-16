import React from 'react';
import { HomeOutlined, ShoppingCartOutlined, UserOutlined, LogoutOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Menu, Badge } from 'antd';

export const MainMenu = () => {
    const doLogout = function(event) {
        console.log('logout')
    }

    return <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to={"/"}><HomeOutlined /></Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to={"/catalogue"}><UnorderedListOutlined /></Link>
                </Menu.Item>

                <Menu.Item key="3">
                    <Link to={"/cart"}>
                        <Badge style={{width: "1px"}} count={4}>
                            <ShoppingCartOutlined style={{width: "20px"}}/>
                        </Badge>
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to={"/profile"}><UserOutlined /></Link>
                </Menu.Item>
                <Menu.Item key="5">
                    {/*I'd use react contexts later to handle logout*/}
                    {/*Or may be using a react context is a better idea. We will see*/}
                    <LogoutOutlined onClick={doLogout}/>
                </Menu.Item>
            </Menu>
}
