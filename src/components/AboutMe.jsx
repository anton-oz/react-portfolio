import javascript from '../assets/logos/javascript-1.svg'
import html from '../assets/logos/html.svg'
import css from '../assets/logos/css.svg'
import node from '../assets/logos/nodejs2.svg'
import react from '../assets/logos/react.svg'
import mongodb from '../assets/logos/mongodb.svg'
import postgres from '../assets/logos/postgresql.svg'

import whiteSig from '../assets/name/white-sig.png'
import blackSig from '../assets/name/black-sig.png'

import Links from './Links.jsx'


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
        logos.push(
            <div className='logo hidden' key={tech[lang][1]}>
                <img className='svg' src={tech[lang][0]} alt={tech[lang][1] + " Badge"} />
                <span className='tooltip'>
                    {tech[lang][1]}
                </span>
            </div>
        )
    }
                   
    return (
        <section className='hidden' id='aboutMe'>
            <div className='hidden container'>
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
            </div>
        </section>
    )

}