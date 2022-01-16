import React from 'react'
import { Link } from 'react-router-dom'
import 'tachyons'
import './Theme.css'

export default function Theme({themeNord, textcolor, bgcolor2}) {
    return (
        <div>
            <div className='container br4'>
                <Link className='f8 pa2 mb2 no-underline' style={{color: (textcolor.color === 'black')? 'black' : 'white'}} to={"/"} > {'< back'}</Link>
                <div className='fl' style={{ color: 'white', backgroundColor: bgcolor2.backgroundColor, borderRadius: '6px' }}>
                    <div id='wrapper-theme' >
                        <button onClick={themeNord} className='f6 dim ba mb2 dib dark-gray br3 ma4 pv 3 b--white-025' style={{color: 'rgb(236, 239, 244)', backgroundColor: 'rgb(36, 41, 51)'}}>nord</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>dark</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>denim</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>nord</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>dark</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>denim</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>nord</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>dark</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>denim</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>nord</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>dark</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>denim</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>nord</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>dark</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>denim</button>
                        <button className='f6 dim ba mb4 dib dark-gray br3 ma4 pv3 b--white-025'>nord</button>
                        <button className='f6 dim ba mb4 dib dark-gray br3 ma4 pv3 b--white-025'>dark</button>
                        <button className='f6 dim ba mb4 dib dark-gray br3 ma4 pv3 b--white-025'>denim</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
