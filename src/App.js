// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm/TextForm';
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
    backgroundColor: 'rgb(202, 214, 215)'
  })
  const [buttoncolor, setbuttoncolor] = useState({
    color: 'black',
    backgroundColor: 'light-grey'
  })
  const [Route, setRoute] = useState('home')
  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setmode('dark');
  //     document.body.style.backgroundColor = "#1c263e";
  //   } else {
  //     setmode('light')
  //     document.body.style.backgroundColor = "white"
  //   }
  // }
  const changeRoute = () => {
    if (Route === 'home') {
      setRoute('theme')
    } else {
      setRoute('home')
    }
  }

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
  }

  const themeLight = () => {
    settextcolor({
      color: 'black'
    })
    settextcolor2({
      color: 'black'
    })
    setbgcolor1({
      backgroundColor: 'white'
    })
    setbgcolor2({
      backgroundColor: 'rgb(202, 214, 215)'
    })
    setbuttoncolor({
      background: 'white',
      color: 'black'
    })
    document.body.style.backgroundColor = 'white'
  }

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





  return (
    <div>
      <Navbar textcolor={textcolor} />
      {(Route === 'home')
      ?<TextForm textcolor={textcolor} textcolor2={textcolor2} bgcolor1={bgcolor1} bgcolor2={bgcolor2} buttoncolor={buttoncolor} changeRoute={changeRoute} />
      : <Theme themeNord={themeNord} themeLight={themeLight} textcolor={textcolor} bgcolor2={bgcolor2} changeRoute={changeRoute} />
      }
    </div>
  );
}

export default App;
