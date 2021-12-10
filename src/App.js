import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


import About from './About';
let name = "Vedant";
function App(browser, node) {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }
  let toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtils - Dark Mode ";
      setInterval(() => {
        document.title = 'TextUtils is amazing.';
      }, 2000)
      setInterval(() => {
        document.title = 'Install TextUtils Now .';
      }, 1500)

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode ";


    }

  }
  let GreenMode = () => {
    if (mode === "light") {
      setMode('Green');
      document.body.style.backgroundColor = "#06f72f";
      document.title = "TextUtils - Green Mode ";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode ";


    }

  }
  let RedMode = () => {
    if (mode === "light") {
      setMode('Red');
      document.body.style.backgroundColor = "red";
      document.title = "TextUtils - Red Mode ";


    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode ";


    }

  }
  let [mode, setMode] = useState('light') // whether dark mode is enabled or not .
  return (
    <>
      <Navbar title="TextUtils" mode={mode} GreenMode={GreenMode} RedMode={RedMode} toggleMode={toggleMode} aboutText="About " />
      {/* <Router>
        {/* <Navbar title="textutils1" aboutText="About Textutils " /> */}
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm mode={mode} GreenMode={GreenMode} RedMopde={RedMode} showAlert={showAlert} heading="Enter test to analyze " />
        {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}

        {/* <Route exact path="/TextForm" >

            </Route>
          </Switch> */}
      </div>
      {/* // </Router> */}
    </>
  );

};

export default App;
