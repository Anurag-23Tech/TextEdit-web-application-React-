import './App.css';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import About from './Component/About';
import React, { useState } from 'react';
import Alert from './Component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextEdits - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextEdits is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextEdits Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextEdits - Light Mode';
    }
  }
  return (
    <>
    {/* <Navbar title="TextEdits" aboutText="About TextEdits" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextEdits" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </> 
  );
}

export default App;