import { useEffect } from 'react'
import AboutMe from '../components/AboutMe.jsx'
import Portfolio from '../components/Portfolio.jsx'

export default function Homepage() {
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
                else {
                    entry.target.classList.remove('show');
                }
            })
        });
    
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    });


    return (
        <>
            <AboutMe />
            <Portfolio />
            <section className='hidden'>
                footer
            </section>
        </>
    )
}