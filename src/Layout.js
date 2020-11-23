import React from 'react'
import logo from './logo.svg';
const info = {
    title: "",
    youtube: ""
}
function Layout(props) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1> My First React Hook - Component State </h1>
            </header>
            <main className="App-body">{props.children}</main>
        </div>
    );
}

export default Layout

