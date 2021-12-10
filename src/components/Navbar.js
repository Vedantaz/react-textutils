// import ReactDOM from 'react-dom';
import React from 'react'
import About from '../About';
// import { a, a } from 'react-router-dom';
// const React = require("react")
// export default function Navbar({ aboutText, title }) {
export default function Navbar(props) {


    return (

        <div>

            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/TextForm">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-a active" aria-current="page" href="/TextForm">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-a active" aria-current="page" href="/About" about="-s.about">{About}About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-a dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        <div style={{ marginRight: '41px' }} className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> DarkMode </label>
                        </div>
                        <div style={{ marginRight: '41px' }} className={`form-check form-switch text-${props.mode === 'light' ? 'Green' : 'light'}`}>
                            <input className="form-check-input" onClick={props.GreenMode} type="checkbox" id="green" />
                            <label className="form-check-label" htmlFor="green"> GreenMode </label>
                        </div>
                        <div style={{ marginRight: '41px' }} className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.RedMode} type="checkbox" id="red" />
                            <label className="form-check-label" htmlFor="red"> RedMode </label>
                        </div>

                    </div>
                </div>
            </nav>
            < script type="module" src="https://unpkg.com/prop-types/prop-types.min.js" > </script>
        </div>


    );

};