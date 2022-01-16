import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './TextForm.css';

export default function TextForm({textcolor, textcolor2, bgcolor1, bgcolor2, buttoncolor}) {
    const handleUpClick = ()=> {
        let NewText = text.toUpperCase();
        setText(NewText);
    }

    const handleLowClick = ()=> {
        let NewText1 = text.toLowerCase();
        setText(NewText1);
    }


    const handleOnChange = (event)=> {
        setText(event.target.value)
    }

    const handleCapClick = (event)=> {
        setText(text.charAt(0).toUpperCase() + text.slice(1))

    }

    const handleCopy = ()=> {
        navigator.clipboard.writeText(text);

    }

const [text, setText] = useState('')


    return (
        <div className='mv4 container'>
        <div>
        <label htmlFor="exampleFormControlTextarea1" className="form-label br4 ph4 pt2 f3" style={textcolor}>Enter Text to Analyze</label>
            <div className='ba ma3 pa3 br4' style={bgcolor2}>
            <div className="mb-3">
                <textarea className="form-control br4" style={{color: textcolor2.color, backgroundColor: bgcolor1.backgroundColor}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
            </div>
            <button  className="f6 dim ba dib br3 ma2 pa3 b--white-20" style={buttoncolor} onClick={handleUpClick}>UpperCase</button>
            <button  className="f6 dim ba dib br3 ma2 pa3 b--white-20" style={buttoncolor} onClick={handleLowClick}>LowerCase</button>
            <button  className="f6 dim ba dib br3 ma2 pa3 b--white-20" style={buttoncolor} onClick={handleCapClick}>Captalize</button>
            <button  className="f6 dim ba dib br3 ma2 pa3 b--white-20" style={buttoncolor} onClick={handleCopy}>Copy Text</button>
            </div>
            <div className='pa3'>
                <h3 className='my-2' style={textcolor}>Your Text Summary</h3>
                <div style={textcolor}>{text.length} characters | {text.split(/\s+/).filter((element) => { return element.length!== 0 }).length} words | {0.002 * text.length} minutes to read</div>
            </div>  
            <Link id='footer' className='tc mt5 no-underline' to={"/themes"} style={{color: (textcolor.color === 'black')? 'black' : 'white'}}> midnyt/themes</Link>
        </div>
        
        </div>
    )
    }
