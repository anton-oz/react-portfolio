import javascript from '../assets/logos/javascript-1.svg'
import html from '../assets/logos/html.svg'
import css from '../assets/logos/css.svg'
import node from '../assets/logos/nodejs2.svg'
import react from '../assets/logos/react.svg'
import mongodb from '../assets/logos/mongodb.svg'
import postgres from '../assets/logos/postgresql.svg'

import whiteSig from '../assets/name/white-sig.png'
import blackSig from '../assets/name/black-sig.png'
import signature from '../assets/name/signature.svg'


export default function AboutMe() {
    const tech = {
        js: [javascript, 'Javascript'],
        html: [html, 'HTML5'],
        css: [css, 'CSS3'],
        node: [node, 'Node.js'],
        react: [react, 'React.js'],
        mongodb: [mongodb, 'MongoDb'],
        postgres: [postgres, 'Postgresql'],
    };

    const logos = [];

    for (let lang in tech) {
        console.log(tech[lang])
        logos.push(
            <div className='logo hidden' key={tech[lang][1]}>
                <img className='svg' src={tech[lang][0]} />
                <span className='tooltip'>
                    {tech[lang][1]}
                </span>
            </div>
        )
    }
                   
    return (
        <section className='hidden'>
            <div className='hidden container'>
                {/*<h1>Anton Osland</h1>*/}
                <img src={signature} alt='Anton Osland signature' className='signature'/>
                <p>
                    Hi there! I'm a full-stack developer with experience in the following languages and databases:
                </p>
                <div className="logos">
                    {logos}
                </div>
                <p>
                    I recently recieved a certificate in Web Development from an EdX Bootcamp hosted at the University
                    of Minnesota. My hobbies include playing piano, organizing playlists, cooking, and exercising.
                </p>
                <hr className='hidden' />
                <div className='links hidden'>
                    <h3>
                        My links:
                    </h3>
                    <a href='https://github.com/anton-oz' target="_blank" className='hidden'>Github</a>
                    <a href='#' className='hidden'>Resume</a>
                    <a href='mailto:antonosland789@gmail.com' className='hidden'>Contact</a>
                </div>
            </div>
        </section>
    )

}