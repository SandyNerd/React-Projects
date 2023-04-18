import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import Alert from './components/Alert';



function App() {
  const[mode, setMode]=useState('dark');  // tells whether dark mode is enabled or not
  const[alert, setAlert]=useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }


  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      setAlert("Dark mode has been enabled.","Success")
      } 
  
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      setAlert("Light mode has been enabled.","Success")
    } 
  }


  return (
    <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert Alert={alert}/>
<div className = "container  my-3">
<TextBox heading="Enter text to edit" mode={mode}/>
{/* <About/> */}
</div>

</>
      );
}

export default App;
