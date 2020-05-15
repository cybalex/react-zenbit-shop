import React from 'react'
import { Layout, Row, Col } from 'antd'
import MainMenu from "../menu/MainMenu"
import Search from "../search/Search";

function Header() {
    const { Header: AppHeader } = Layout;

    return <AppHeader>
        <Row>
            <Col span={16}><MainMenu /></Col>
            <Col span={7}><Search /></Col>
        </Row>
    </AppHeader>
}

export default Header
