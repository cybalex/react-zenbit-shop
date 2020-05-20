import React from "react"
import { Form, Input, Button, Row, Col } from "antd"

export const Search = () => {
    const onFinish = values => {
    };

    return <Form
                name="search"
                onFinish={onFinish}
                style={{'paddingTop': '15px'}}
            >
                <Row>
                    <Col span={15}>
                        <Form.Item>
                              <Input
                                  name="search"
                              />

                        </Form.Item>
                    </Col>
                    <Col offset={1} span={8}>
                        <Form.Item>
                            <Button type="primary">Search</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
}
