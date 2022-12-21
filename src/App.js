// imrc
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  
  // Mode Coding
  const [mode,setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert("Darkmode Enabled!")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "#EFFFFD";
      document.body.style.color = "black";
      showAlert("Lightmode Enabled!")
    }
  }

  const [alert,setAlert] = useState(null);
  const showAlert = (message)=>{
    setAlert({message})
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // const [color,setColor] = useState('blue');
  // const handleColor= ()=>{
  //   if(color === "blue"){
  //     document.body.style.backgroundColor = "#42C2FF";
  //   }else{
  //     document.body.style.backgroundColor = "#F2789F";
  //   }
    
  // }

  return (
  <Router>
  <Navbar aboutText='About' title='TextUtils' mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className='container'>
  <Routes>
          {/* <Route exact path="about" element={<About />}>
          </Route> */}
          <Route exact path="/" element = {<TextForm heading="Try TextUtils - Word Counter, Character Counter and Text Optimization." mode={mode} showAlert={showAlert}/>}>
          </Route>
  </Routes>
  <Footer />
  </div>
  </Router>
  
  );
}
export default App;
