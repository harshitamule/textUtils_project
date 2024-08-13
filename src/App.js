import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1000)
  }

  const toggleMode = () => {
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(43 48 53)';
      document.body.style.color = 'white';
      showAlert("Enabled dark mode", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color= 'black';
      showAlert("Enabled light mode", "success");
    }
  }

  return (
    
    <>
    
    <Router>
      <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>
      
      <Routes>  
        <Route path="/" element={<TextForm heading="Enter the text to analyze" mode = {mode} showAlert = {showAlert}/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Alert Alert = {alert}/>
    </Router>
    
    
    </>
    

  );
}

export default App;
