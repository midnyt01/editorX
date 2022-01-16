// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Components/About/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm/TextForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Theme from './Components/theme/Theme';


function App() {
  const [textcolor, settextcolor] = useState({
    color: 'black'
  })
  const [textcolor2, settextcolor2] = useState({
    color: 'black'
  })
  const [bgcolor1, setbgcolor1] = useState({
    backgroundColor: 'white'
  })
  const [bgcolor2, setbgcolor2] = useState({
    backgroundColor: 'white'
  })
  const [buttoncolor, setbuttoncolor] = useState({
    color: 'black',
    backgroundColor: 'light-grey'
  })
  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setmode('dark');
  //     document.body.style.backgroundColor = "#1c263e";
  //   } else {
  //     setmode('light')
  //     document.body.style.backgroundColor = "white"
  //   }
  // }

  const themeNord = () => {
    settextcolor({
      color: '#8be9fd'
    })
    settextcolor2({
      color: '#f1fa8c'
    })
    setbgcolor1({
      backgroundColor: '#282a36'
    })
    setbgcolor2({
      backgroundColor: '#44475a'
    })
    setbuttoncolor({
      background: '#282a36',
      color: '#ff79c6'
    })
    document.body.style.backgroundColor = '#282a36'


    // setBox({
    //   backgroundColor: '#44475a',
    //   color: '#f1fa8c'
    // })
    // document.body.style.backgroundColor = '#282a36'
    // settexts({
    //   color: '#8be9fd'
    // })
    // setbutton({ 
    //   color: ' #ff79c6', 
    //   backgroundColor: 'rgb(37, 41, 69)' 
    // })
    // setnavcolor({
    //   color: 'white',
    //   backgroundColor:'#bd93f9'
    // })
  }




  return (
    <Router>
      <Navbar textcolor={textcolor} />

      <div>
        <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={<TextForm textcolor={textcolor} textcolor2={textcolor2} bgcolor1={bgcolor1} bgcolor2={bgcolor2} buttoncolor={buttoncolor} />}>
          </Route>
          <Route exact path="/themes" element={<Theme themeNord={themeNord} textcolor={textcolor} bgcolor2={bgcolor2} />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
