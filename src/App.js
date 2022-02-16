import "./App.css";
// import About from './Components/About';
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import {
//   BrowserRouter as Router,

//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");

      // Spamming and changing title dynamically
      // setInterval(() => {
      // document.title = 'TextUtils is AMazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = ' install TextUtils now'
      //   }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
    
      <Navbar
        title="TextUtils"
        abouttext="AboutUs"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Textform
          showAlert={showAlert}
          heading="Enter your text here to analyze"
          mode={mode}
        />
      {/* <About/> */}

     
    </>
  );
}

export default App;

