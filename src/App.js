import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route
  

// } from "react-router-dom";







function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

      //to continuously change title- bad user experience
      // setInterval(() => {
      //   document.title = 'TextUtils is Awesome';
      // }, 1000);

      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }

  }
  
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes>
    
           <Route exact path="/about"  element={<About />}>
            <About mode={mode} /> 
           </Route>  */}
          {/* <Route exact path="/"  element={ */}
          <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />
          {/* }>
          </Route> */}
    {/* </Routes> */}
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
