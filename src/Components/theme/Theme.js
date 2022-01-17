import React from 'react'
import 'tachyons'
import './Theme.css'

export default function Theme({themeNord, textcolor, bgcolor2, changeRoute, themeLight}) {
    return (
        <div>
            <div className='container'>
                <div className='f8 pa2 mb2 no-underline pointer' style={{color: (textcolor.color === 'black')? 'black' : 'white'}} onClick={changeRoute} > {'< back'}</div>
                <div className='fl br4' style={{ color: 'white', backgroundColor: bgcolor2.backgroundColor, borderRadius: '6px' }}>
                    <div id='wrapper-theme'>
                        <button onClick={themeNord} className='f6 dim ba mb2 dib dark-gray br3 ma4 pv 3 b--white-025' style={{color: 'rgb(236, 239, 244)', backgroundColor: 'rgb(36, 41, 51)'}}>nord</button>
                        <button onClick={themeLight} className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>light</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>soon...</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>soon...</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>soon...</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>soon...</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>soon...</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>soon...</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>soon...</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>soon...</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>soon...</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>soon...</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>soon...</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>soon...</button>
                        <button className='f6 dim ba mb2 dib dark-gray br3 ma4 pv3 b--white-025'>soon...</button>
                        <button className='f6 dim ba mb4 dib dark-gray br3 ma4 pv3 b--white-025'>soon...</button>
                        <button className='f6 dim ba mb4 dib dark-gray br3 ma4 pv3 b--white-025'>soon...</button>
                        <button className='f6 dim ba mb4 dib dark-gray br3 ma4 pv3 b--white-025'>soon...</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
