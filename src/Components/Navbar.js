import React from 'react'

export default function Navbar({ textcolor }) {

    return (
        <div>
            <div className='f2 tc ma4 black' style={{color: (textcolor.color === 'black')? 'black' : 'white'}}>
                editorX
            </div>
        </div>
    )

}

