import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";



function App() {
    return (
        <div className="app">
            <Header />
            <NavBar />
            <Content />
        </div>
    );
}





export default App;
