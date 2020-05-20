import React from "react"
import Routes from "./routes"
import {BrowserRouter as Router} from "react-router-dom"
import { Layout } from "antd";
import { Header } from "./components/blocks/header/Header";

export const App = () => {
    return <Router>
            <Layout>
                <Header />
                <Routes />
            </Layout>
        </Router>
}
