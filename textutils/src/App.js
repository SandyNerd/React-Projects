import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';



function App() {
  const[mode, setMode]=useState('dark');  // tells whether dark mode is enabled or not
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      } 
  
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    
    } 
  }


  return (
    <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className = "container  my-3">
<TextBox heading="Enter text to edit" mode={mode}/>
{/* <About/> */}
</div>

</>
      );
}

export default App;
