import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-secondary')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }
  
  const toggleMode = (cls) => {
    console.log('Class to add:', cls, 'Type:', typeof cls);
    // removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
   {/* <Router>  */}
  {/* // <Navbar title="TextUtils" aboutText= "About Text" /> */}
  
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/> 
    <div className="container my-3">
      {/* <Routes>
          // <Route path="/" element={<TextForm showAlert={showAlert}heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>} />
          // <Route path="/about" element={<About mode={mode} />} />
     </Routes> */}
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> 
      {/* <About/>  */}
      </div>
    {/* </Router>   */}
       </>
    );
  }

export default App;
