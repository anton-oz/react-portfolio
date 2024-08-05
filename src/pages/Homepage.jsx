import { useEffect, useState } from 'react'
import AboutMe from '../components/AboutMe.jsx'
import Portfolio from '../components/Portfolio.jsx'
import ScrollArrow from '../components/ScrollArrow.jsx'
import Footer from '../components/Footer.jsx'
import { slideFunction } from '../utils/functions.js'

export default function Homepage() {
    
    const [scrollState, setScrollState] = useState('down')

    useEffect(() => {
        slideFunction();
    });


    return (
        <>
            <AboutMe />
            {/* <ScrollArrow scroll={scrollState}/> */}
        </>
    )
}