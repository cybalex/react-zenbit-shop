import React from 'react'
import './App.css'
import Routes from './routes'
import {BrowserRouter as Router} from 'react-router-dom'
import { Layout } from 'antd';
import Header from "./components/header/Header";

function App() {
    return <Router>
            <Layout>
                <Header />
                <Routes />
            </Layout>
        </Router>
}

export default App
