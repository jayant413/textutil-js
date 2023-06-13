
import React, { useState } from 'react';
import './App.css'; 
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  
  // Dark Mode
  const [mode , setMode] = useState('light')
 
  const toggle = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background = '#042743'
      showAlert("Dark mode has been enabled","success ")
      document.title="Textutils - Dark mode";

      // blink mode of title
      /*
      setInterval(() => {
        document.title = 'Textutils is amazing'
      }, 2000);

      setInterval(() => {
        document.title = 'Waiting....'
      }, 1500); 
      */

    }
    else{
      setMode('light')
      document.body.style.background = 'white'
      showAlert("Light mode has been enabled","success ")
      document.title= "Textutils - Light mode";
    }
  }


  // Alert 
  const [alert,setAlert] = useState('light')

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showAlert(null)
    }, 5000);
  }



  return (
    // eslint-disable-next-line 
   <>
  <Router>
    <Navbar title="Textutils" aboutText = "About"  mode = {mode} toggle={toggle}/>
    <Alert alert={alert}/>
  
   <div className="container my-3">
      <Routes>
        {/* exact for proper match of Components */}
        <Route exact path="/about" element={<About mode={mode}/>} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try textutils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />} />
      </Routes>
    </div>
  </Router>
   
   </>
  );
}

export default App;
