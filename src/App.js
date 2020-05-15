import React from 'react'
import './App.css'
import Routes from './routes'
import MainMenu from "./components/menu/MainMenu";
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
    return <Router>
            <MainMenu />
            <Routes />
        </Router>
}

export default App
