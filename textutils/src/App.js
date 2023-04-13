import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';


function App() {
  return (
    <>
<Navbar title="TextUtils" aboutText="About"/>

<div className = 'container'>
<TextBox/>
</div>


    </>
      );
}

export default App;
