import piano from '../assets/piano.svg'
import logo from '../assets/logo.svg'
import dark from '../assets/dark.svg'
import light from '../assets/light.svg'
import { useState } from 'react'



export default function Nav() {

    const mode = localStorage.getItem('mode') || localStorage.setItem('mode', light);

    const [modeState, setMode] = useState(mode);

    const handleClick = () => {
        if (modeState === light) {
            setMode(dark);
            localStorage.setItem('mode', dark)
        }
        else {
            setMode(light);
            localStorage.setItem('mode', light)
        }
    }

    return (
        <nav className='navbar'>
            <div className='nav-header'>
                <h1>Anton Osland</h1>
                <ul>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                </ul>
            </div>            
            <img src={modeState} onClick={handleClick} className='DLtoggle' />                
        </nav>
    )
}